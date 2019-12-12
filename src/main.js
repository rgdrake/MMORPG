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
		this.renderer.setClearColor(new THREE.Color(0xFFFFFF));
		this.renderer.setSize(window.innerWidth, window.innerHeight);


		let planeGeometry = new THREE.PlaneGeometry(50, 50);
		let planeMaterial = new THREE.MeshLambertMaterial({ color: 0x0000FF });
		let plane = new THREE.Mesh(planeGeometry, planeMaterial);
		plane.rotation.x = - Math.PI;
		plane.position.set(15, 0, 0);
		this.scene.add(plane);

		this.scene.add(new THREE.AmbientLight("#FFFFFF"))

		let model = 0;
		this.loader.load('assets/SM_Bld_Base_01.fbx', function (object) {
			model = object;
		}, undefined, function (e) {
			console.log('ERROR!');
			console.log(e);
		});
		this.scene.add(model);

		this.camera.position.set(-30, 40, 30);
		this.camera.lookAt(this.scene.position);

		document.getElementById('game').appendChild(this.renderer.domElement);
		this.renderer.render(this.scene, this.camera);

	}
}

let game = new Game();
game.initScene();