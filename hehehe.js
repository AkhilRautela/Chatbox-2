var manager = new THREE.LoadingManager();
var c= document.createElement('progress');
c.max=100;
c.style.position="absolute";
c.style.top=window.innerHeight/2;
c.style.left=window.innerWidth/2;


document.body.appendChild(c);
manager.onStart = function( item, loaded, total ) {

};
manager.onLoad = function() {
c.style.opacity=0;
};

manager.onProgress = function( item, loaded, total ) {
   console.log(total);
   console.log(loaded);
   c.value=loaded;
  
}
manager.onError = function( url ) {
    
};
var loader = new THREE.TextureLoader(manager);
var te= loader.load("dsjdd.jpg");
var golat= loader.load("hjjk.jpg");

$("#bottom").click(function () { 
    var c=document.createElement("div");
    c.innerHTML="<p> AKHIL RAUTELA </p>"
    c.classList="anim";
    c.style.top=window.innerHeight/2+"px";
    c.style.left=(window.innerWidth/2-150)+"px";
    document.getElementById("head").appendChild(c);  
});
$("#br").click(function () { 
    var c=document.createElement("div");
    c.innerHTML="<p> YOYO </p>"
    c.classList="anim";
    c.style.top=window.innerHeight/2+"px";
    c.style.left=(window.innerWidth/2-150)+"px";
    document.getElementById("head").appendChild(c);  
});
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,100000);
camera.position.set(30,30,-1000);
scene.background=new THREE.Color('rgb(0,0,0)');

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
var pLight = new THREE.PointLight(0xffffff,1,10,0);
pLight.position.set(0,0,0);
scene.add( pLight );
var gola= new THREE.SphereGeometry(1000,128,128);

var golkatexture= new THREE.MeshPhongMaterial({map:golat});
golkatexture.side=THREE.BackSide;
var apnasundargola=new THREE.Mesh(gola,golkatexture);
apnasundargola.position.set(0,0,0);
scene.add(apnasundargola);
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.getElementById("container").appendChild(renderer.domElement);
var controls = new OrbitControls(camera,document.body);
controls.minDistance=1;
var earthotex= loader.load('yes.jpg');
var eartho = new THREE.SphereGeometry(190,100,100);
var earttexo = new THREE.MeshBasicMaterial({map:earthotex});
var ear= new THREE.Mesh(eartho,earttexo);
ear.position.set(30,30,-11100);
scene.add(ear);
renderer.setAnimationLoop(()=>{
    if(camera.position.z>=-11020&&camera.position.z<=-50){
        camera.rotation.z+=0.06; 
        camera.rotation.x+=0.009;
        camera.rotation.y+=0.009;
        ear.rotation.x+=0.006;
        controls.enabled=false;
        console.log(camera.position);
        for(i=0;i<25;i++){
            var geo = new THREE.BoxBufferGeometry(0.2,0.2,60);
            var mat = new THREE.MeshBasicMaterial({map:te});
            var me = new THREE.Mesh(geo,mat);
            me.position.x=Math.floor(Math.random() * 100);  
            me.position.y=Math.floor(Math.random() * 100);
            me.position.z=-Math.floor(Math.random() * 10000)-500;
            scene.add(me);
            }
            if(camera.position.z<=-11000&&camera.position.z>=-5000)
            {
             camera.position.z-=20; 
             console.log("slow speed");
             }
            else{
              camera.position.z-=25;
            }
            if(camera.position.z==-11000){
    
                console.log("created");
                camera.rotation.set(0,0,0);
                camera.position.set(0,0,0);
                controls.enabled=true;
                
            } 
                      
    }
   
    
    renderer.render(scene,camera);
   
  
});
