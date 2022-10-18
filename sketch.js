
let noiseMax = 0.5
let zoff = 0;
let label1;
let counter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  label1 = new Label("Click everywhere", 12, 0, 30);
  counter = new Counter(0);
  
  //noCursor();

 }


function mouseClicked () {
  stroke(random(255), random(255), random(255));
}


function draw() {
  
  background(0);
  translate(width/2, height/2);
  //stroke(255);
  noFill();
  

  //disegno la forma circolare simil-blob
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.01) {
    let xoff = map(cos(a), -1, 1, 0, noiseMax);
    let yoff = map (sin(a), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, 200);
    let x = r * cos(a);
    let y = r * sin(a);
   vertex(x, y);
  }
  zoff += 0.01;
  endShape(CLOSE);  
  
  
  //richiamo il testo 
  label1.print()
  counter.count()
}

  //classe del cronometro
  class Counter {
    constructor(c) {
    this.counter = c
  }

  count() {
    textFont("Roboto Mono");
    textSize(12);
    fill(255);
    textAlign(CENTER);
    text(this.counter, 0, 0);
    
    this.counter += 1 
  }
 }


  //classe del testo
  class Label {
  constructor (l, s, x, y) {
    this.label = l
    this.size = s
    this.x = x
    this.y = y
  }

  print() {
    textFont("Roboto  Mono");
    textSize(this.size);
    fill(255);
    
    textAlign(CENTER);
    text(this.label, this.x, this.y);
  }
 }


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


