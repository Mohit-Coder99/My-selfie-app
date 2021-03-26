var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox"); 

function start() {
     document.getElementById("textbox").innerHTML = "";
     recognition.start();
}

recognition.onresult = 
function run(event) {
     console.log(event);
     var content = event.results[0][0].transcript;
     console.log(content);
     document.getElementById("textbox").innerHTML = content;

     if(content == "take my selfie") {
        console.log("taking selfie --- ");
        speak();

     }
}

function speak() {
     var synth = window.speechSynthesis;
     var speakdata = "Taking your selfie in 5 seconds";

     var utterThis = new SpeechSynthesisUtterance(speakdata);
     synth.speak(utterThis);
     Webcam.attach(camera);
}

Webcam.set({
     width: 360, 
     height: 250,
     image_format: 'png',
     png_quality: 90
});
camera = document.getElementById("camera");
