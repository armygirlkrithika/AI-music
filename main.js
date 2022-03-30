scoreLeftWrist = 0
scoreRightWrist = 0
leftwristX = 0
leftwristY = 0
rigthwristX = 0
rightwristY = 0




function preload(){
  song = loadSound("Bts_SaveMe.mp3")
  song2 = loadSound("music.mp3")

}

function setup(){
 canvas = createCanvas(500,500)
 canvas.center()

 video = createCapture(VIDEO)
 video.hide()

 poseNet = ml5.poseNet(video,modelLoaded)
 poseNet.on('pose',gotPoses)


}

function modelLoaded(){
  console.log("model is loaded")
}

function gotPoses(results){
  if(results.length>0){
    console.log(results)

    scoreLeftWrist = results[0].pose.keypoints[9].score
    scoreRightWrist = results[0].pose.keypoints[10].score


    leftwristX = results[0].pose.leftWrist.x
    leftwristY = results[0].pose.leftWrist.y


    rightwristX = results[0].pose.rightWrist.x
    rightwristY = results[0].pose.rightWrist.y

  }
}


function draw(){
 image(video,0,0,500,500)

 
   
   if(scoreRightWrist > 0.002){
    circle(rightwristX,rightwristY,20) 
     song.play()
     song2.stop()
      }



  if(scoreLeftWrist > 0.002){
    circle(leftwristX,leftwristY,20) 
     song2.play()
     song.stop()

      }

 
}




