<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "";
$username = ""; 
$password = ""; 
$dbname = "";

try {
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error, $conn->connect_errno);
    }
    $category = isset($_GET['category']) ? $_GET['category'] : "";

    if ($category !== "") {
        $sql = "SELECT id, imagepath, description, title FROM images WHERE category = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $category);
    } else {
        $sql = "SELECT id, imagepath, description, title FROM images WHERE category NOT IN ('Logo', 'Profile')";
        $stmt = $conn->prepare($sql);
    }

    $stmt->execute();
    $result = $stmt->get_result();

    $data = array();

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    echo json_encode($data);

    $conn->close();
} catch (Exception $e) {
    echo "Error creating connection: " . $e->getMessage();
    echo "Error code: " . $e->getCode();
}

?>
