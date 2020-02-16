<?php
session_start();
$conn = mysqli_connect("localhost","root","","usme");
if(!$conn){
    die("error in connection");
}
$query="Select * from messages";
$res=mysqli_query($conn,$query);

$yoyo=mysqli_num_rows($res);
if($yoyo > 0){
  while($arr=mysqli_fetch_assoc($res))
  {
    if($arr['name']==$_SESSION['USERNAME']){
    echo "<div style='background-color:rgba(176,255,146,0.7);border-radius:50px;padding-right:20px;padding-left:20px;padding-bottom:10px;padding-top:2px;margin-top:10px;'>";
    echo "<h1 style='opacity:1;text-align:right;color:rgba(25,7,255,0.8)'>".strtoupper($arr["name"])."</h1>";
    echo "<p style='opacity:1;'>".$arr["message"]."</p>";
    echo "</div>";
  }
  else{
    echo "<div style='background-color:rgba(176,255,146,0.7);border-radius:50px;padding-right:20px;padding-left:20px;padding-bottom:10px;padding-top:2px;margin-top:10px;'>";
    echo "<h1 style='opacity:1;color:rgba(255,54,9,0.8)'>".strtoupper($arr["name"])."</h1>";
    echo "<p style='opacity:1;'>".$arr["message"]."</p>";
    echo "</div>";
  }
  }   
}
else {
    echo "NO MESSAGES";
}

?>