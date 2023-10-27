<?php
session_start();
    if(isset($_SESSION["id"])) {
     $id = $_SESSION["id1"];
        echo $id;
    }
    else{
        
        header("Location: http://43.205.94.235/guvi-web/index.html");
    }
?>