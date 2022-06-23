<?php
require('header.php');
require('db_connect.php');

$db = db_connect(); 
mysqli_set_charset($db, "utf8mb4");

$dataStr = file_get_contents('php://input');
$postData = json_decode($dataStr, true)['data'];
$name = $postData['name'];
$email = $postData['email'];
$password = $postData['password'];

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case 'POST':
        $sql = "INSERT INTO users (
                name, email, password
            )
            VALUES (
                '$name', '$email', '$password'
        )";

        if(mysqli_query($db, $sql))
            echo "NEW USER REGISTERED!"
        else
            echo "ERROR WHILE REGISTERING NEW USER!"
        break;
}