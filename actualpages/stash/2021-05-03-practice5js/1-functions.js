function setup(){
    let theCanvas=createCanvas(500,500);
    theCanvas.parent('p5');
    rectMode(CENTER);
}

function draw(){
    //variables
    let xy=250;

    //default "styling"
    background(0);
    noStroke();

    //actual objects
    fill(255,0,0);
    circle(xy,xy,500);

    fill(0,255,0);
    square(xy,xy,353);

    fill(0,0,255);
    circle(xy,xy,353);

    fill(255,255,0);
    square(xy,xy,249);

    fill(0,255,255);
    circle(xy,xy,249);

    fill(255,0,255); //ahh I see, this was an exercise in teaching people how RGB works. clever
    square(xy,xy,175);
    
    fill(255);
    circle(xy,xy,175);

    fill(128);
    square(xy,xy,123);

    fill(0);
    circle(xy,xy,123);
}