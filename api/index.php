<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
ini_set("allow_url_fopen", true);

include("db_connect.php");

$conn = new DbConnect();
//$db = $conn->connect();
$db = mysqli_connect("127.0.0.1", "root", "", "checkin");

$str = file_get_contents('php://input');
$postData = json_decode($str, true)['data'];
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

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case 'POST':
        $sql = "INSERT INTO clients (
                'language', 'timestamp', 'firstname', 'surname',
                'arrival_date', 'departure_date', 'birth_date', 'birth_place', 'nationality',
                'address', 'address_zipcode', 'address_city', 'address_country',
                'mobile', 'email', 'sign',
                'cb_number', 'cb_exp_date', 'cb_security_code''
            )
            VALUES (
                '$language', '$timestamp', '$firstname', '$surname',
                '$arrival_date', '$departure_date', '$birth_date', '$birth_place', '$nationality',
                '$address', '$address_zipcode', '$address_city', '$address_country',
                '$mobile', '$email', '$sign',
                '$cb_number', '$cb_exp_date', '$cb_security_code'
            )";

        if(mysqli_query($db, $sql)) {
            $data = ['status' => 1, 'message' => "Record successfully created"];
        } else {
            $data = ['status' => 0, 'message' => "Failed to create record."];
        }

        echo json_encode($data);
        break;
}