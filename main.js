var mouseEvent = "Empty";

canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");



color = "Red";
width = 2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";                                                       
}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mousedoun") {
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " +current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y, radius , 0,2 * Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}
function clear_canvas() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}  