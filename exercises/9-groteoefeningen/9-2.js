"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = playerMove;

draw();

let hue = Utils.randomNumber(0, 360);

function draw() {
	Utils.drawCircle(100, 50, 40);
}

function playerMove(e) {
	context.fillStyle = "white";
	context.fillRect(0, 0, width, height);
	context.fillStyle = "black";
	Utils.fillCircle(e.pageX, e.pageY, 50);
}
