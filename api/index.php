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
$postData = json_decode($str, true)['data']['t1'];
$d = $postData;
$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case 'POST':
        $sql = "INSERT INTO test (t1) VALUES ('$d')";

        if(mysqli_query($db, $sql)) {
            $data = ['status' => 1, 'message' => "Record successfully created"];
        } else {
            $data = ['status' => 0, 'message' => "Failed to create record."];
        }

        /*

                language 	timestamp 	firstname 	surname 	arrival_date 	departure_date 
        birth_date 	birth_place 	nationality 	address 	address_zipcode 	address_city
        address_country 	mobile 	email 	sign 	cb_number 	cb_exp_date 	cb_security_code 

        $sql = "INSERT INTO clients (firstname, email) VALUES ('$n', '$p')";

        if(mysqli_query($db, $sql)) {
            $data = ['status' => 1, 'message' => "Record successfully created"];
        } else {
            $data = ['status' => 0, 'message' => "Failed to create record."];
        }
        */


        //$stmt = $db->prepare($sql);
        //$stmt->bindParam("dai", "dai@dl.FR");


        /*
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO clients(firstname, email, mobile) values(:firstname, :email, :mobile)";
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':name', $user->firstname);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':mobile', $user->mobile);
        $stmt->bindParam(':created_at', $date);

        if($stmt->execute()) {
            $data = ['status' => 1, 'message' => "Record successfully created"];
        } else {
            $data = ['status' => 0, 'message' => "Failed to create record."];
        }
        */
        echo json_encode($data);
        break;
}