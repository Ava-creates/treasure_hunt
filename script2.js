document.getElementById("previous").onclick = function () {
    location.href = "index.html";
}

document.getElementById("next").onclick = function () {
    location.href = "play.html";
}
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


