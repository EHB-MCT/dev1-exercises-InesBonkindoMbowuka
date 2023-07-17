"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawLine();

function drawLine() {
	context.lineWidth = 5;
	context.beginPath();
	context.strokeStyle = "yellow";
	context.moveTo(100, 50);
	context.lineTo(100, 300);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "yellow";
	context.moveTo(200, 50);
	context.lineTo(0, 50);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "yellow";
	context.moveTo(200, 300);
	context.lineTo(0, 300);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "blue";
	context.moveTo(250, 45);
	context.lineTo(250, 305);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "blue";
	context.moveTo(250, 45);
	context.lineTo(400, 305);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "blue";
	context.moveTo(400, 45);
	context.lineTo(400, 305);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "green";
	context.moveTo(450, 45);
	context.lineTo(450, 305);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "green";
	context.moveTo(450, 50);
	context.lineTo(600, 50);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "green";
	context.moveTo(450, 175);
	context.lineTo(600, 175);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "green";
	context.moveTo(450, 305);
	context.lineTo(600, 305);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "red";
	context.moveTo(650, 50);
	context.lineTo(800, 50);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "red";
	context.moveTo(650, 175);
	context.lineTo(800, 175);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "red";
	context.moveTo(650, 300);
	context.lineTo(800, 300);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "red";
	context.moveTo(800, 300);
	context.lineTo(800, 175);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "red";
	context.moveTo(650, 50);
	context.lineTo(650, 175);
	context.stroke();
}
