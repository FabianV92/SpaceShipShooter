"use strict";


class Model {

    constructor() {
        this.rndNumbX = 300;
        this.rndNumbY = 300;
    }

    // Selecting Elements
    canvasEl = document.querySelector("canvas");
    ctx = this.canvasEl.getContext("2d");

    // Draw and clear the snake
    drawSnake = function (x, y, w, h) {
        this.ctx.fillStyle = "#78c479";
        this.ctx.fillRect(x, y, w, h);
    }
    clearSnake = function (x, y, w, h) {
        this.ctx.clearRect(x, y, w, h);
    }

    // Draw and clear food
    drawFood = function (x, y, w, h) {
        this.ctx.fillStyle = "#c84f59";
        this.ctx.fillRect(x, y, w, h);
    }
    clearFood = function (x, y, w, h) {
        this.ctx.clearRect(x, y, w, h);
    }

    // Draw new snake segment
    drawNewSegment = function (x, y, w, h) {
        this.ctx.fillStyle = "#78c479";
        this.ctx.fillRect(x,y,w,h)
    }

    // Create randomly food via math.random method
    createRndFood = () => {
        this.rndNumbX = (Math.trunc(Math.random() * 450) + 1);
        this.rndNumbY = (Math.trunc(Math.random() * 450) + 1);
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
    snakeGrow = new Model(this);
    moveX = 0;
    moveY = 0;

    snakeControl = () => {
        requestAnimationFrame(this.snakeControl);

        // Safety checks an resets position if snake leaves the canvas WILL BE changed!!!!!!
        this.y = this.y > window.innerHeight ? (window.innerHeight - window.innerHeight) - 20 : this.y;
        this.y = this.y < window.innerHeight - window.innerHeight - 20 ? window.innerHeight : this.y;
        this.x = this.x > window.innerWidth ? (window.innerWidth - window.innerWidth) - 20 : this.x;
        this.x = this.x < window.innerWidth - window.innerWidth - 20 ? window.innerWidth : this.x;

        // Cleaning last position and drawing the snake
        this.snake.clearSnake(0, 0, this.x, this.y);
        this.snake.drawSnake(this.x, this.y, 25, 25);

        // If food got eaten by snake generates new food and generates new segment of the snake (let the snake grow)
        if (this.x < (this.snake.rndNumbX + 20) && this.x > this.snake.rndNumbX - 20 &&
            this.y < this.snake.rndNumbY + 20 && this.y > this.snake.rndNumbY - 20) {
            this.snake.clearFood(this.snake.rndNumbX, this.snake.rndNumbY, window.innerWidth, window.innerHeight);
            this.snake.createRndFood();

        // Adding new segment to the snake

            this.snakeGrow.drawNewSegment(250,250,this.h,this.w);

        }
        this.snake.drawFood(this.snake.rndNumbX, this.snake.rndNumbY, 25, 25);

        // Controls via switch case, using arrow keys
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
        this.x += this.moveX , this.y += this.moveY;
    }
}


const main = function () {
    const window = new View(500, 500);
    window.windowSettings();
    const snakeControll = new Controller();
    snakeControll.snakeControl();


}();









