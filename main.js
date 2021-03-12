var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my picture"){
        speak();
    }
}
function speak(){
var synth = window.speechSynthesis;
//speak_datat=document.getElementById("textbox").value;
speak_datat="Taking your selfie in 5 seconds";
var utterthis=new SpeechSynthesisUtterance(speak_datat);
synth.speak(utterthis);
Webcam.attach(camera);
setTimeout(function(){
take_snap();
save();
},5000);
}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
jpeg_quality:90
});
function take_snap(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_url+"'>";
      });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}