"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

sunset();

function sunset() {
	context.beginPath();
	context.fillStyle = "#F39C12";
	context.fillRect(0, 0, width, height);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#DC7633";
	context.fillRect(0, 200, width, height / 4);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#943126";
	context.fillRect(0, 370, width, height / 3);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#FDEBD0";
	Utils.drawCircle(width / 2, height - 200, 300);
	context.fill();
	context.beginPath();
	context.fillStyle = "#1A5276";
	context.fillRect(0, 550, width, height);
	context.stroke();
}
