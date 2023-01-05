"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawRect();
drawLine();
drawLine2();

function drawRect(){
    context.beginPath();
    context.rect(50,50,150,150)
    context.stroke();
}

function drawLine(){
    context.lineWidth=1;
    context.strokeStyle= "red";
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(200,200);
    context.stroke();
}

function drawLine2(){
    context.lineWidth=1;
    context.strokeStyle= "red";
    context.beginPath();
    context.moveTo(200,50);
    context.lineTo(50,200);
    context.stroke();
}



