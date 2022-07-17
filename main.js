song = ""
leftWristX = "";
leftWrsitY = "";
rightWirstX = "";
rightWristY = ""
function preload()
{
    song = loadSound("music.mp3");
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", getResults);

}

function draw()
{
    image(video, 0, 0, 600, 500)
}

function modelLoaded()
{
    console.log("The Model Is Loaded"); 
}

function getResults(results)
{
if (results.length > 0)
{
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log(" LeftWristX = " + leftWristX + " LeftWristY = " + LeftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log(" RightWristX = " + RightWristX + " RightWristY = " + RightWristY);
}
}