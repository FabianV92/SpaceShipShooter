"use strict";

// Window on load function


class Model {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

    }

    drawSnake = function () {
        const canvasEl = document.querySelector("canvas");
        const ctx = canvasEl.getContext("2d");
        ctx.fillStyle = "#78c479";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    clearSnake = function (x,y,w,h) {
        const canvasEl = document.querySelector("canvas");
        const ctx = canvasEl.getContext("2d");
        ctx.clearRect(x,y,w,h);
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

    snakeControll = function () {

        window.addEventListener("keydown", (e) => {
            const snake = new Model(this.x, this.y, this.w, this.h);

            switch (e.key) {
                case  "ArrowRight" : {
                    this.x += 20;
                    snake.clearSnake(0,0,500,500);
                    snake.drawSnake();
                    break;
                }
                case  "ArrowLeft" : {
                    this.x -= 20;
                    snake.clearSnake(0,0,500,500);
                    snake.drawSnake();
                    break;
                }
                case "ArrowUp" : {
                    this.y -= 20;
                    snake.clearSnake(0,0,500,500);
                    snake.drawSnake();
                    break;
                }
                case "ArrowDown" : {
                    this.y += 20;
                    snake.clearSnake(0,0,500,500);
                    snake.drawSnake();
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









