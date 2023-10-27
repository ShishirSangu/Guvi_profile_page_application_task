<?php
session_start();
unset($_SESSION['id']);
unset($_SESSION['id1']);
session_destroy();
header('location:http://43.205.94.235/guvi-web/index.html');
?>