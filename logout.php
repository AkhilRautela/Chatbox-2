<?php
unset($_SESSION["USERNAME"]);
session_destroy();
setcookie("user","",time());
header("Location:index.php");
?>