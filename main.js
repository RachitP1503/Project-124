function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#5196e3");
}

function modelLoaded(){
    console.log("PoseNet Is Initialized And Loaded");
}
function gotposes(results)
{
    if(results.length > 0){
        console.log(results);
}
}