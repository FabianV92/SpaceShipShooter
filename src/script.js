"use strict";

// Window on load function


class Model {

    // Selecting Elements
    canvasEl = document.querySelector("canvas");
    ctx = this.canvasEl.getContext("2d");

    drawSnake = function (x, y, w, h) {
        this.ctx.fillStyle = "#78c479";
        this.ctx.fillRect(x, y, w, h);
    }

    clearSnake = function (x, y, w, h) {
        this.ctx.clearRect(x, y, w, h);
    }

    drawFood = function (x, y, w, h) {
        this.ctx.fillStyle= "#c84f59";
        this.ctx.fillRect(x,y,w,h);
    }

}


class View {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    windowSettings = function () {
        const bodyEl = document.querySelector("body");
        const htmlEl = document.querySelector("html");
        const canvasEl = document.querySelector(".canvas");
        htmlEl.style.cssText = "padding: 0px; margin: 0px;"
        bodyEl.style.cssText = "display: flex; justify-content: center;" +
            " align-items: center; width: 100vw; height: 100vh overflow: hidden;";
        canvasEl.style.cssText = "Background-Color: white; overflow: hidden";
        bodyEl.style.backgroundColor = "black";
        canvasEl.width = window.innerWidth = this.width;
        canvasEl.height = window.innerHeight = this.height;
    }
}


class Controller {

    constructor() {
        this.x = 200;
        this.y = 200;
        this.w = 25;
        this.h = 25;
    }

    snake = new Model(this);
    moveX = 0;
    moveY = 0;

    rndNumbX = (Math.trunc(Math.random() * 450)) + 1;
    rndNumbY = (Math.trunc(Math.random() * 450)) + 1;
    snakeControll = () => {
        // Safety checks an resets position if snake leaves the canvas
        this.y = this.y > window.innerHeight ? (window.innerHeight - window.innerHeight) - 20 : this.y;
        this.y = this.y < window.innerHeight - window.innerHeight - 20 ? window.innerHeight : this.y;
        this.x = this.x > window.innerWidth ? (window.innerWidth - window.innerWidth) - 20 : this.x;
        this.x = this.x < window.innerWidth - window.innerWidth - 20 ? window.innerWidth : this.x;

        requestAnimationFrame(this.snakeControll);
        // Cleaning last position and drawing the snake
        this.snake.clearSnake(0, 0, window.innerWidth, window.innerHeight);
        this.snake.drawSnake(this.x, this.y, this.w, this.h);

        this.x += this.moveX , this.y += this.moveY;
        this.snake.drawFood(this.rndNumbX, this.rndNumbY, 20, 20);
        if (this.x

        window.addEventListener("keydown", (e) => {
            switch (e.key) {
                case  "ArrowRight" : {
                    this.moveX = 3;
                    this.moveY = 0;
                    break;
                }
                case  "ArrowLeft" : {
                    this.moveX = -3;
                    this.moveY = 0;
                    break;
                }
                case "ArrowUp" : {
                    this.moveX = 0;
                    this.moveY = -3;
                    break;
                }
                case "ArrowDown" : {
                    this.moveX = 0;
                    this.moveY = 3;
                    break;
                }

            }
        })
    }

}

const main = function () {
    const window = new View(500, 500);
    window.windowSettings();
    const snakeControll = new Controller();
    snakeControll.snakeControll();


}();









