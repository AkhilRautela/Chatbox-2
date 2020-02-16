<?php
if(isset($_COOKIE["user"])){
    session_start();
    $_SESSION["USERNAME"]=$_COOKIE["user"];
    header("location:homeno.php");
}


?>
<html>
<head>
    <link rel="icon" href="./mainhoon.png"/>
    <title>CHATBOX</title>
    <link rel="stylesheet" href="majja.css" />
    <meta name="viewport" content="width=device-width">
    <script src="jq.js"></script>
    <script src="three.js"></script>
    <script src="OrbitControls.js"></script>
</head>
<body id="head">
  <div id="container">
<div id ="he">
  <button onClick="window.location.href = 'login.html';" id="logi" > LOGIN </button>
  <button onClick="window.location.href = 'register.html';" id="logo"> REGISTER </button>
</div>

<button id="bottom">ABOUT ME</button>
<button id="br">PAGE INFO </button>
</div>
<script src="hehehe.js">
</script>
</body>
</html>