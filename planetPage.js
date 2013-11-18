
/* 
	Module: planetPage.js
	Description: The main core of our visualization; JSON file will be read in with data
	about the code that is analysed and creates visuals of a solar system that represnets
	that data.
 */
 
 var THREE = require('three')
 
 module.exports {
	makePlanet: function() {
 
				//Set up scene and camera
				var scene = new THREE.Scene();
				var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

				//Set up renderer
				var renderer = new THREE.WebGLRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );
				
				//Draw sun
				var sphere1radius = 2;
				var sphere1widthsegments = 30;
				var sphere1heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(sphere1radius,sphere1widthsegments,sphere1heightsegments);
				//Choose material
				var material = new THREE.MeshBasicMaterial();
				//Choose and set object color
				var sphere1color = new THREE.Color(0x6FFFF00);
				material.color.copy(sphere1color);
				//Add sphere to scene
				var sphere1 = new THREE.Mesh(geometry, material);
				sphere1.geometry.dynamic = true;
				sphere1.position.x = -1.5;
				sphere1.scale.x = 2;
				sphere1.scale.y = 2;
				sphere1.scale.z = 2;
				scene.add(sphere1);
				
				//Draw planet 1
				var sphere2radius = 2;
				var sphere2widthsegments = 30;
				var sphere2heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(sphere2radius,sphere2widthsegments,sphere2heightsegments);
				//Choose material
				var material = new THREE.MeshBasicMaterial();
				//Choose and set object color
				var sphere2color = new THREE.Color(0x6A5ACD);
				material.color.copy(sphere2color);
				//Add sphere to scene
				var sphere2 = new THREE.Mesh(geometry, material);
				sphere2.geometry.dynamic = true;
				sphere2.position.x = 5;
				scene.add(sphere2);
				
				//Draw planet 2
				var sphere3radius = 2;
				var sphere3widthsegments = 30;
				var sphere3heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(sphere3radius,sphere3widthsegments,sphere3heightsegments);
				//Choose material
				var material = new THREE.MeshBasicMaterial();
				//Choose and set object color
				var sphere3color = new THREE.Color(0xFF1493);
				material.color.copy(sphere3color);
				//Add sphere to scene
				var sphere3 = new THREE.Mesh(geometry, material);
				sphere3.geometry.dynamic = true;
				sphere3.position.x = 10;	
				scene.add(sphere3);
				
				//Draw planet 3
				var sphere4radius = 2;
				var sphere4widthsegments = 30;
				var sphere4heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(sphere4radius,sphere4widthsegments,sphere4heightsegments);
				//Choose material
				var material = new THREE.MeshBasicMaterial();
				//Choose and set object color
				var sphere4color = new THREE.Color(0xFF4500);
				material.color.copy(sphere4color);
				//Add sphere to scene
				var sphere4 = new THREE.Mesh(geometry, material);
				sphere4.geometry.dynamic = true;
				sphere4.position.x = -15;
				scene.add(sphere4);
				
				//Draw planet 4
				var sphere5radius = 2;
				var sphere5widthsegments = 30;
				var sphere5heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(sphere5radius,sphere5widthsegments,sphere5heightsegments);
				//Choose material
				var material = new THREE.MeshBasicMaterial();
				//Choose and set object color
				var sphere5color = new THREE.Color(0xFFE4B5);
				material.color.copy(sphere5color);
				//Add sphere to scene
				var sphere5 = new THREE.Mesh(geometry, material);
				sphere5.geometry.dynamic = true;
				sphere5.position.x = 20;
				scene.add(sphere5);
				
				//Draw planet 5
				var sphere6radius = 2;
				var sphere6widthsegments = 30;
				var sphere6heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(sphere6radius,sphere6widthsegments,sphere6heightsegments);
				//Choose material
				var material = new THREE.MeshBasicMaterial();
				//Choose and set object color
				var sphere6color = new THREE.Color(0x228B22);
				material.color.copy(sphere6color);
				//Add sphere to scene
				var sphere6 = new THREE.Mesh(geometry, material);
				sphere6.geometry.dynamic = true;
				sphere6.position.x = -25;			
				scene.add(sphere6);
				
				//Draw planet 6
				var sphere7radius = 2;
				var sphere7widthsegments = 30;
				var sphere7heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(sphere7radius,sphere7widthsegments,sphere7heightsegments);
				//Choose material
				var material = new THREE.MeshBasicMaterial();
				//Choose and set object color
				var sphere7color = new THREE.Color(0x48D1CC);
				material.color.copy(sphere7color);
				//Add sphere to scene
				var sphere7 = new THREE.Mesh(geometry, material);
				sphere7.geometry.dynamic = true;
				sphere7.position.x = -30;		
				scene.add(sphere7);		
				
				//Draw planet 7
				var sphere8radius = 2;
				var sphere8widthsegments = 30;
				var sphere8heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(sphere8radius,sphere8widthsegments,sphere8heightsegments);
				//Choose material
				var material = new THREE.MeshBasicMaterial();
				//Choose and set object color
				var sphere8color = new THREE.Color(0x800080);
				material.color.copy(sphere8color);
				//Add sphere to scene
				var sphere8 = new THREE.Mesh(geometry, material);
				sphere8.geometry.dynamic = true;
				sphere8.position.x = 35;
				scene.add(sphere8);
				
				//Draw planet 8
				var sphere9radius = 2;
				var sphere9widthsegments = 30;
				var sphere9heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(sphere9radius,sphere9widthsegments,sphere9heightsegments);
				//Choose material
				var material = new THREE.MeshBasicMaterial();
				//Choose and set object color
				var sphere9color = new THREE.Color(0x8B0000);
				material.color.copy(sphere9color);
				//Add sphere to scene
				var sphere9 = new THREE.Mesh(geometry, material);
				sphere9.geometry.dynamic = true;
				sphere9.position.x = 40;
				scene.add(sphere9);
				
				//Draw planet 9
				var sphere10radius = 2;
				var sphere10widthsegments = 30;
				var sphere10heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(sphere10radius,sphere10widthsegments,sphere10heightsegments);
				//Choose material
				var material = new THREE.MeshBasicMaterial();
				//Choose and set object color
				var sphere10color = new THREE.Color(0x4682B4);
				material.color.copy(sphere10color);
				//Add sphere to scene
				var sphere10 = new THREE.Mesh(geometry, material);
				sphere10.geometry.dynamic = true;
				sphere10.position.x = -45;
				scene.add(sphere10);

				//Add light and add to scene
				//var light = new THREE.AmbientLight( 0xFFD700 );
				//scene.add( light );
				
				//Move back camera position
				camera.position.z = 50;
		
				function render() 
				{
					requestAnimationFrame(render);
					
					//Add rotation animation
					sphere1.rotation.x += 0.01;
					sphere1.rotation.y += 0.01;
					sphere2.rotation.x += 0.01;
					sphere2.rotation.y += 0.01;
					sphere3.rotation.x += 0.01;
					sphere3.rotation.y += 0.01;
					sphere4.rotation.x += 0.01;
					sphere4.rotation.y += 0.01;
					sphere5.rotation.x += 0.01;
					sphere5.rotation.y += 0.01;
					sphere6.rotation.x += 0.01;
					sphere6.rotation.y += 0.01;
					sphere7.rotation.x += 0.01;
					sphere7.rotation.y += 0.01;
					sphere8.rotation.x += 0.01;
					sphere8.rotation.y += 0.01;
					sphere9.rotation.x += 0.01;
					sphere9.rotation.y += 0.01;
					sphere10.rotation.x += 0.01;
					sphere10.rotation.y += 0.01;					
					renderer.render(scene, camera);
				}
				render();
	}
}