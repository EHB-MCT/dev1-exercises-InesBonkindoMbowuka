"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let frameCount = 0;
let size = 10;

document.onmousemove = move;
document.onmousedown = shoot;

setup();
birds();
update();

let bird = true;

function setup() {
	context.textAlign = "center";
	context.fillStyle = "white";
	context.font = "bold 48pt Arial";
}

function update() {
	frameCount++;
	for (let i = 0; i < 100; i++) {
		birds();
	}
	//requestAnimationFrame(update);
}

/**
 *
 * @param {MouseEvent} e
 */
function move(e) {
	//console.log(e.pageX, e.pageY);
	context.fillStyle = "lightblue";
	context.fillRect(0, 0, width, height);
	context.strokeStyle = "red";
	context.lineWidth = 2;
	Utils.fillCircle(e.pageX, e.pageY, 5);
	context.stroke();
	if (Utils.calculateDistance(0, e.pageX, 0, e.pageY) < size) {
		!bird;
	} else {
		bird;
		birds();
	}
}

function shoot(e) {
	console.log(e);
}

function birds() {
	frameCount++;
	context.fillStyle = "lightblue";
	context.fillRect(0, 0, width, height);
	context.fillStyle = "white";
	context.fillText("Inès Bonkindo", width / 2, height / 2 + 24);
	context.fillStyle = "yellow";
	context.fillStyle = Utils.hsl(frameCount % 360, 70, 50);
	Utils.fillEllipse(100, 100, 20, 10);
	Utils.fillEllipse(100, 115, 5, 20);
	Utils.fillEllipse(100, 85, 5, 20);
	Utils.fillEllipse(120, 100, 20, 5);
	Utils.fillCircle(120, 100, 10);
}

frameCount++;
context.fillStyle = Utils.hsl(frameCount % 360, 70, 50);
context.fillRect(0, 0, width, height);
