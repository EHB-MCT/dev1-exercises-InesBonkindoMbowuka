"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

//"#B0E0E6"

drawRect();

function drawRect() {
	context.fillStyle = "#B0E0E6";
	context.strokeStyle = 5;

	context.beginPath();
	context.rect(50, 50, 300, 300);
	context.rect(50, 50, 250, 250);
	context.rect(100, 50, 200, 200);
	context.rect(150, 100, 150, 150);
	context.rect(150, 150, 100, 100);
	context.fill();
	context.stroke();
}
