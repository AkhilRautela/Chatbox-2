<html>
<head> 
<link rel="icon" href="./mainhoon.png"/>
<meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="styles.css"/>
    <title>HOME</title>
    <script src="jq.js" ></script>
    
</head>
<body>
    <div>
    <h1 id ="he">
     <?php
      session_start();
     if(isset($_SESSION['USERNAME'])){
      echo "WELCOME ".strtoupper($_SESSION['USERNAME']);
     }
     else{
       header("location:login.html");
     }
    ?>
    </h1>
     <button id="logout" onClick="logout()" > LOGOUT </button>
    </div>
    <center>
    <div id = "container">
    <div id="head">

    </div>
    </div>
    </center>
    <center>
  <input type="text" id="yoyo" placeholder="ENTER YOUR MESSAGE" />
  <button id="btn" >SEND</button>
</center>

<script src="boss.js" ></script>
</body>
</html>