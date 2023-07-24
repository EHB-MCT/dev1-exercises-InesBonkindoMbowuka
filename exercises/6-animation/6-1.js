"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = move;

function move(eventData) {
	let x = eventData.pageX;
	let y = eventData.pageY;

	context.fillStyle = "white";
	context.beginPath();
	context.rect(0, 0, width, height);
	context.fill();

	context.strokeStyle = "red";
	context.lineWidth = 5;
	Utils.drawLine(x, 0, x, height);
	Utils.drawLine(0, y, width, y);
}
