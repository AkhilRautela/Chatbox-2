<?php
session_start();
$name=$_SESSION['USERNAME'];
$message=$_POST['message'];
$conn = mysqli_connect("localhost","root","","usme");
if(!$conn){
    die("error in connection");
}
$query="INSERT INTO messages(name,message) values('$name','$message')";
$res=mysqli_query($conn,$query);

?>