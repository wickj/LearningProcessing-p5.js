// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-4: Manipulating sound (with Sonia)

// A sound file object
var song;

function preload() {
  song = loadSound("sounds/beat.mp3");  
}

function setup() {
  createCanvas(200, 200);

  // Loop the sound forever
  // (well, at least until stop() is called)
  song.play();
  song.loop();
}

function draw() {
  background(200);

  // Set the volume to a range between 0 and 1.0
  var volume = map(mouseX, 0, width, 0, 1);
  song.amp(volume);

  // Set the rate to a range between 0.1 and 4
  // Changing the rate alters the pitchf
  var speed = map(mouseY, 0, height, 0, 2);
  song.rate(speed);

  // Draw some circles to show what is going on
  stroke(0);
  fill(51, 100);
  ellipse(mouseX, 100, 48, 48);
  stroke(0);
  fill(51, 100);
  ellipse(100, mouseY, 48, 48);
}