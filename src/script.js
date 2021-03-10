"use strict";

// Window on load function


class Model {

    drawSnake = function (x, y, w, h) {
        const canvasEl = document.querySelector("canvas");
        const ctx = canvasEl.getContext("2d");
        ctx.fillStyle = "#78c479";
        ctx.fillRect(x, y, w, h);
    }

    clearSnake = function (x, y, w, h) {
        const canvasEl = document.querySelector("canvas");
        const ctx = canvasEl.getContext("2d");
        ctx.clearRect(x, y, w, h);
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

    update
    snakeControll = function () {
        let snake = new Model(this);
        snake.drawSnake(this.x, this.y, this.w, this.h);
        window.addEventListener("keydown", (e) => {
            console.log("current position" + this.y)
            this.y = this.y > window.innerHeight ? (window.innerHeight - window.innerHeight) - 20 : this.y;
            this.y = this.y < window.innerHeight - window.innerHeight - 20 ? window.innerHeight : this.y;
            this.x = this.x > window.innerWidth ? (window.innerWidth - window.innerWidth) - 20 : this.x;
            this.x = this.x < window.innerWidth - window.innerWidth - 20 ? window.innerWidth : this.x;

            switch (e.key) {
                case  "ArrowRight" : {
                    this.x += 20;
                    snake.clearSnake(0, 0, window.innerWidth, window.innerHeight);
                    snake.drawSnake(this.x, this.y, this.w, this.h);
                    break;
                }
                case  "ArrowLeft" : {
                    this.x -= 20;
                    snake.clearSnake(0, 0, window.innerWidth, window.innerHeight);
                    snake.drawSnake(this.x, this.y, this.w, this.h);
                    break;
                }
                case "ArrowUp" : {
                    this.y -= 20;
                    snake.clearSnake(0, 0, window.innerWidth, window.innerHeight);
                    snake.drawSnake(this.x, this.y, this.w, this.h);
                    break;
                }
                case "ArrowDown" : {
                    this.y += 20;
                    snake.clearSnake(0, 0, window.innerWidth, window.innerHeight);
                    snake.drawSnake(this.x, this.y, this.w, this.h);
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









