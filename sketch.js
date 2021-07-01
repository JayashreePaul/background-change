var b1;
var b2;
var b3;
var b4;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  b1= createButton("GREEN");
  b1.position(220,50);
  b1.mousePressed(green_bg);
  


  b2= createButton("RED");
  b2.position(100,50,);
  b2.mousePressed(red_bg);

  b3= createButton("blue");
  b3.position(50,50,);
  b3.mousePressed(blue_bg);

  b4= createButton("purple");
  b4.position(160,50,);
  b4.mousePressed(purple_bg);


}


function draw() {
  background(r,g,b);

}
function red_bg()
{
r=255;
b=0;
g=0
}
function green_bg()
{
r=0;
b=0;
g=255;
}
function blue_bg()
{
r=0;
b=255;
g=0;
}
function purple_bg()
{
r=128;
b=127;
g=0;
}



