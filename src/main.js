//	const THREE = require('three');

class Game {
	constructor() {
		this.camera = 0;
		this.renderer = 0;
		this.scene = new THREE.Scene();
		this.loader = new THREE.FBXLoader();
	}

	initScene() {
		this.camera = new THREE.PerspectiveCamera(
			45, window.innerWidth / window.innerHeight,
			0.1, 1000
		);

		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor(new THREE.Color(0x000000));
		this.renderer.setSize(window.innerWidth, window.innerHeight);


		let planeGeometry = new THREE.PlaneGeometry(100, 100);
		let planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
		let plane = THREE.Mesh(planeGeometry, planeMaterial);
		plane.rotation.x = -0.5 * Math.PI;
		plane.position.set(15, 0, 0);
		this.scene.add(plane);



		this.camera.position.set(-30, 40, 30);
		this.camera.lookAt(this.scene.position);

		document.getElementById('game').appendChild(renderer.domElement);
		this.renderer.render(this.scene, this.camera);

	}
}

let game = new Game();
game.initScene();