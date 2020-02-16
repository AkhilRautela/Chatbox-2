var scene = new THREE.Scene();
scene.background=new THREE.Color("black");
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,100000);
camera.position.set(30,30,10);
var loader = new THREE.TextureLoader();
var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set(0,0,10000);
scene.add( directionalLight );
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setAnimationLoop(()=>{
    if(camera.position<=10000)
        {camera.rotation.z+=0.06; 
        camera.rotation.x+=0.009;
        camera.rotation.y+=0.009;
        }
    for(i=0;i<25;i++){
        var geo = new THREE.BoxBufferGeometry(0.5,0.5,100);
        var mat = new THREE.MeshBasicMaterial({color:"#ffff00"});
        var me = new THREE.Mesh(geo,mat);
        me.position.x=Math.floor(Math.random() * 100);  
        me.position.y=Math.floor(Math.random() * 100);
        me.position.z=-Math.floor(Math.random() * 10000);
        scene.add(me);
        }
    
    renderer.render(scene,camera);
    if(camera.position.z<=-3000&&camera.position.z>=-5000)
    {camera.position.z-=10;
        
     console.log("slow speed");
     }
    else{
     camera.position.z-=20;
    }
   
});
