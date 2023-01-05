"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/Utils.js";

drawbubbles();

function drawbubbles() {
	let bubblesAmount = 20;

	for (let i = 0; i < bubblesAmount; i++) {
		let randomX = margin + Math.random() * width - margin * 2;
		let randomY = margin + Math.random() * width - margin * 2;
		let randomsize = 10 + Math.random() * 40;
		context.fillStyle = Utils.hsla(randomHue, 50, 50, 0, 5);
		Utils.drawCircle(randomX, randomY, randomsize);
	}
}
