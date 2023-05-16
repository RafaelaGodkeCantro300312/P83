var mouseEvent="empty";
var lastPositionX, lastPositionY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthLine=5;
var width=screen.width;
newWidth=screen.width-70;
newHeight=screen.height-300;
if(width<768)
{
    document.getElementById("myCanvas").width=newWidth;
    document.getElementById("myCanvas").height=newHeight;
}
canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart(e)
{
    color=document.getElementById("color").value;
    widthLine=document.getElementById("widthLine").value;
    lastPositionX=e.touches[0].clientX-canvas.offsetLeft;
    lastPositionY=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove", myTouchMove);
function myTouchMove(e)
{
    PositionTouchX=e.touches[0].clientX-canvas.offsetLeft;
    PositionTouchY=e.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthLine;

        console.log("last position of x and y cordinates=");
        console.log("x="+lastPositionX+"y="+lastPositionY);
        ctx.moveTo(lastPositionX, lastPositionY);

        console.log("Current position of x and y cordinates=");
        console.log("x="+PositionTouchX+"y="+PositionTouchY);
        ctx.lineTo(PositionTouchX, PositionTouchY);
        ctx.stroke();

    lastPositionX=PositionTouchX;
    lastPositionY=PositionTouchY;
}

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e)
{
    color=document.getElementById("color").value;
    widthLine=document.getElementById("widthLine").value;

    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e)
{
    mouseEvent="mouseUP";
}
canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{
    PositionMouseX=e.clientX-canvas.offsetLeft;
    PositionMouseY=e.clientY-canvas.offsetTop;
    
    if (mouseEvent=="mouseDown") 
    {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthLine;

        console.log("last position of x and y cordinates=");
        console.log("x="+lastPositionX+"y="+lastPositionY);
        ctx.moveTo(lastPositionX, lastPositionY);

        console.log("Current position of x and y cordinates=");
        console.log("x="+PositionMouseX+"y="+PositionMouseY);
        ctx.lineTo(PositionMouseX, PositionMouseY);
        ctx.stroke();
    }
    lastPositionX=PositionMouseX;
    lastPositionY=PositionMouseY;
}

function limpar()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}