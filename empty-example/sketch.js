let x = 0;
let z = 640;

function setup() {
  createCanvas( (window.innerWidth - 100), (window.innerHeight- 150));

  line(2,2, 640, 2);
}

function draw() {

  var array = [1,2,3,4]
  var new_array = array.map(x => x * 2)
  textSize(32);
  text("this is the array" + new_array, 10, 30);

  rect(100+(x*2), 200+(x*2), 200, 300);
  fill("orange");
  rect(100+(z/2), 200+(z/2), 200, 300);

  noSmooth();
  ellipse(x, (height - (10+x)), 20, 1*x);
  x = x + 1;

  fill(126);
  stroke("purple");
  rect(x, 10+x, 2*x, 1*x);
  x = x + 1
  z = z - 1;
  smooth();
  fill(color(0, 0, 255));
  ellipse(z, (width - (20+z)), 42, .5*(z/2));

  stroke("black");
  if (mouseIsPressed) {
    fill(x+125, z-77, 100);
  } else {
    fill(z-100, x+22, z-225, x);
  }



  ellipse(mouseX, mouseY, 40, 80);

  ellipse(width/2, height/2, width/2, width/2);
  if (mouseIsPressed) {
    fill(x-125, z+77, 100);

  } else {
    fill(z+100, x-22, z+225, x);
    background("teal");
  }
  rect(width/2-100, height/2-150, 200, 300);
  line(width/2,height/2-250, width/2, height/2+250);
  if (mouseIsPressed) {
    fill(x+125, z-77, 100);
  } else {
    fill(z-100, x+22, z-225, x);
  }
  rect(width/2-20,height/2-20, 40, 40);

  // if (mouseIsPressed) {
  //   fill(88);
  // } else {
  //   fill(205);
  // }
  // rect((mouseX+55), (mouseY - 72), 14, 23);
  // triangle((mouseX+288), (mouseY + 188), 351, 360, 288, 360);
  //
  // if (mouseIsPressed) {
  //   fill(100);
  // } else {
  //   fill(175);
  // }
  // arc((mouseX-27), (mouseY-33), 28, 32, PI, TWO_PI);
}
