//	const THREE = require('three');

class Game {
	constructor() {
		this.camera = 0;
		this.renderer = 0;
		this.scene = new THREE.Scene();
		this.loader = new THREE.JSONLoader();
	}

	initScene() {
		this.camera = new THREE.PerspectiveCamera(
			45, window.innerWidth / window.innerHeight,
			0.1, 1000
		);

		this.renderer = new THREE.WebGLRender();
		this.renderer.setClearColor(new THREE.Color(0x000000));
		this.renderer.setSize(window.innerWidth, window.innerHeight);


		let planeGeometry = new THREE.PlaneGeometry(100, 100);
		let planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
		let plane = THREE.Mesh(planeGeometry, planeMaterial);

		loader.load('assets/SM_Bld_Base_01.json', function (geometry, materials) {
			let material = materials && materials.lenghth ?
				new THREE.MeshFaceMaterial(materials) :
				new THREE.MeshBasicMaterial({ color: 0xFF0000 });
			let mesh = new THREE.Mesh(geometry, material);
			this.scene.add(mesh);
		});

	}


}