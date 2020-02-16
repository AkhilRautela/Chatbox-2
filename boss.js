var d=1;
var m;
var yom;
setInterval(function(){
   if(d%2!=0){
   m =document.getElementById("container").scrollHeight;
   console.log("m changed to"+m);
   }
   $("#head").load("loaddata.php");
   if(d%2==0){
      yom=document.getElementById("container").scrollHeight;
     }
   if(yom!=m){
      document.getElementById("container").scrollTop=document.getElementById("container").scrollHeight;
      console.log("yoyoy rendered " +m + " " +yom );
   }
   d++;
  
},500);
$("#btn").click(function(){
  var c= $("#yoyo").val();
  console.log(c);
  $.ajax(
     {
      url:"senddata.php",
      type:"POST",
      data:{
         name:"boss",
         message:c
      },
      success: function() {
         console.log("message sent");
     } 
     }
  );
  
});
function logout(){
   $.ajax({
      url:"logout.php",
      type:"POST",
      data:{
         yoy:"sdjjd"
      }
   });
   setTimeout(()=>{
   alert("i am working");
   window.location.replace("index.php"); 
    },0);
}