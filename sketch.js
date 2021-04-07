var a,b
var fr,mr
function setup() {
  createCanvas(1200,800);
 mr= createSprite(400, 200, 80, 30);
 fr= createSprite(200,200,50,80);
 mr.shapeColor="green"
 fr.shapeColor="green"
mr.debug=true
fr.debug=true
}

function draw() {
  background(0,0,0);  
  mr.x=World.mouseX
  mr.y=World.mouseY
  console.log(mr.x)
  console.log(fr.x)
  console.log(mr.width/2+fr.width/2)
a = fr.width/2+mr.width/2
b = fr.height/2+mr.height/2
if(mr.x-fr.x<a && fr.x-mr.x<a && mr.y-fr.y<b && fr.y-mr.y<b) {
  mr.shapeColor="red"
  fr.shapeColor="red"
}
else{
mr.shapeColor="green"
fr.shapeColor="green"
}
  drawSprites();
}