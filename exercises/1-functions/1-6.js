"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawNight();

function drawNight() {
	context.beginPath();
	context.fillStyle = "orange";
	context.rect(50, 50, 400, 400);
	context.fill();

	//left side of lines
	context.beginPath();
	context.strokeStyle = "WHITE";
	context.lineWidth = 10;
	context.moveTo(50, 200);
	context.lineTo(300, 450);
	context.moveTo(50, 125);
	context.lineTo(375, 450);
	context.moveTo(50, 50);
	context.lineTo(215, 215);
	context.moveTo(285, 285);
	context.lineTo(450, 450);
	context.moveTo(125, 50);
	context.lineTo(525, 450);
	context.moveTo(200, 50);
	context.lineTo(600, 450);
	context.stroke();

	//right side of lines
	context.beginPath();
	context.strokeStyle = "white";
	context.lineWidth = 10;
	context.moveTo(300, 50);
	context.lineTo(50, 300);
	context.moveTo(375, 50);
	context.lineTo(50, 375);
	context.moveTo(450, 50);
	context.lineTo(290, 210);
	context.moveTo(50, 450);
	context.lineTo(220, 290);
	context.moveTo(450, 125);
	context.lineTo(125, 450);
	context.moveTo(450, 200);
	context.lineTo(125, 525);
	context.stroke();

	context.beginPath();
	context.fillStyle = "white";
	context.ellipse(50, 25, 200, 225, 0, 0, Math.PI * 2);
	context.ellipse(450, 25, 200, 225, 0, 0, Math.PI * 2);
	context.fill();

	context.beginPath();
	context.fillStyle = "white";
	context.ellipse(50, 475, 200, 225, 0, 0, Math.PI * 2);
	context.ellipse(450, 475, 200, 225, 0, 0, Math.PI * 2);
	context.fill();

	context.beginPath();
	context.strokeStyle = "orange";
	context.rect(50, 50, 400, 400);
	context.stroke();
}
