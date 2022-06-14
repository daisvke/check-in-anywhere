<?php
    /**
    * Database Connection
    */
    class DbConnect {
        private $server = '127.0.0.1';
        private $dbname = 'checkin';
        private $user = 'root';
        private $pass = '';

        public function connect() {
            $mysqli = mysqli_connect($this->server, $this->user, $this->pass, $this->dbname);
            if ($mysqli->connect_errno) {
                die("Database error: " . $mysqli->connect_error);
            }
            else
            {
                echo "Successfully connected to database!";
                return $mysqli;
            }
        }
    }
?>