var noseX = 0;
var noseY = 0;
var difference = 0;
var rightWristX = 0;
var leftWristX = 0;

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',getPoses);
}

function getPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
    }
}

function modelLoaded() { console.log("model is loaded"); }



function draw() {
    background('grey');
    fill("blue");
    stroke("yellow");
    square(noseX,noseY,difference);
    document.getElementById("square_sides").innerHTML = "width and height of the square will be: " + difference + "px";
}