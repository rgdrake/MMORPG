//	const THREE = require('three');
var MMORPG = MMORPG || {};

MMORPG.Game = {
	camera: 0,
	renderer: 0,
	scene: new THREE.Scene(),
	loader: new THREE.FBXLoader(),

	initLight: function () {
		this.scene.add(new THREE.AmbientLight("#FFFFFF"))
	},

	initGround: function () {
		let groundGeometry = new THREE.PlaneBufferGeometry(100, 100);
		let dirt = new THREE.TextureLoader().load('assets/pixel-pave.jpg')
		let earth = new THREE.MeshLambertMaterial({
			map: dirt
		})

		let ground = new THREE.Mesh(groundGeometry, earth);
		ground.rotation.x = -Math.PI / 2;
		ground.receiveShadow = true;

		this.scene.add(ground);
	},

	initCamera: function () {
		this.camera = new THREE.PerspectiveCamera(
			45, window.innerWidth / window.innerHeight,
			0.1, 1000);
	},

	initRenderer: function () {
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor(new THREE.Color(0xFFFFFF));
		this.renderer.setSize(window.innerWidth, window.innerHeight);
	},

	buildScene: function (that) {
		var _obj = 0;
		this.loader.load('assets/SM_Bld_Base_01.fbx', function (object) {
			_obj = object;
			that.scene.add(_obj);
		}, undefined, function (e) {
			console.error("ERROR!");
			console.error(e);
		});
	},

	initScene: function () {
		this.initCamera();
		this.initRenderer();
		this.initGround();
		this.initLight();
		this.buildScene(this);

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