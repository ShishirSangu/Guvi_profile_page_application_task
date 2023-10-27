<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "guvi_task";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>