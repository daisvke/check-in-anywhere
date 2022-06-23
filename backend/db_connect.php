<?php
define("DEV", 0);
define("PROD", 1);

/**
* Database Connection
*/
function db_connect() {
    $mode = DEV;

    if ($mode == DEV) {
        $server = '127.0.0.1';
        $dbname = 'checkin';
        $user = 'root';
        $pass = '';
    }
    else {
        $server = 'db5008904463.hosting-data.io';
        $dbname = 'dbs7510848';
        $user = 'dbu1989262';
        $pass = 'HJQSsqs8787sqqshjyguQ78sqh78QSQGHJG';
    }

    $mysqli = mysqli_connect($server, $user, $pass, $dbname);
    if ($mysqli->connect_errno) {
        die("Database error: " . mysqli_connect_error());
    }
    else
    {
        echo "Successfully connected to database! ";
        return $mysqli;
    }
}

?>