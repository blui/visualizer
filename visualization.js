
var THREE = require('three');

module.exports = {
	rotateAnimation: function(x,y) {
		x += 0.01;
		y += 0.01;
	},
	
	drawPlanet: function(planetxposition, sunyposition, planetsize) {
		var planetgeometry = new THREE.SphereGeometry(planetsize,30,30);
		var planetmaterial = new THREE.MeshBasicMaterial();
		var planetcolor = new THREE.Color(0x6A5ACD);
		planetmaterial.color.copy(planetcolor);
		var planet = new THREE.Mesh(planetgeometry, planetmaterial);
		planet.geometry.dynamic = true;
		planet.position.x = planetxposition;
		planet.position.y = sunyposition;
		scene.add(planet);
		rotateAnimation(planet.rotation.x, planet.rotation.y);
	},
	
	drawMultiplePlanets: function(numberofplanets, sunyposition, planetsize) {
		for (var i=0; i<numberofplanets; i++) {
			drawPlanet(17+(i*17), sunyposition, planetsize);
		}
	},

	drawSun: function(yposition, sunsize) {
		var sungeometry = new THREE.SphereGeometry(sunsize,30,30);
		var sunmaterial = new THREE.MeshBasicMaterial();
		var suncolor = new THREE.Color(0x6FFFF00);
		sunmaterial.color.copy(suncolor);
		var sun = new THREE.Mesh(sungeometry, sunmaterial);
		sun.geometry.dynamic = true;
		sun.position.y = -yposition;
		scene.add(sun);		
	},
	
	drawMultipleSunsAndPlanets: function(numberofclasses, numberofplanets, sunsize, planetsize) {
		for (var i=0; i<numberofclasses; i++) {
			drawSun(i*150, sunsize);
			drawMultiplePlanets(numberofplanets, -(i*150), planetsize);
		}
	},

	keyboardListener: function() {
		window.addEventListener('keypress', function (e) {
			if (e.keyCode === 97) {
				camera.position.x -= 0.5;
			}
			else if (e.keyCode === 100) {
				camera.position.x += 0.5;
			}
			else if (e.keyCode === 119) {
				camera.position.y += 0.5;
			}
			else if (e.keyCode === 120) {
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
			else if (e.keyCode === 104) {
				camera.rotation.y += 0.01;
			}
			else if (e.keyCode === 102) {
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
	
	animate: function() {
		requestAnimationFrame(animate);
	
		//Add rotation animation
		//centerplanet1 += speedplanet1;
		//planet1.position.x = radiusplanet1*Math.sin(centerplanet1);
		//planet1.position.z = radiusplanet1*Math.cos(centerplanet1);
		//planet1.rotation.x += 0.01;
		//planet1.rotation.y += 0.01;
		//centerplanet2 += speedplanet2;
		//planet2.position.x = radiusplanet2*Math.sin(centerplanet2);
		//planet2.position.z = radiusplanet2*Math.cos(centerplanet2);
		//planet2.rotation.x += 0.01;
		//planet2.rotation.y += 0.01;

		//Render =D
		render();
	},
	
	render: function() {
		renderer.render(scene, camera);
	}
};	
