<?php
// Load variables from .env file
require_once("dotenv.php");
use ft\DotEnv;
(new DotEnv(__DIR__ . '/.env'))->load();

define("MAIL", getenv('MAIL'));

$to = "daisuketanigawa@live.fr";
$fullname = "full name";
$body = "$fullname has registered !\n";
$subject = "[Customer Registration]";
// Manage non western characters
$subject = '=?UTF-8?B?'. base64_encode($subject) . '?=';
$headers ='Content-Type: text/plain; charset="utf-8"'."\r\n";
$headers .= "Reply-To: $fullname <daisuketanigawa@live.fr>\r\n"
    . "From: $fullname <daisuketanigawa@live.fr>\r\n"
    . "X-Mailer: PHP/" . phpversion();
if (mail($to, $subject, $body, $headers)) {
    echo "222Message sent!";
} else {
    echo "222An error occurred while sending the mail...";
}
// Switch between development/production
define("DEV", 0);
define("PROD", 1);
$devOrProd = DEV;

if ($devOrProd == DEV)
{ // If development, enter data from your local settings
    // URL from localhost
    define("URL", "localhost:3000");
    // PDO request
    define("DB_HOST", getenv('DEV_DB_HOST'));
    define("DB_NAME", getenv('DEV_DB_NAME'));
    define("DB_USER", getenv('DEV_DB_USER'));
    define("DB_PWD", getenv('DEV_DB_PWD'));
    // Show all PHP errors
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}
else
{ // If production, enter data from your host settings
	define("URL", "localhost:3000");
    // PDO request
    define("DB_HOST", getenv('PROD_DB_HOST'));
    define("DB_NAME", getenv('PROD_DB_NAME'));
    define("DB_USER", getenv('PROD_DB_USER'));
    define("DB_PWD", getenv('PROD_DB_PWD'));
    // Hide all PHP errors
    error_reporting(0);
    ini_set('display_errors', 0);
}

 //header("Access-Control-Allow-Origin: *");
 //header("Access-Control-Allow-Origin: https://daisvke.github.io");
 //header("Access-Control-Allow-Origin: https://daisvke.github.io/check-in-anywhere");
 header("Access-Control-Allow-Origin: http://localhost:3000");
 
 header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
 //header("Access-Control-Allow-Headers: Content-Type");
 header("Access-Control-Allow-Methods: *");
 //header("Content-Type: *");
 header("Content-Type: application/json");
 ini_set("allow_url_fopen", true);
