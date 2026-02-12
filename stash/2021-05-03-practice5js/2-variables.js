function setup(){
    let theCanvas=createCanvas(500,500);
    theCanvas.parent('p5');

    //creating the input and button is part of the base and doesn't change so ig that's why it's in the input section?
    inputW = createInput(); //"input" (in this case "inputW") is the variable name, "createInput" actually makes it
    inputW.position(60,100); //position:absolute, doesn't seem like this can be overridden. dang.
    inputH = createInput();
    inputH.position(60,125);

    //button is also absolutely positioned
    goCircle = createButton('circle maker');
    goCircle.position(10,150);
    goCircle.mousePressed(drawCircle);

    //decorative
    text('width',10,30);
    text('height',10,55);
    //o heck I bet I could make something like https://emcall.github.io/dragonsizes/ with this
}

function drawCircle(){
    //for testing
    //fill can be defined up here but it looks neat matching the circle
    text('thing worked!',10,100);

    //NOT to be confused with "constrain" https://p5js.org/reference/#/p5/const
    const width = inputW.value();
    const height = inputH.value();
    
    //resets whatever was typed in
    inputW.value('');
    inputH.value('');

    //hello random my old friend
    let dotX = random(0,500);
    let dotY = random(0,500);

    //(2) for now, random styling
    //this would probably be better as an array but I'll get to that when the tutorial does
    let rgbR = random(0,255);
    let rgbG = random(0,255);
    let rgbB = random(0,255);
    fill(rgbR,rgbG,rgbB);
    noStroke();

    //the "for let i" stuff in the example is presumably for making <200 names appear at random, don't need it here
    ellipse(dotX,dotY,width,height);

    //(1) was gonna make it draggable but that means fussing with coordinates again; might revisit this if/when the tutorial gets to it?
}