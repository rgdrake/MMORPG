//	const THREE = require('three');
var MMORPG = MMORPG || {};

MMORPG.Game = {
	camera: 0,
	renderer: 0,
	scene: new THREE.Scene(),
	loader: new THREE.FBXLoader(),

	initScene: function () {
		this.camera = new THREE.PerspectiveCamera(
			45, window.innerWidth / window.innerHeight,
			0.1, 1000);


		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor(new THREE.Color(0xFFFFFF));
		this.renderer.setSize(window.innerWidth, window.innerHeight);


		let planeGeometry = new THREE.PlaneGeometry(50, 50);
		let planeMaterial = new THREE.MeshLambertMaterial({ color: 0x0000FF });
		let plane = new THREE.Mesh(planeGeometry, planeMaterial);
		plane.rotation.x = -Math.PI / 2;
		this.scene.add(plane);

		this.scene.add(new THREE.AmbientLight("#FFFFFF"))

		const that = this;
		var _obj = 0;
		this.loader.load('assets/SM_Bld_Base_01.glb', function (object) {
			_obj = object;
			that.scene.add(_obj.scene);
		}, undefined, function (e) {
			console.error("ERROR!");
			console.error(e);
		});

		this.camera.position.set(-30, 40, 30);
		this.camera.lookAt(this.scene.position);

		document.getElementById('game').appendChild(this.renderer.domElement);
		this.animate();
	},

	animate: function () {
		requestAnimationFrame(MMORPG.Game.animate);
		MMORPG.Game.renderer.render(MMORPG.Game.scene, MMORPG.Game.camera);
	}
}

MMORPG.Game.initScene();