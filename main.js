noseX = 0;
noseY = 0;
lwx   = 0;
lwy   = 0;
rwx   = 0;
rwy   = 0;

function preload(){

}


function setup(){
    canvas = createCanvas(600,400)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300);
    PoseNet = ml5.poseNet(video, modelLoaded)
    PoseNet.on("pose", gotPose)
}
function modelLoaded(){
    console.log("Model Loaded!");
}
function draw(){

}

function gotPose(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    lwx = results[0].pose.leftWrist.x
    lwy = results[0].pose.leftWrist.y
    rwx = results[0].pose.rightWrist.x
    rwy = results[0].pose.rightWrist.y
}else{
    
}
}