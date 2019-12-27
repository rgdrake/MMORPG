class Game {
	constructor() {
		if (!Detector.webgl) Detector.addGetWebGLMessage();
		this.container;
		this.player = [];
		this.stats;
		this.controls;
		this.camera;
		this.scene;
		this.renderer;

		this.container = document.createElement('div');
		this.container.style.height = '100%';
		document.body.appendChild(this.container);

		const game = this;

		this.assetsPath = './assets';

		this.clock = new THREE.Clock();

		this.init();

		window.onError = (error) => {
			console.error(JSON.stringify(error));
		};
	}

	init() {
		this.camera = new THREE.PerspectiveCamera(
			45, window.innerWidth / window.innerHeight,
			1, 2000);
		this.camera.position.set(5, 10, 5);
		this.camera.lookAt(new THREE.Vector3(752, 313, 693));

		this.scene = new THREE.Scene();
		this.scene.background = new THREE.Color(0xa0a0a0);
		//this.scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

		let light = new THREE.HemisphereLight(0xffffff);
		light.position.set(0, 200, 0);
		this.scene.add(light);

		light = new THREE.DirectionalLight(0xffffff);
		light.position.set(0, 200, 100);
		light.castShadow = true;
		light.shadow.camera.top = 180;
		light.shadow.camera.bottom = -100;
		light.shadow.camera.left = -120;
		light.shadow.camera.right = 120;
		this.scene.add(light);

		let mesh = new THREE.Mesh(
			new THREE.PlaneBufferGeometry(2000, 2000),
			new THREE.MeshPhongMaterial({ color: 0x00FF00 })
		);
		mesh.rotation.x = - Math.PI / 2;
		mesh.receiveShadow = true;
		this.scene.add(mesh);

		let grid = new THREE.GridHelper(2000, 40, 0x000000, 0x000000);
		grid.material.opacity = 0.2;
		grid.material.transparent = true;
		this.scene.add(grid);

		const loader = new THREE.FBXLoader();
		const game = this;

		loader.load(this.assetsPath + '/SM_Bld_Base_01.fbx', function (object) {

			object.name = 'Base';

			object.traverse(function (child) {
				if (child.isMesh) {
					//child.material.map = null;
					child.castShadow = true;
					child.receiveShadow = false;
				}
			});

			const tLoader = new THREE.TextureLoader();
			tLoader.load(this.assetsPath + '/Texture_01.png', function (texture) {
				object.traverse(function (child) {
					if (child.isMesh) {
						child.material.map = texture;
					}
				});
			});

			game.scene.add(object);
		});

		this.renderer = new THREE.WebGLRenderer({ antialias: true });
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.shadowMap.enabled = true;
		this.container.appendChild(this.renderer.domElement);

		this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
		this.controls.target.set(0, 250, 0);
		this.controls.update();

		window.addEventListener('resize', function () { game.onWindowResize(); }, false);
	}

	onWindowResize() {
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();

		this.renderer.setSize(window.innerWidth, window.innerHeight);
	}

	animate() {
		const game = this;
		const dt = this.clock.getDelta();

		requestAnimationFrame(function () { game.animate(); });

		if (this.player.mixer !== undefined) {
			this.player.mixer.update(dt);
		}

		this.renderer.render(this.scene, this.camera);
	}
}