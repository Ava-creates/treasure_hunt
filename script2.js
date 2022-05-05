
const nav = document.getElementById('nav')
const {previouspage, nextpage} = nav.dataset

console.log(previous)

document.getElementById("previous").onclick = function () {
    location.href = previouspage;
}

document.getElementById("next").onclick = function () {
    location.href = nextpage;
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


