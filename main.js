
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    Webcam.attach("#camera");
    
    
    function take_snapshot()
    {
      Webcam.snap(function(data_uri)
      {
       document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
      });    
    }
    
    console.log('ml5 version:', ml5.version);
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2uRBgEF-2/model.json', modelloaded);
    
    function modelloaded()
    {
       console.log('Model Loaded!'); 
    }
    
    function check()
    {
      img = document.getElementById('captured_image');
      classifier.classify(img, gotResult)
    
    }
    
    function gotResult(error, results) 
    {
      if (error) 
      {
        console.error(error);
      }
      else 
      {
        console.log(results);
        document.getElementById("result_signal_name").innerHTML = results[0].label;
        prediction_1 = results[0].label;
        speak();
        if (results[0].label == "Amazing") 
        {
          document.getElementById("update_signal").innerHTML = '&#128076';
        }
        if (results[0].label == "Great") 
        {
          document.getElementById("update_signal").innerHTML = '&#128077'; 
        }
        if (results[0].label == "Punch") 
        {
          document.getElementById("update_signal").innerHTML = '&#9994';
        }
        if (results[0].label == "Clap") 
        {
          document.getElementById("update_signal").innerHTML = '&#128079';
        }
        if (results[0].label == "Wave") 
        {
          document.getElementById("update_signal").innerHTML = '&#128075';
        } 
      }
    }
    function speak()
    {
      var synth = window.speechSynthesis;
      speak_data_1 = "The prediction is " + prediction_1;
      var utterThis = new SpeechSynthesisUtterance(speak_data_1);
      synth.speak(utterThis);
    }