<?php

/**
* Database Connection
*/
function db_connect() {

    $mysqli = mysqli_connect(DB_HOST, DB_USER, DB_PWD)
        or die("Failed to connect to database!");
    mysqli_select_db($mysqli, DB_NAME)
        or die("Failed to select database!");

    if ($mysqli->connect_errno) {
        die("Database error: " . mysqli_connect_error());
    } else {
        echo "Successfully connected to database! ";
        return $mysqli;
    }
}

// Connect to database
$db = db_connect(); 
mysqli_set_charset($db, "utf8mb4");