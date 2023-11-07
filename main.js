noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(675, 650);

    canvas = createCanvas(550, 550);
    canvas.position(575, 100);

    poseNet = ml5.poseNet(video, modelLoaded);//initialization of poseNet model
    poseNet.on('pose', gotPoses);//execution of poseNet model
}

function modelLoaded()
{
    console.log('PoseNet has been initialized.');
}

function draw()
{
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Width and Height of the square is:" + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + ", noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + ", rightWristX = " + rightWristX + ", Difference = " + difference);
    }
}



