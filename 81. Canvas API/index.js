// Canvas API = a means fro drawing graphics
//              used for animations, games, data visualization

let canvas = document.getElementById('mycanvas');
let context = canvas.getContext('2d');

/*
context.strokeStyle = "blue";
context.lineWidth = 5;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();
*/

/*
// Draw a Triangle
context.strokeStyle = "black";
context.fillStyle = "yellow";
context.lineWidth = 5;
context.beginPath();
context.moveTo(250,0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill()
*/


// Draw a Rectangle
context.fillStyle = "black";
context.strokeStyle = "black";
context.fillRect(0, 0, 250, 250);
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "red";
context.strokeStyle = "black";
context.fillRect(0, 250, 250, 250);
context.strokeRect(0, 250, 250, 250);

context.fillStyle = "green";
context.strokeStyle = "green";
context.fillRect(250, 250, 250, 250);
context.strokeRect(250, 250, 250, 250);

context.fillStyle = "blue";
context.strokeStyle = "blue";
context.fillRect(250, 0, 250, 250);
context.strokeRect(250, 0, 250, 250);


/*
// Draw a Circle
context.beginPath();
context.lineWidth = 10;
context.arc(250, 250, 200, 0, 2*Math.PI);
context.stroke();
context.fillStyle = "rgb(10,250,140)"
context.fill();
*/

/*
// Draw Text
context.font = "50px MV Boli"
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("You Win", canvas.width/2 , canvas.height/2);
*/