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
				
				//Draw sun
				var sunradius = 2;
				var sunwidthsegments = 30;
				var sunheightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(sunradius,sunwidthsegments,sunheightsegments);
				//Choose material
				var material = new THREE.MeshPhongMaterial({shading: THREE.SmoothShading, blending:    THREE.AdditiveBlending, color: 0x6FFFF00, shininess: 1, vertexColors: false  } );
				//Choose and set object color
				//var suncolor = new THREE.Color(0x6FFFF00);
				//material.color.copy(suncolor);
				//Add sun to scene
				var sun = new THREE.Mesh(geometry, material);
				sun.geometry.dynamic = true;
				sun.scale.x = 4;
				sun.scale.y = 4;
				sun.scale.z = 4;
				scene.add(sun);
				
				//Draw planet 1
				var planet1widthsegments = 30;
				var planet1heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(planet1size,planet1widthsegments,planet1heightsegments);
				//Choose material
				var material = new THREE.MeshBasicMaterial();
				//Choose and set object color
				var planet1color = new THREE.Color(0x6A5ACD);
				material.color.copy(planet1color);
				//Add planet1 to scene
				var planet1 = new THREE.Mesh(geometry, material);
				planet1.geometry.dynamic = true;
				planet1.position.x = 17;
				scene.add(planet1);
				
				//Draw planet 2
				var planet2widthsegments = 30;
				var planet2heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(planet2size,planet2widthsegments,planet2heightsegments);
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
				var planet3widthsegments = 30;
				var planet3heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(planet3size,planet3widthsegments,planet3heightsegments);
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
				var planet4widthsegments = 30;
				var planet4heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(planet4size,planet4widthsegments,planet4heightsegments);
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
				var planet5widthsegments = 30;
				var planet5heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(planet5size,planet5widthsegments,planet5heightsegments);
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
				var planet6widthsegments = 30;
				var planet6heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(planet6size,planet6widthsegments,planet6heightsegments);
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
				var planet7widthsegments = 30;
				var planet7heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(planet7size,planet7widthsegments,planet7heightsegments);
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
				var planet8widthsegments = 30;
				var planet8heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(planet8size,planet8widthsegments,planet8heightsegments);
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
				var planet9widthsegments = 30;
				var planet9heightsegments = 30;
				//Set geometry
				var geometry = new THREE.SphereGeometry(planet9size,planet9widthsegments,planet9heightsegments);
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
		
				//Keyboard listener
				window.addEventListener('keypress', function (e) {
						if (e.keyCode === 97) 
						{
							camera.position.x -= 0.5;
						}
						else if (e.keyCode === 100)
						{
							camera.position.x += 0.5;
						}
						else if (e.keyCode === 119)
						{
							camera.position.y += 0.5;
						}
						else if (e.keyCode === 120)
						{
							camera.position.y -= 0.5;
						}
						else if (e.keyCode === 115)
						{
							camera.position.z += 0.5;
						}
						else if (e.keyCode === 83)
						{
							camera.position.z -= 0.5;
						}
						else if (e.keyCode === 98)
						{
							camera.rotation.x -= 0.01;
						}
						else if (e.keyCode === 116)
						{
							camera.rotation.x += 0.01;
						}
						else if (e.keyCode === 104)
						{
							camera.rotation.y += 0.01;
						}
						else if (e.keyCode === 102)
						{
							camera.rotation.y -= 0.01;
						}
						else if (e.keyCode === 103)
						{
							camera.rotation.z += 0.01;
						}
						else if (e.keyCode === 71)
						{
							camera.rotation.z -= 0.01;
						}
				}, false);
				
				//Add light and add to scene
				var light = new THREE.AmbientLight( 0xFFD700 );
				scene.add( light );
				
				function animate()
				{
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
				}
						
				function render() 
				{													
					renderer.render(scene, camera);
				}	
				
				animate();