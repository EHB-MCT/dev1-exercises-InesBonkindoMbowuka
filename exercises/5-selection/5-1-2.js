"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

draw();
drawDots();

function drawDots() {
	for (let i = 0; i < 10000; i++) {
		let y = Math.random() * height;
		if (y < height / 3) {
			context.fillStyle = "red";
		} else if (y < (height / 3) * 2) {
			context.fillStyle = "white";
		} else {
			context.fillStyle = "blue";
		}

		Utils.fillCircle(Math.random() * width, y, 2);
	}
}

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);
}
