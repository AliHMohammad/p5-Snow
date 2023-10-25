"use strict";
//Created using P5.js

window.addEventListener("load", initApp);


const snowflakes = []

function initApp() {
    createCanvas(windowWidth, windowHeight);
    setGradient(0, 0, width, height, color("#000000"), color("#3551bf"), color("#6a72cc"));

    for (let i = 0; i < 400; i++){
        snowflakes.push(new SnowFlake());
    }
}

function draw() {
    setGradient(0, 0, width, height, color("#000000"), color("#3551bf"), color("#6a72cc"));
    for (const snowflake of snowflakes) {
        snowflake.display();
    }
}


class SnowFlake {
    constructor() {
        this.xPos = Math.floor(Math.random() * (windowWidth - (-350) + 1)) + -350;
        this.yPos = -(Math.random() * (500 - 100) + 100);
        this.diameter = Math.random() * 7 + 5;
        this.fallSpeed = Math.random() * 1.9 + 0.35;
        this.windSpeed = Math.random() * 0.35 + 0.25;
    }

    fall() {
        this.yPos += this.fallSpeed;
        this.xPos += this.windSpeed;
        this.yPos > windowHeight + 50 || this.xPos > windowWidth + 50 ? this.reset(): null;
    }

    reset() {
        this.yPos = -(Math.random() * (300 - 100) + 100);
        this.xPos = Math.floor(Math.random() * (windowWidth - -350 + 1)) + -350;
        this.fallSpeed = Math.random() * 1.9 + 0.35;
        this.diameter = Math.random() * 7 + 5;
    }

    display() {
        this.fall()
        fill(255);
        circle(this.xPos, this.yPos, this.diameter);
        this.applyGlow()
    }

    applyGlow() {
        for (let i = 0; i < 3; i++) {
            fill(color(255, 255, 255, 10));
            noStroke();
            circle(this.xPos, this.yPos, this.diameter + i * 5);
        }
    }
}


function setGradient(x, y, w, h, c1, c2, c3) {
    for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(lerpColor(c1, c2, inter), c3, inter);
        stroke(c);
        line(x, i, x + w, i);
    }
}







