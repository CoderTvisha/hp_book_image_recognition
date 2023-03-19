Webcam.set({
    width: 400,
    height: 450,
    image_format: 'png',
    png_quality: 90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach ( '#camera' );
    
    function take_snapshot()
    {
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
        });
    
    }
    
    console.log('ml5 version:', ml5.version);
    classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9KUoyhCBk/model.json', modelLoaded);
    
    function modelLoaded(){
        console.log("ModelLoaded");
    }
    
    function check(){
        img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
    }
    
    function gotResult(error, results){
        if (error){
            console.log(error);
    
        }
        else{
           console.log(results); 
           document.getElementById("result_object").innerHTML = results[0].label;
           document.getElementById("accuracy_object").innerHTML = (results[0].confidence * 100).toFixed(2) + "%";
        }
    }
    