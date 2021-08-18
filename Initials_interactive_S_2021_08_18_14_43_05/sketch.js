//press canvas to pop bubble
//press o to play music
//press p to stop music
var angle = 0.0;
var offset = 50;
var scalar = 10;
var speed = 0.02; 


function preload() {
  mySound = loadSound('hydrocity2.mp3');
  mySound1 = loadSound('bubble.mp3');
}
function setup() {
  createCanvas(400, 400);
}

function draw() {


  background('#7e259c');
  stroke('#13c9f2');
  strokeWeight(15);
  noFill();
  arc(110, 300, 200, 200, radians(-90), radians(90));

  beginShape();
  curveVertex(0, 400);
  curveVertex(0, 400);
  curveVertex(105, 370);
  curveVertex(210, 300);
  curveVertex(210, 300);
  endShape();

  arc(120, 150, 100, 100, radians(90), radians(270));



  beginShape();
  curveVertex(150, 60);
  curveVertex(150, 60);
  curveVertex(75, 100);
  curveVertex(70, 150);
  curveVertex(70, 150);
  endShape();

  beginShape();
  curveVertex(195, 355);
  curveVertex(195, 355);
  curveVertex(240, 265);
  curveVertex(190, 190);
  curveVertex(75, 145);
  curveVertex(75, 145);
  endShape();

  strokeWeight(20);
  line(150, 60, width, 60);
  line(120, 100, width, 100);






  //water
  for (let i = -100; i < 450; i += 30) {
    waTer(i, 150);

  }
  //tunnel
  for (let j = 130; j < 450; j += 50) {
    tunNel(j, 65);
  }
  
  //circle movement
  var x = offset + cos(angle + 5)*scalar;
  var y = offset + sin(angle + 5)*scalar;
  
  //water
  strokeWeight(0);
  fill(7, 80, 250, 100);
  rect(0, 155, x + 400, y + 400);
  
  
  var y1 = offset + sin(angle + 0.1)*scalar; 
  var y2 = offset + cos(angle + 0.4)*scalar;
  var y3 = offset + sin(angle + 0.6)*scalar;
  var y4 = offset + cos(angle + 0.01)*scalar;
  
  angle += speed;
  
  //bubbles
  strokeWeight(1);
  stroke(255);
  arc(300, 400, x - 50, y - 50, radians(180), radians(360));
  ellipse(350, y2 + 320, x - 50, y - 50)
  ellipse(320, y1 + 290, x - 30, y - 30);
  ellipse(300, y3 + 240, x - 20, y - 20);
  
  //bubble dissappears
  if(mouseIsPressed){
   mySound1.setVolume(0.2);
   mySound1.play();
   fill(7, 80, 250, 100);
   stroke(7, 80, 250, 100);
   ellipse(358, y4 + 187, 50, 50);
   stroke(7, 80, 250, 100);
   arc(362, y4 + 185, 30, 30, radians(270), radians(360));
  } else {
  ellipse(358, y4 + 187, x, y);
  noFill();
 arc(362, y4 + 185, x - 20, y - 20, radians(270), radians(360)); 
    }
  
  

}

function tunNel(j) {
  //tunnel
  strokeWeight(7);
  stroke('#61666b');
  arc(j, 65, 10, 60, radians(90), radians(-270));

  line(j, 35, 140, 35);

  arc(j, 65, 10, 60, radians(90), radians(-270));
}

function waTer(i) {

  stroke(7, 80, 250, 100);
  strokeWeight(5);
  arc(i, 150, 30, 10, radians(0), radians(180));


}


function keyTyped() {
  if (key === 'o') {
    mySound.setVolume(0.1);
    mySound.play();
    mySound.loop();
  } else if (key === 'p') {
    mySound.stop(0.001);
  }
   }