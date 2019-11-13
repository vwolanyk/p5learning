let triangleSpinner = 10;
function setup() {
  createCanvas( innerWidth - 300, innerWidth - 300);
  background("black");
  y1 = height/2;
  x1 = width/2;
  x2 = width/2;
  y2 = height/2;
  point1 = {x:0,y:y1};
  point2 = {x: x1,  y:height};
  point3 = {x:width, y:y2};
  y= 127;

  point4 = {x: x2, y: 0};
  strokeWeight(10);
  stroke("purple")
  line1 = line(point1.x, point1.y, point2.x, point2.y);
  line2 = line(point2.x, point2.y, point3.x, point3.y);
  line3 = line(point3.x, point3.y, point4.x, point4.y);
  line4 = line(point4.x, point4.y, point1.x, point1.y);

  // fill("white");
  // triangle(10, 20, 30, 50, 100, 20);
  //
  // strokeWeight(15);
  // fill(`#ff6ec7`);
  // stroke("black")
  // triangle = triangle((width/2 - 100), (height/2 - 125), width/2, (height/2 + 150), (width/2 + 100), (height/2 - 125));

}
let angle = 8.0
let reverseangle = -8
let lines = [];
function draw() {
  if (angle % 25 === 0){
    lines.push(new Line(0, 0, 2, 5, 100));
  }

//   for (var line = 0; line < lines.length; line++) {
//     console.log(line);
//     console.log(lines[line]);
//     lines[line].show();
// }
  angle ++;
  reverseangle --;
  // translate(width / 2, height / 2);
  // rotate(10.0);
  rotate(angle);
  // stroke("black")
  rectMode(CENTER);

  stroke("red")
  fill("green")
  rect(width/2, width/2+100, 200, 200)

  rectMode(CENTER);
  rotate(reverseangle);
  strokeWeight(15);
  fill(`#ff6ec7`);
  stroke("black")

  // rect(height/2, height/2+100, 200, 200);





 // if ( x <= width && x >= 0 && y <= height && y >= 0 ){
 //   stroke("red")
 //   line(0, 127, x, y);
 //
 //   x+=2;
 //   y+=2;

 // }



  // if (x < point2.x && y >= 240){
  //   x+=10;
  //   y+=10;
  //   stroke("red");
  //   line(point1.x, point1.y, x, y);
  //   console.log("X:  "+x);
  //   console.log("Y:    " +y)
  //
  //
  // } else if ( x > point2.x && x <  point3.x && y > point3.y){
  //   x +=10;
  //   y -=10;
  //   line(point2.x, point2.y, x, y);
  //
  // } else if (y > point4.y && y < point3.y && x > point4.x) {
  //   x -=10;
  //   y -=10;
  //   line(point3.x, point3.y,  x, y);
  // } else if ( x > point1.x && y < point1.y){
  //   x -=10;
  //   y +=10;
  //   line(point4.x, point4.y,  x, y);
  // }




//   if (y < height){
//   stroke("red");
//   line(initX, initY, x, y);
//   x += 7;
//   y += 15;
//   secX = x;
// } else if (y > height) {
//   stroke("purple");
//   line(secX, height, x, y);
//   x += 3;
//   y -= 8;
// }
// console.log(bubble)
// stroke("red");
// line(0, height/2, x, y);
// x += 5;
// y += 5;
// y2 +=5;
// x2 +=5;




// if (x <= width) {
// initHeight = height/2
// stroke("red")
// line(0, initHeight, x, initHeight+ y);
// y += 2;
// x += 2;
// } else {
//   stroke("red")
//   line(width/2, height, width/2 + x, y);
//   x += 2;
//   y -= 5;
//   console.log("X= " + x);
//   console.log("Y= " + y);
// }
}

class Line {

  constructor(x, y, veloX, veloY, life){
    this.x = x;
    this.y = y;
    this.x2 = x;
    this.y2 = y;
    this.veloX = veloX;
    this.veloY = veloY;
    this.life = life;
    this.color = [random(1,255), random(1,255), random(1,255)];
    this.weight = random(1,10);
  }

  show(){
    strokeWeight(3);
    stroke("white");
    line(this.x, this.y, this.x2, this.y2)
    this.x2 = this.x + this.veloX;
    this.y2 = this.y + this.veloY;
  }

  grow(){
    this.x2 = this.x + this.veloX;
    this.y2 = this.y + this.vleoY;
  }

  live(){
    this.life--
  }
}
