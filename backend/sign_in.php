<?php
require_once('header.php');
require_once('db_connect.php');

$dataStr = file_get_contents('php://input');
$postData = json_decode($dataStr, true)['data'];

$name = $postData['name'];
$password = $postData['password'];
$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case 'POST':
        $sql = "SELECT *
        WHERE name ='$name'";

        if ($res = mysqli_query($db, $sql))
            echo "NEW USER REGISTERED!";
        else
            echo "ERROR WHILE REGISTERING NEW USER!";
        mysqli_close($db);
        break;
}