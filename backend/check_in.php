<?php
require_once('header.php');
require_once('db_connect.php');

$dataStr = file_get_contents('php://input');
$postData = json_decode($dataStr, true)['data'];
print_r($postData);

$language = $postData['language'];
$timestamp = $postData['timestamp'];
$firstname = $postData['firstname'];
$surname = $postData['surname'];
$arrival_date = $postData['arrivalDate'];
$departure_date = $postData['departureDate'];
$birth_date = $postData['birthDate'];
$birth_place = $postData['birthPlace'];
$nationality = $postData['nationality'];
$address = $postData['address'];
$address_zipcode = $postData['addressZipCode'];
$address_city = $postData['addressCity'];
$address_country = $postData['addressCountry'];
$mobile = $postData['mobile'];
$email = $postData['email'];
$sign = $postData['sign'];
$cb_number = $postData['cbNumber'];
$cb_exp_date = $postData['cbExpDate'];
$cb_security_code = $postData['cbSecurityCode'];

$error = false;

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case 'POST':
        $sql = "INSERT INTO clients (
                language, timestamp, firstname, surname,
                arrival_date, departure_date, birth_date, birth_place, nationality,
                address, address_zipcode, address_city, address_country,
                mobile, email, sign,
                cb_number, cb_exp_date, cb_security_code
            )
            VALUES (
                '$language', '$timestamp', '$firstname', '$surname',
                '$arrival_date', '$departure_date', '$birth_date', '$birth_place', '$nationality',
                '$address', '$address_zipcode', '$address_city', '$address_country',
                '$mobile', '$email', '$sign',
                '$cb_number', '$cb_exp_date', '$cb_security_code'
        )";

        if($res = mysqli_query($db, $sql))
            $error = false;
        else
            $error = true;
        mysqli_close($db);
        break;
}

if ($error === false)
{
    echo "Record successfully created!";

    $to = MAIL;
    $fullname = "$firstname $surname";
    $body = "$fullname has registered !\n";
    $subject = "[Customer Registration]";
    // Manage non western characters
    $subject = '=?UTF-8?B?'. base64_encode($subject) . '?=';
    $headers ='Content-Type: text/plain; charset="utf-8"'."\r\n";
    $headers .= "Reply-To: $fullname <$email>\r\n"
        . "From: $fullname <$email>\r\n"
        . "X-Mailer: PHP/" . phpversion();
    // Send mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent!";
    } else {
        echo "An error occurred while sending the mail...";
    }
}
else
    echo "Failed to create record!";