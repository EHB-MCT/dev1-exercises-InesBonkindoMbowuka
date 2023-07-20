"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/Utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawBubble();

function drawBubble() {
	context.fillStyle = "black";
	context.fillRect(0, 0, width, height);
	context.fill();

	for (let i = 0; i < 50; i++) {
		let x = Utils.randomNumber(200, width - 200);
		let y = Utils.randomNumber(200, height - 200);

		context.fillStyle = Utils.hsla(3.6 * i, 100, 60, 0.5);
		context.beginPath();
		context.arc(x, y, Math.random() * 100, 0, Math.PI * 2);
		context.fill();
	}
}
