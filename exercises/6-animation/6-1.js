"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;




window.onmousemove=drawCrosshair;


function drawCrosshair(eventData){
    context.fillStyle="white";
    context.fillRect(0,0, width,height);
    Utils.drawLine(eventData.x, 0, eventData.x, height)
    Utils.drawLine(0, eventData.y, width, eventData.y)

}





