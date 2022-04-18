var box;
var box2;
var box3;
function setup() 
{
  createCanvas(400, 400);
  box = new Box (200,200,10,10,1,2)
  box2 = new Box(150,150,10,10,2,1)
  box3 = new Box(300, 180,50,50,1,2)
}

function draw() 
{
  background(220);
box.show();
box.moveup();
box2.show();
box2.move();
box3.show();
box3.move();
box3.moveup();
}

