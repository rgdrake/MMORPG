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

	onKeyDown(event) {
		switch (event.keyCode) {
			case 38: //Up
			case 87: //W
				this.moveForward = true;
				break;

			case 37: //Left
			case 65: //A
				this.moveLeft = true;
				break;

			case 40: //Down
			case 83: //A
				this.moveBackward = true;
				break;

			case 39: //Right
			case 68: //D
				this.moveRight = true;
				break;
		}
	}

	onKeyUp(event) {
		switch (event.keyCode) {
			case 38: //Up
			case 87: //W
				this.moveForward = false;
				break;

			case 37: //Left
			case 65: //A
				this.moveLeft = false;
				break;

			case 40: //Down
			case 83: //A
				this.moveBackward = false;
				break;

			case 39: //Right
			case 68: //D
				this.moveRight = false;
				break;
		}
	}
}