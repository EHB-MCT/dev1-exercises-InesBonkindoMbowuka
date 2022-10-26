"use strict";
import * as Utils from "../../scripts/Utils.js";

let horizontalLines = 60;
let verticalLines = 30;

let width = 600;
let height = 300;

drawLine();
fillRect();

function fillRect() {}

function drawLine() {
	let step = width / horizontalLines;
	for (let i = 0; i < horizontalLines; i++) {
		Utils.drawLine(0 + step * i, 0, width - step * i, height);
	}
	for (let i = 0; i < verticalLines; i++) {
		Utils.drawLine(0, 0 + step * i, width, height - step * i);
	}
}
