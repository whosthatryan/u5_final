import React from 'react';
import Sketch from 'react-p5';

export default function Canvas () {

    let c2;

    const setup = (p5, canvasParentRef) => {
        createCanvas(700, 700);
        c2 = createGraphics(700, 700);
    }

    const draw = (p5) => {
        background(100);
        c2.background(250, 0, 250);
        noStroke();
        c2.noStroke();

        shape(pX, pY, w, h)
        if(frameCount % 10 == 0) {
            rect(random(width), 200, 50, 200);
        }
        if(frameCount % 10 == 0) {
            rect(200, random(height), 200, 50);
        }
    }
    return (
        <div>
            {Canvas}
        </div>
    )
}



    