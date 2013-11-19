
var THREE = require('three')
	
//Set up scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0,-40,160);
camera.up = new THREE.Vector3(0,0,1);
camera.lookAt(new THREE.Vector3(0.3,2,2));

//Set up renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//Variables for the sun

//Set up variables for orbit animation
var centerplanet1 = 0, centerplanet2 = 0, centerplanet3 = 0, centerplanet4 = 0, centerplanet5 = 0,
centerplanet6 = 0, centerplanet7 = 0, centerplanet8 = 0, centerplanet9 = 0;
var radiusplanet1 = 17, radiusplanet2 = 34, radiusplanet3 = 51, radiusplanet4 = 68, radiusplanet5 = 85, 
radiusplanet6 = 102, radiusplanet7 = 119, radiusplanet8 = 136, radiusplanet9 = 153;
var speedplanet1 = 0.03, speedplanet2 = 0.05, speedplanet3 = 0.07, speedplanet4 = 0.01, speedplanet5 = 0.04, 
speedplanet6 = 0.06, speedplanet7 = 0.02, speedplanet8 = 0.07, speedplanet9 = 0.06;

//Set up variables for planet size
var planet1size = 4, planet2size = 4, planet3size = 4, planet4size = 4, planet5size = 4,
planet6size = 4, planet7size = 4, planet8size = 4, planet9size = 4;

//Set up planet geometry
var planetgeometry = new THREE.SphereGeometry(planet1size,30,30);
var planetmaterial = new THREE.MeshBasicMaterial();
var planet1 = new THREE.Mesh(planetgeometry, planetmaterial);

//Draw planet 2
//Set geometry
var geometry = new THREE.SphereGeometry(planet2size,30,30);
//Choose material
var material = new THREE.MeshBasicMaterial();
//Choose and set object color
var planet2color = new THREE.Color(0xFF1493);
material.color.copy(planet2color);
//Add planet2 to scene
var planet2 = new THREE.Mesh(geometry, material);
planet2.geometry.dynamic = true;
planet2.position.x = 34;	
scene.add(planet2);

//Draw planet 3
//Set geometry
var geometry = new THREE.SphereGeometry(planet3size,30,30);
//Choose material
var material = new THREE.MeshBasicMaterial();
//Choose and set object color
var planet3color = new THREE.Color(0xFF4500);
material.color.copy(planet3color);
//Add planet3 to scene
var planet3 = new THREE.Mesh(geometry, material);
planet3.geometry.dynamic = true;
planet3.position.x = -51;
scene.add(planet3);

//Draw planet 4
//Set geometry
var geometry = new THREE.SphereGeometry(planet4size,30,30);
//Choose material
var material = new THREE.MeshBasicMaterial();
//Choose and set object color
var planet4color = new THREE.Color(0xFFE4B5);
material.color.copy(planet4color);
//Add planet4 to scene
var planet4 = new THREE.Mesh(geometry, material);
planet4.geometry.dynamic = true;
planet4.position.x = 68;
scene.add(planet4);

//Draw planet 5
//Set geometry
var geometry = new THREE.SphereGeometry(planet5size,30,30);
//Choose material
var material = new THREE.MeshBasicMaterial();
//Choose and set object color
var planet5color = new THREE.Color(0x228B22);
material.color.copy(planet5color);
//Add planet5 to scene
var planet5 = new THREE.Mesh(geometry, material);
planet5.geometry.dynamic = true;
planet5.position.x = -85;			
scene.add(planet5);

//Draw planet 6
//Set geometry
var geometry = new THREE.SphereGeometry(planet6size,30,30);
//Choose material
var material = new THREE.MeshBasicMaterial();
//Choose and set object color
var planet6color = new THREE.Color(0x48D1CC);
material.color.copy(planet6color);
//Add planet6 to scene
var planet6 = new THREE.Mesh(geometry, material);
planet6.geometry.dynamic = true;
planet6.position.x = -102;		
scene.add(planet6);		

//Draw planet 7
//Set geometry
var geometry = new THREE.SphereGeometry(planet7size,30,30);
//Choose material
var material = new THREE.MeshBasicMaterial();
//Choose and set object color
var planet7color = new THREE.Color(0x800080);
material.color.copy(planet7color);
//Add planet7 to scene
var planet7 = new THREE.Mesh(geometry, material);
planet7.geometry.dynamic = true;
planet7.position.x = 119;
scene.add(planet7);

//Draw planet 8
//Set geometry
var geometry = new THREE.SphereGeometry(planet8size,30,30);
//Choose material
var material = new THREE.MeshBasicMaterial();
//Choose and set object color
var planet8color = new THREE.Color(0x8B0000);
material.color.copy(planet8color);
//Add planet8 to scene
var planet8 = new THREE.Mesh(geometry, material);
planet8.geometry.dynamic = true;
planet8.position.x = 136;
scene.add(planet8);

//Draw planet 9
//Set geometry
var geometry = new THREE.SphereGeometry(planet9size,30,30);
//Choose material
var material = new THREE.MeshBasicMaterial();
//Choose and set object color
var planet9color = new THREE.Color(0x4682B4);
material.color.copy(planet9color);
//Add planet9 to scene
var planet9 = new THREE.Mesh(geometry, material);
planet9.geometry.dynamic = true;
planet9.position.x = -153;
scene.add(planet9);

//Add light and add to scene
//var light = new THREE.AmbientLight( 0xFFD700 );
//scene.add( light );

module.exports = {
	drawPlanet1: function() {
		//Draw planet 1
		//Choose and set object color
		var planet1color = new THREE.Color(0x6A5ACD);
		planetmaterial.color.copy(planet1color);
		//Add planet1 to scene
		planet1.geometry.dynamic = true;
		planet1.position.x = 17;
		scene.add(planet1);
	},
	
	drawSun: function(position) {
		var sunradius = 2;
		var sungeometry = new THREE.SphereGeometry(sunradius,30,30);
		var sunmaterial = new THREE.MeshBasicMaterial();
		var suncolor = new THREE.Color(0x6FFFF00);
		sunmaterial.color.copy(suncolor);
		var sun = new THREE.Mesh(sungeometry, sunmaterial);
		sun.geometry.dynamic = true;
		sun.scale.x = 4;
		sun.scale.y = 4;
		sun.scale.z = 4;
		sun.position.y = -position;
		scene.add(sun);		
	},
	
	drawMultipleSuns: function(numberOfClasses) {
		for (var i=0; i<numberOfClasses; i++) {
			drawSun(i*150);
		}
	},
	
	keyboardListner: function() {
		//Keyboard listener
		window.addEventListener('keypress', function (e) {
			if (e.keyCode === 97) {
				camera.position.x -= 0.5;
			}
			else if (e.keyCode === 100)	{
				camera.position.x += 0.5;
			}
			else if (e.keyCode === 119)	{
				camera.position.y += 0.5;
			}
			else if (e.keyCode === 120)	{
				camera.position.y -= 0.5;
			}
			else if (e.keyCode === 115)	{
				camera.position.z += 0.5;
			}
			else if (e.keyCode === 83) {
				camera.position.z -= 0.5;
			}
			else if (e.keyCode === 98) {
				camera.rotation.x -= 0.01;
			}
			else if (e.keyCode === 116) {
				camera.rotation.x += 0.01;
			}
			else if (e.keyCode === 104)	{
				camera.rotation.y += 0.01;
			}
			else if (e.keyCode === 102)	{
				camera.rotation.y -= 0.01;
			}
			else if (e.keyCode === 103) {
				camera.rotation.z += 0.01;
			}
			else if (e.keyCode === 71) {
				camera.rotation.z -= 0.01;
			}
		}, false);
	},
	
	renderDrawing: function() {
		renderer.render(scene, camera);
	},

	animateDrawing: function() {
		requestAnimationFrame(animate);
	
		//Add rotation animation
		centerplanet1 += speedplanet1;
		planet1.position.x = radiusplanet1*Math.sin(centerplanet1);
		planet1.position.z = radiusplanet1*Math.cos(centerplanet1);
		planet1.rotation.x += 0.01;
		planet1.rotation.y += 0.01;
		centerplanet2 += speedplanet2;
		planet2.position.x = radiusplanet2*Math.sin(centerplanet2);
		planet2.position.z = radiusplanet2*Math.cos(centerplanet2);
		planet2.rotation.x += 0.01;
		planet2.rotation.y += 0.01;
		centerplanet3 += speedplanet3;
		planet3.position.x = radiusplanet3*Math.sin(centerplanet3);
		planet3.position.z = radiusplanet3*Math.cos(centerplanet3);
		planet3.rotation.x += 0.01;
		planet3.rotation.y += 0.01;
		centerplanet4 += speedplanet4;
		planet4.position.x = radiusplanet4*Math.sin(centerplanet4);
		planet4.position.z = radiusplanet4*Math.cos(centerplanet4);
		planet4.rotation.x += 0.01;
		planet4.rotation.y += 0.01;
		centerplanet5 += speedplanet5;
		planet5.position.x = radiusplanet5*Math.sin(centerplanet5);
		planet5.position.z = radiusplanet5*Math.cos(centerplanet5);
		planet5.rotation.x += 0.01;
		planet5.rotation.y += 0.01;
		centerplanet6 += speedplanet6;
		planet6.position.x = radiusplanet6*Math.sin(centerplanet6);
		planet6.position.z = radiusplanet6*Math.cos(centerplanet6);
		planet6.rotation.x += 0.01;
		planet6.rotation.y += 0.01;
		centerplanet7 += speedplanet7;
		planet7.position.x = radiusplanet7*Math.sin(centerplanet7);
		planet7.position.z = radiusplanet7*Math.cos(centerplanet7);
		planet7.rotation.x += 0.01;
		planet7.rotation.y += 0.01;
		centerplanet8 += speedplanet8;
		planet8.position.x = radiusplanet8*Math.sin(centerplanet8);
		planet8.position.z = radiusplanet8*Math.cos(centerplanet8);
		planet8.rotation.x += 0.01;
		planet8.rotation.y += 0.01;
		centerplanet9 += speedplanet9;
		planet9.position.x = radiusplanet9*Math.sin(centerplanet9);
		planet9.position.z = radiusplanet9*Math.cos(centerplanet9);
		planet9.rotation.x += 0.01;
		planet9.rotation.y += 0.01;	
		
		//Render =D
		render();
	},
	
};
