<?php
require_once('header.php');
require_once('db_connect.php');
require_once('security.php');

//
// Get posted data from axios
//

$dataStr = file_get_contents('php://input');
$postData = json_decode($dataStr, true)['data'];

$timestamp = $postData['timestamp'];
$name = $postData['name'];
$email = $postData['email'];
$password = $postData['password'];

//
// Generate URL key used at the end of the generated URLs
//
// This hashed string is a concatenation of two smaller hashed strings

// Set of characters for ft_keygen()
$charset = '0123456789abcdefghijklmnopqrstuvwxyz'
    . 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Generate first part of the key
// We use the timestamp to get a unique key
$new_id = $id_prefix = substr(sha1(time()), 0, 8);
// The key is the concatenation of the hashed datetime + random hashed bytes
$key = $new_id . ft_keygen($charset);

//
// Insert into the database
//

$method = $_SERVER['REQUEST_METHOD'];
if ($method === "POST")
{
    $sql = "INSERT INTO users (
            timestamp, name, email, password, url_key
        )
        VALUES (
            '$timestamp', '$name', '$email', '$password', '$key'
    )";

    if (mysqli_query($db, $sql))
        echo "NEW USER REGISTERED!";
    else {
        mysqli_close($db);
        throw new Exception('ERROR WHILE REGISTERING NEW USER!');
    }
    mysqli_close($db);
}