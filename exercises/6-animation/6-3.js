"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let frogX = width / 2;
let frogY = height;

let car1X = -210;
let car1Y = 125;
let car1Speed = 2; // Adjust the car 1 speed as needed

// Car 2 initial position
let car2X = width;
let car2Y = 485;
let car2Speed = 3;
let distance = 0;
window.onkeydown = move;

update();

function update(eventData) {
	context.fillStyle = "lightgreen";
	context.beginPath();
	context.rect(0, 0, width, height);
	context.fill();

	context.fillStyle = "grey";
	context.beginPath();
	context.rect(0, 100, width, height - 200);
	context.fill();

	context.fillStyle = "lightgrey";
	context.beginPath();
	context.rect(0, 250, width, height - 500);
	context.fill();

	car1X += car1Speed;
	if (car1X > width) {
		car1X = -210;
	}

	// Update car 2 position
	car2X -= car2Speed;
	if (car2X < -210) {
		car2X = width;
	}

	frog();
	car1();
	car2();
	requestAnimationFrame(update);
}

function move(eventData) {
	let moveDistance = 10;
	if (eventData.code == "ArrowUp") {
		frogY -= moveDistance;
	} else if (eventData.code == "ArrowDown") {
		frogY += moveDistance;
	}

	if (eventData.code == "ArrowLeft") {
		frogX -= moveDistance;
	} else if (eventData.code == "ArrowRight") {
		frogX += moveDistance;
	}
}

function frog() {
	context.fillStyle = "darkgreen";
	Utils.fillCircle(frogX, frogY, 30);
	Utils.fillCircle(frogX, frogY - 45, 20);
	Utils.fillCircle(frogX - 30, frogY - 25, 10);
	Utils.fillCircle(frogX + 30, frogY - 25, 10);
	Utils.fillCircle(frogX - 30, frogY + 25, 10);
	Utils.fillCircle(frogX + 30, frogY + 25, 10);
}

function car1() {
	context.fillStyle = "red";
	context.beginPath();
	context.rect(car1X, car1Y, 200, 100);
	context.fill();

	context.fillStyle = "white";
	context.beginPath();
	context.rect(car1X + 10, car1Y + 5, 20, 90);
	context.rect(car1X + 130, car1Y + 5, 50, 90);
	context.fill();
}

function car2() {
	context.fillStyle = "red";
	context.beginPath();
	context.rect(car2X, car2Y, 200, 100);
	context.fill();

	context.fillStyle = "white";
	context.beginPath();
	context.rect(car2X + 160, car2Y + 5, 20, 90);
	context.rect(car2X + 50, car2Y + 5, 50, 90);
	context.fill();
}
