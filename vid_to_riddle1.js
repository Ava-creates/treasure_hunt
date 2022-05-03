document.getElementById("riddle1").onclick = function () {
    location.href = "page_riddle1.html";
};

var vid = document.getElementById("myvideo"); 
var isPlaying = false;

document.getElementById("play").onclick = function () {
    var change = document.getElementById("play");
    if (isPlaying) {
    vid.pause();
    change.innerHTML = "PLAY";
  } else {
    vid.play();
    change.innerHTML = "PAUSE";
  }
  isPlaying = !isPlaying;

   
   
}