"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawRect();
drawBlack();

function drawRect(){
    context.beginPath();
    context.strokeStyle="red";
    context.rect(50,50,150,150);
    context.stroke();
    context.beginPath();
    context.rect(75,275,50,50);
    context.stroke();
    context.beginPath();
    context.rect(275,75,50,50);
    context.stroke();
    context.beginPath();
    context.rect(200,200,150,150);
    context.stroke();
}

function drawBlack(){
    context.fillStyle="black";
    context.beginPath();
    context.rect(125,125,150,150);
    context.stroke();
    context.fill();
    context.beginPath();
    context.rect(50,325,25,25);
    context.stroke();
    context.fill();
    context.beginPath();
    context.rect(325,50,25,25);
    context.stroke();
    context.fill();
}
