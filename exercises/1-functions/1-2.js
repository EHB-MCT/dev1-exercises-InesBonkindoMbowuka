"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawRect();

function drawRect() {
	context.beginPath();
	context.moveTo(50, 50);
	context.lineTo(150, 50);
	context.stroke();

	context.beginPath();
	context.moveTo(50, 50);
	context.lineTo(50, 150);
	context.stroke();

	context.beginPath();
	context.moveTo(50, 150);
	context.lineTo(150, 150);
	context.stroke();

	context.beginPath();
	context.moveTo(150, 50);
	context.lineTo(150, 150);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "red";
	context.moveTo(50, 50);
	context.lineTo(150, 150);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "red";
	context.moveTo(150, 50);
	context.lineTo(50, 150);
	context.stroke();
}
