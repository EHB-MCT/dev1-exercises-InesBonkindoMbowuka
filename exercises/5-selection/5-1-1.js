"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawflag();

function drawflag() {
	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);

	for (let i = 0; i < 1000; i++) {
		let x = Math.random() * width;
		let y = Math.random() * height;
		if (x < width / 2) {
			context.fillStyle = "red";
		} else {
			context.fillStyle = "green";
		}

		Utils.drawCircle(x, y, 10);
	}
}
