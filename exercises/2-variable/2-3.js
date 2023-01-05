"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawshape();

function drawshape() {
	context.beginPath();
	context.fillStyle = "#F4F6F7";
	context.fillRect(50, 50, 350, 400);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#154360";
	context.fillRect(50, 50, 120, 275);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#154360";
	context.fillRect(280, 50, 120, 275);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#E74C3C";
	context.fillRect(50, 125, 350, 125);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#3498DB";
	context.fillRect(50, 325, 120, 125);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#3498DB";
	context.fillRect(280, 325, 120, 125);
	context.stroke();
}
