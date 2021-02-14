// Selecting elements
const canvas = document.querySelector("canvas");

// Setting the height and width to the canvas
canvas.width = 650;
canvas.height = 650;

// Adding background color to the canvas
canvas.style.background = "black";

// adding random stars




let pixel = canvas.getContext("2d");
let y = 0;
let x = 10;
// Function for adding stars
const animate = function () {
    requestAnimationFrame(animate);
    pixel.clearRect(0, 0, innerWidth, innerHeight);
    pixel.beginPath();
    pixel.fillStyle = "yellow";

    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;
    pixel.fillRect(x, y, 3, 4);
    y += 2;

    if (y === 600) {
        y = 0;
        x = Math.random() * window.innerWidth;
    }
}
// Calling the animate function
animate();

const img = document.createElement("img");
img.src = "../pictures/playerShip1_blue.png";
canvas.appendChild(img);

window.onload = function () {
    console.log("working")
    pixel.drawImage(img, 50, 50);
    pixel.fillStyle = "white";
}

