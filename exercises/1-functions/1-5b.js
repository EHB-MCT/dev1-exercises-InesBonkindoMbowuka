"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawSunset();

function drawSunset() {
	context.beginPath();
	context.fillStyle = "orange";
	context.rect(50, 50, 300, 300);
	context.fill();

	context.beginPath();
	context.fillStyle = "yellow";
	context.ellipse(200, 250, 100, 50, 0, 0, Math.PI * 2);
	context.fill();

	context.beginPath();
	context.fillStyle = "blue";
	context.rect(50, 250, 300, 100);
	context.fill();
}
