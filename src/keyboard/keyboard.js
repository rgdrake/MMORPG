class Keyboard {
	constructor(object) {
		this.object = object;
		this.domElement = document;
		this.moveSpeed = 1;

		this.domElement.addEventListener('keydown', this.onKeyDown.bind(this), false);
		this.domElement.addEventListener('keyup', this.onKeyUp.bind(this), false);
	}

	update() {
		if (this.moveForward)
			this.object.translateZ(-this.moveSpeed);
		if (this.moveBackward)
			this.object.translateZ(this.moveSpeed);
		if (this.moveLeft)
			this.object.translateX(-this.moveSpeed);
		if (this.moveRight)
			this.object.translateX(this.moveSpeed);
	}
}