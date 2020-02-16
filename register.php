<?php
$name=$_POST['username'];
$pass=$_POST['password'];
$conn = mysqli_connect("localhost","root","","usme");
if(!$conn){
    die("error in connection");
}
$query="INSERT INTO users(username,password) values('$name','$pass')";
$res=mysqli_query($conn,$query);
if($res){
   echo "<script>alert('REGISTERED')</script>";
   header("location:login.html");
}
else{
    echo "<script>alert('ERROR IN DATABASE')</script>";
    header("location:index.php");
}
?>