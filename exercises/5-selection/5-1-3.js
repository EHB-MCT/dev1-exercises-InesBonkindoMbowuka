"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

draw();
drawDots();

function drawDots() {
	for (let i = 0; i < 10000; i++) {
		let x = Math.random() * width;
		let y = Math.random() * height;
		if (x < width / 4) {
			context.fillStyle = "red";
		} else if (x > (width / 4) * 3) {
			context.fillStyle = "yellow";
		} else {
			context.fillStyle = "white";
		}

		Utils.fillCircle(x, y, 2);
	}
}

function draw() {
	context.lineWidth = 2;
	context.strokeStyle = "white";
	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);
}
