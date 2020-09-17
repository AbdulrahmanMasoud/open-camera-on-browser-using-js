

function video(){
let constraints = { audio: false, video: true}; // Here constraints This Like arguments you add it in getUserMedia() and you can add alot of this arrgs check This https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
let video = document.getElementById('video'); // Just a video Element
navigator.mediaDevices.getUserMedia(constraints).then(
    stream => { // This Function Has a stream Aregument
        video.srcObject = stream;
        video.onloadedmetadata = function(e) { //this for when the video loaded
        video.play(); // Just play Video if Video Loaded
       
        
    }
    }
).catch( // Here Error Message
    err => { document.getElementById('err').textContent = err.name + ": " + err.message;}
);

}
function takePhoto(){
    let canv = document.getElementById("canv").getContext("2d");
    let video = document.getElementById('video');
    canv.drawImage(video, 0,0,270,150);
}


