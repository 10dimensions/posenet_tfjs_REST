var express = require("express");
var poseInstance = require("./pose_main");

var app = express();

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/trialget", (req, res, next) => {
    res.json(["apple","mango","grapes","banana","orange"]);
   });

// app.post("/fetchpose", (req, res, next) => {

//     var poseres = poseInstance.estimatePoseOnImage()

//     res.json(["Tony","Lisa","Michael","Ginger","Food"]);
//    });

app.post('/receive', function(request, respond) {
    
    // The image data will be store here
    var body = '';
    
    request.on('data', function(data) {
      body += data;
    });
  
    // When whole image uploaded complete.
    request.on('end', function (){
    
    var data = body.replace(/^data:image\/\w+;base64,/, "");
    //var poseRes = poseInstance.estimatePoseOnImage(data);

    estimatePoseOnImage(imageElement).then(function(pose)
    {
        res.json(pose);
    })
    .catch(function (error){
        // Handle error
        res.jsom(["error"]);
    });

    //var buf = new Buffer(data, 'base64');

    });
});
//single-pose

//const imageElement = document.getElementById('cat');
//const pose = estimatePoseOnImage(imageElement);
//console.log(pose);

//multi-pose

// const imageElement = document.getElementById('people');
// const poses = estimateMultiplePosesOnImage(imageElement);
// console.log(poses);