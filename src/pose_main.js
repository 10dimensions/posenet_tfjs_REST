//import * as posenet from '@tensorflow-models/posenet';
var posenet = require('@tensorflow-models/posenet');

//params
const imageScaleFactor = 0.5;
const outputStride = 16;
const flipHorizontal = false;

const maxPoseDetections = 2;

async function estimatePoseOnImage(imageElement) {
  // load the posenet model from a checkpoint
  const net = await posenet.load(0.50);
 
  const pose = await net.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride);
 
  return pose;
}



async function estimateMultiplePosesOnImage(imageElement) {
    const net = await posenet.load();
   
    // estimate poses
    const poses = await net.estimateMultiplePoses(imageElement,
      imageScaleFactor, flipHorizontal, outputStride, maxPoseDetections);
   
    return poses;
}