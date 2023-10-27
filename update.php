<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "guvi_task";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST["email"];
$name = $_POST["name"];
$age = $_POST["age"];
$gender = $_POST["gender"];
$phone = $_POST["phone"];
$dob = $_POST["dob"];
// $college = $_POST["college"];
// $state = $_POST["state"];
$degree = $_POST["degree"];
// $dept = $_POST["dept"];
// $yop = $_POST["yop"];
// $aoi = $_POST["aoi"];

// Prepare and bind SQL statement for update
// $sql = $conn->prepare("UPDATE user SET name=?, age=?, gender=?, phone=?, dob=?, college=?, state=?, degree=?, department=?, yop=?, aoi=? WHERE email=?");
// $sql->bind_param("ssssssssssss", $name, $age, $gender, $phone, $dob, $college, $state, $degree, $dept, $yop, $aoi, $email);

$sql = $conn->prepare("UPDATE user SET name=?, age=?, gender=?, phone=?, dob=?, degree=? WHERE email=?");
$sql->bind_param("sssssss", $name, $age, $gender, $phone, $dob, $degree, $email);

// Execute the update query
if ($sql->execute()) {
    // Update successful
    $result = $conn->query("SELECT * FROM user");
    $dbdata = array();

    // Fetch data and prepare for JSON
    while ($row = $result->fetch_assoc()) {
        $dbdata[] = $row;
    }

    // Encode data to JSON
    $jsondata = json_encode($dbdata, JSON_PRETTY_PRINT);

    // Update JSON file
    $myFile = "/xampp/htdocs/guvi-web/data.json";
    file_put_contents($myFile, $jsondata);

    // Output JSON data
    echo $jsondata;
    echo "2"; // Success code
} else {
    // Update failed
    echo "-1"; // Error code
}

// Close the database connection and prepared statement
$sql->close();
$conn->close();

?>