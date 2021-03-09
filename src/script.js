"use strict";
// Window on load function

// Selecting elements

class model {
}


class view {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    windowSettings = function () {
        const bodyEl = document.querySelector("body");
        const canvasEl = document.querySelector(".canvas");
        bodyEl.style.cssText = "display: flex; justify-content: center;" +
            " align-items: center; width: 100vw; height: 100vh";
        bodyEl.style.backgroundColor = "black";
        canvasEl.width = window.innerWidth = this.width;
        canvasEl.height = window.innerHeight = this.height;
    }
}

const test2 = new view(750, 500);
test2.windowSettings();

class controller {
}

class main {
}








