let numFrames = 11;
let images = [];
let currentFrame = 0;

function preload() {
  // eyeClosed = loadImage("EYES/EYE_010.PNG");
  for (let i = 0; i < numFrames; i++) {
    images[i] = loadImage("EYES/EYE_" + nf(i,3) + ".PNG");
  }

}

function setup() {
  createCanvas(800, 400);
  frameRate(12);
}

function draw() {
  clear();
  image(images[currentFrame], 0, 0, 800, 400);

  if (currentFrame == images.length - 1) {
    currentFrame = 0;
  }
  currentFrame++;

  fill(0);
  ellipse(50, 50, 50, 70);
  textSize(20);
  text("↑ Click here ", 40, 110);

  if (mouseX < 100 && mouseY < 120){
    if(mouseIsPressed){  
      frameRate(40);
    }
  } else {
    frameRate(12);
  }


}
