var div = document.getElementById("drawing");

var render = function(timestamp) {
    // Store the current drawing transformation matrix (and other state)
    ctx.save();
    
    // Use the identity matrix while clearing the canvas (just in case you change it someday!)
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = "lightblue"
    ctx.fillRect(0, 0, canv.width, canv.height);
    
    // Restore the transform
    ctx.restore();                

    // draw a square and move it around
    let seconds = timestamp / 1000.0
    let xsin = Math.sin(seconds)  * 0.7
    let xpositive = (xsin + 1)/2
    let x = xpositive * canv.width

    ctx.fillStyle = "green"
    ctx.fillRect(x - 10, canv.height / 2, 20, 20);
   
    // do it again!  and again!  AND AGAIN!  AND ...       
    requestAnimationFrame(render);
}

// let's create a canvas and to draw in
var canv = document.createElement("canvas");
let ctx = canv.getContext("2d");

div.appendChild(canv);

canv.id = "main";
canv.style.width = "100%";
canv.style.height = "80%";
canv.width  = canv.offsetWidth;
canv.height = canv.offsetHeight;

window.addEventListener('resize', (event) => {
    canv.width  = canv.offsetWidth;
    canv.height = canv.offsetHeight;
});

render(); 