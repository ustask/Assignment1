/*
  // A loop is structued like this:
  keyword (condition) {
    stuff that happens
  }

  // while loop
  // (condition)
  while (keep going as long as this evaluates to true) {
    // stuff happens
  }

  // for loop:
  // (variable assignment; condition to run while true; change to iterator)
  for(var i = 0; i < 20; i = i+ 1) {
    // stuff happens
  }
*/
function setup() {
  createCanvas(800,800);
}

function draw() {
  background(115,10,40);
  
  for(var x=0; x <= width; x += 80) {
      for(var y=0; y<= height; y +=80){ 
    stroke(random(230));
    fill(0,50,200);
    ellipse(x,y,20,20);
      
  }
}
}