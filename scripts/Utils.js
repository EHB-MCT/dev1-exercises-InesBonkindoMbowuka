"use strict";

import context from "./context.js";

export function drawLine(x1, y1, x2, y2) {
	context.beginPath();
	context.moveTo(x1, y1);
	context.lineTo(x2, y2);
	context.stroke();
}

export function rgb() {
	let rgb = "rgb(" + r + "," + g + "," + b + ")";
	return rgb;
}

export function rgba() {
	let rgba = "rgba(" + r + "," + g + "," + b + "," + a + ")";
	return rgba;
}

export function drawCircle(x, y, radius) {
	context.beginPath();
	context.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI);
	context.fill();
}

export function hsla(h, s, l, a) {
	return "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
}

export function fillAndStrokeEllipse(x, y, w, h) {
	fillEllipse(x, y, w, h);
	strokeCircle(x, y, w, h);
}

export function fillAndStrokeCircle(x, y, radius) {
	fillCircle(x, y, radius);
	strokeCircle(x, y, radius);
}

export function strokeEllipse(x, y, rX, rY) {
	context.beginPath();
	context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
	context.stroke();
}

export function fillEllipse(x, y, rX, rY) {
	context.beginPath();
	context.ellipse(x, y, rX, rY, 0, 0, Math.PI * 2);
	context.fill();
}

export function strokeCircle(x, y, radius) {
	strokeEllipse(x, y, radius, radius);
}

export function fillCircle(x, y, radius) {
	fillEllipse(x, y, radius, radius);
}

export function randomGaussian() {
	var rand = 0;

	for (var i = 0; i < 6; i += 1) {
		rand += Math.random() * 2 - 1;
	}

	return rand / 6;
}

export function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function calculateDistance(x1, y1, x2, y2) {
	return Math.hypot(x2 - x1, y2 - y1);
}

export function degrees(degrees) {
	return degrees * (Math.PI / 180);
}

export function hsl(h, s, l) {
	return "hsl(" + h + "," + s + "%," + l + "%)";
}
