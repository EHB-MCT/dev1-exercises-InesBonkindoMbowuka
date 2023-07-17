"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawLine();


function drawLine(){
    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(350,50);
    context.lineTo(50,100);
    context.lineTo(350,100);
    context.lineTo(50,150);
    context.lineTo(350,150);
    context.lineTo(50,200);
    context.lineTo(350,200);
    context.lineTo(50,250);
    context.lineTo(350,250);
    context.lineTo(50,50);
    context.stroke();
}
