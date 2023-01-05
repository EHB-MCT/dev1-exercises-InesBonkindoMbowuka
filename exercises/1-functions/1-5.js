"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


drawRect();
drawCircle();
drawBalk();



function drawCircle(){
    context.beginPath();
    context.fillStyle="yellow";
	context.ellipse(225, 275, 125, 125, 0, 0, 2 * Math.PI);
	context.fill();
}

function drawRect(){
    context.fillStyle="orange";
    context.beginPath();
    context.rect(50,50,350,350);
    context.fill();
    context.stroke();
}

function drawBalk(){
    context.fillStyle="blue";
    context.beginPath();
    context.rect(50,275,350,125);
    context.fill();
    context.stroke();
}

