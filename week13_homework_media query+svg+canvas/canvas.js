let canvas = document.getElementById("myCanvas");

let ctx = canvas.getContext("2d");



//-------------------- background -----
// sky
ctx.beginPath();
ctx.rect(0, 0, 500, 400);
ctx.fillStyle = "#caf0f8";
ctx.fill();

// grass
ctx.beginPath();
ctx.rect(0, 400, 500, 100);
ctx.fillStyle = "#96e072";
ctx.fill();

// title
ctx.font = "30px Arial";
ctx.fillStyle = "#111";
ctx.fillText("A house", 380, 30);

//------------------- sun -----
ctx.beginPath();
ctx.arc(60, 60, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#e8d719";
ctx.fill();

//------------------ cloud ----
ctx.beginPath();
ctx.arc(200, 60, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#90e0ef";
ctx.fill();

ctx.beginPath();
ctx.arc(250, 40, 30, 0, 2 * Math.PI);
ctx.fillStyle = "#90e0ef";
ctx.fill();

ctx.beginPath();
ctx.arc(280, 80, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#90e0ef";
ctx.fill();

ctx.beginPath();
ctx.arc(230, 90, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#90e0ef";
ctx.fill();

ctx.beginPath();
ctx.arc(170, 80, 40, 0, 2 * Math.PI);
ctx.fillStyle = "#90e0ef";
ctx.fill();


//----------------- house ----
//building
ctx.beginPath();
ctx.rect(100, 350, 150, 150);
ctx.fillStyle = "#e9e4c8";
ctx.fill();

//door
ctx.beginPath();
ctx.rect(145, 400, 70, 100);
ctx.fillStyle = "#631e18";
ctx.fill();

//roof
ctx.beginPath();
ctx.moveTo(175, 250);
ctx.lineTo(50, 350);
ctx.lineTo(300, 350);
ctx.closePath();
ctx.fillStyle = "#b3381c";
ctx.fill();

//chimnie
ctx.rect(210, 260, 30, 50);
ctx.fillStyle = "#b3381c";
ctx.fill();


//------ tree ------ 
ctx.beginPath();
ctx.rect(350, 360, 50, 140);
ctx.closePath();
ctx.fillStyle = "#89532d";
ctx.fill();

ctx.beginPath();
ctx.ellipse(375, 250, 150, 75, Math.PI / 2, 0, 2 * Math.PI);
ctx.fillStyle = "#3b8026";
ctx.fill();