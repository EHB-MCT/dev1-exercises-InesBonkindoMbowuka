"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawLine();

function drawLine() {
	let x = 50;
	let y = 100;

	context.beginPath();
	context.moveTo(x, y - 50);
	context.lineTo(width - x, height / 15);
	context.lineTo(x, y + 50);
	context.lineTo(width - x, height / 5);
	context.lineTo(x, y + 150);
	context.lineTo(width - x, height - 450);
	context.lineTo(x, y + 250);
	context.lineTo(width - x, height - 350);
	context.lineTo(x, y + 350);
	context.lineTo(width - x, height - 250);
	context.lineTo(x, y + 450);
	context.lineTo(width - x, height - 150);
	context.lineTo(x, y + 550);
	context.lineTo(width - x, height - 50);
	context.lineTo(x, x);
	context.stroke();
}
