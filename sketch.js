var HEIGHT=800;
var WIDTH=1350;
var R=250;
var N=200;
var m=2;
var incrVal=0.005;
var r=0;
var g=0;
var b=0;
var col=256*256*256;
var spaceCounter=0;

function setup() {
  

  createCanvas(WIDTH,HEIGHT);
  loop();
}


function draw() {

  clear();
  background(0);
  col=(col+100);
  getRGB(col);
  stroke(r,g,b);
  drawCycle();
  m=m+incrVal;
  if(m>200){
    m=2;
  }
  
  //console.log("r,g,b"+r+","+g+","+b);
}

function pixelTransformX(x){
  return x+WIDTH/2;
}
function pixelTransformY(y){
  return HEIGHT/2-y;
}

function drawCycle(){
  for(var i=0; i<N; i++){
    var x1=R*cos(i*TWO_PI/N);
    var y1=R*sin(i*TWO_PI/N);
    var x2=R*cos((i*m%N)*TWO_PI/N);
    var y2=R*sin((i*m%N)*TWO_PI/N);
    x1=pixelTransformX(x1);
    y1=pixelTransformY(y1);
    x2=pixelTransformX(x2);
    y2=pixelTransformY(y2);
    line(x1,y1,x2,y2);
  }
}

function keyPressed(e) {
  if (keyCode === UP_ARROW) {
    e.preventDefault();
    console.log("m="+m);
    incrVal+=0.001;
  } else if (keyCode === DOWN_ARROW) {
    e.preventDefault();
    if(incrVal>0.000){
      incrVal-=0.001;
    }
  }else if (keyCode === 32) {//SPACE bar to pause/start
      e.preventDefault();
      spaceCounter++;
      if(spaceCounter%2==0){loop();}
      else{noLoop();}
      
    }
    else if (keyCode === ESCAPE) {//ESC key to initialize
      e.preventDefault();
      m=2;
      loop();
      
    }
}

function getRGB(col){
  r=Math.floor(col/(256*256));
  col=col-r*256*256;
  g=Math.floor(col/256);
  col=col-g*256;
  b=col;
}