"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawRect();

function drawRect() {
	context.beginPath();
	context.strokeStyle = "red";
	context.rect(50, 50, 175, 175);
	context.rect(225, 225, 175, 175);
	context.rect(75, 315, 65, 60);
	context.rect(312, 75, 65, 65);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "red";
	context.fillRect = "black";
	context.rect(140, 140, 175, 175);
	context.stroke();
	context.fill();

	context.beginPath();
	context.fillRect = "black";
	context.rect(50, 375, 25, 25);
	context.rect(375, 50, 25, 25);
	context.fill();
}
