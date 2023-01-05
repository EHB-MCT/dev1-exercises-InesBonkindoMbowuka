"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawRect();

function drawRect(){
    context.fillStyle="#B0E0E6";
    context.beginPath();
    context.rect(50,50,350,350);
    context.fill();
    context.stroke();
    context.beginPath();
    context.rect(50,50,300,300);
    context.fill();
    context.stroke();
    context.beginPath();
    context.rect(100,50,250,250);
    context.fill();
    context.stroke();
    context.beginPath();
    context.rect(150,100,200,200);
    context.fill();
    context.stroke();
    context.beginPath();
    context.rect(150,150,150,150);
    context.fill();
    context.stroke();
}