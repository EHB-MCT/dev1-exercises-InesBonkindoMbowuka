"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

sunset();

function sunset() {
	context.beginPath();
	context.fillStyle = "#F39C12";
	context.fillRect(50, 50, 300, 50);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#DC7633";
	context.fillRect(50, 100, 300, 50);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#943126";
	context.fillRect(50, 150, 300, 50);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#FDEBD0";
	Utils.drawCircle(195, 190, 90);
	context.stroke();
	context.beginPath();
	context.fillStyle = "#1A5276";
	context.fillRect(50, 200, 300, 50);
	context.stroke();
	context.beginPath();
	context.fillStyle = "white";
	context.fillRect(50, 250, 300, 50);
	context.stroke();
}
