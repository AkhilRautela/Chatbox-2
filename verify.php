<?php
$name=$_POST['username'];
$pass=$_POST['password'];

$conn = mysqli_connect("localhost","root","","usme");
if(!$conn){
    die("error in connection");
}
$query="Select * from users where username='$name' AND password='$pass' ";
$res=mysqli_query($conn,$query);

$yoyo=mysqli_num_rows($res);
if($yoyo == 1){
  while($arr=mysqli_fetch_assoc($res)){
      session_start();
      setcookie("user",$arr['username'],time()+24*60*60);
      $_SESSION["USERNAME"]=$arr['username'];
      header("location:homeno.php");
  }
}       
else{
    header("location:register.html");
}
  ?>