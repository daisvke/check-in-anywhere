<?php
require('header.php');
require('db_connect.php');

$db = db_connect(); 
mysqli_set_charset($db, "utf8mb4");

$dataStr = file_get_contents('php://input');
$postData = json_decode($dataStr, true)['data'];
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

        if(mysqli_query($db, $sql))
            $error = false;
        else
            $error = true;
        break;
}

if ($error === false)
{
    echo "Record successfully created!";

    $to = "daisuketanigawa@live.fr";
    $body = "$firstname $surname has registered !\n"
    . "=========================================\n"
    . " Date-time: $timestamp\n"
    . "=========================================\n";
    $subject = "[Customer Registration]";
    // Send mail
    mail($to, $subject, $body);
}
else
    echo "Failed to create record!";