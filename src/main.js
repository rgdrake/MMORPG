/*
const THREE = require('./lib/three.js');
const OBJLoader = require('./lib/OBJLoader');


import * as THREE from './lib/three.js';
import { OBJLoader } from './lib/OBJLoader.js';
*/

var camera = 0;
var renderer = 0;
var scene = new THREE.Scene();
var manager = 0;	//new THREE.LoadingManager();
var loader = 0;		//new THREE.OBJLoader(manager);
var texture = 0;

function load() {
	let object = 0; //loaded object

	function loadModel() {
		object.traverse(function (child) {
			if (child.isMesh) child.material.map = texture;
		});
		scene.add(object);
	}

	manager = new THREE.LoadingManager(loadModel);

	texture = new THREE.TextureLoader().load('assets/pixel-pave.jpg');

	manager.onStart = function (url, itemsLoaded, itemsTotal) {
		console.log(`Started loading ${url}. \nLoaded: ${itemsLoaded} of ${itemsTotal} files`);
	};

	manager.onLoad = function () {
		console.log('Loading complete.');
	};

	manager.onProgress = function (url, itemsLoaded, itemsTotal) {
		console.log(`Loading file: ${url}.\nLoaded ${itemsLoaded} of ${itemsTotal} files.`)
	};

	manager.onError = function (url) {
		console.error(`Error loading ${url}`);
	};

	loader = new THREE.OBJLoader(manager);
	loader.load('assets/SM_Bld_Base_01.obj', (obj) => {
		object = obj;
	}, manager.onProgress, manager.onError);
}

function initLight() {
	scene.add(new THREE.AmbientLight(0xFFFFFF));
}

function initGround() {
	let groundGeometry = new THREE.PlaneBufferGeometry(100, 100);
	let earth = new THREE.MeshLambertMaterial({
		map: texture
	});
	let ground = new THREE.Mesh(groundGeometry, earth);
	ground.rotation.x = -Math.PI / 2;
	ground.receiveShadow = true;

	scene.add(ground);

}



function initCamera() {
	camera = new THREE.PerspectiveCamera(
		45, window.innerWidth / window.innerHeight,
		0.1, 1000);
}

function initRenderer() {
	renderer = new THREE.WebGLRenderer();
	renderer.setClearColor(new THREE.Color(0xFFFFFF));
	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}

function init() {
	load();
	initLight();
	initGround();
	initCamera();
	initRenderer();

	this.camera.position.set(-30, 75, 30);
	this.camera.lookAt(this.scene.position);

	document.getElementById('game').appendChild(this.renderer.domElement);
}

init();
animate();

/*
MORPG.Game = {
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
			console.log(_obj.children[0]);
			that.scene.add(_obj);
		}, undefined, function (e) {
			console.error("ERROR!");
			console.error(e);
		});
	},

	init: function () {
		this.initCamera();
		this.initRenderer();
		this.initGround();
		this.initLight();
		this.buildScene(this);

		this.camera.position.set(-30, 40, 30);
		this.camera.lookAt(this.scene.position);

		document.getElementById('game').appendChild(this.renderer.domElement);
	},



	animate: function () {
		requestAnimationFrame(MMORPG.Game.animate);
		MMORPG.Game.renderer.render(MMORPG.Game.scene, MMORPG.Game.camera);
	}
}

MMORPG.Game.init();
MMORPG.Game.animate();
*/