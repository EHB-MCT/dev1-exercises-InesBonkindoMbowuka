"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawshape();

function drawshape() {
	context.beginPath();
	context.fillStyle = "lightgrey";
	context.fillRect(0, 0, width / 1.4, height);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#154360";
	context.fillRect(0, 0, width / 3, height - 250);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#154360";
	context.fillRect(1070, 0, width / 3, height - 250);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#E74C3C";
	context.fillRect(0, 125, width, height - 500);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#3498DB";
	context.fillRect(0, 462, width / 3, height);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#3498DB";
	context.fillRect(1070, 462, width / 3, height);
	context.stroke();
}
