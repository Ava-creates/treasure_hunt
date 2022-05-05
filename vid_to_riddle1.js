
const nav = document.getElementById('nav')
const {previouspage, nextpage} = nav.dataset

document.getElementById("next").onclick = function () {
    location.href = nextpage;
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

const map = document.getElementById('map')
map.addEventListener('click', ()=>{
  if(!map.classList.contains('enlarge')){
    map.classList.add('enlarge')
  }else{
    map.classList.remove('enlarge')
  }
})
