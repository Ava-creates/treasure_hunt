const map = document.getElementById('map')

map.addEventListener('click',()=>{
    if(!map.classList.contains('enlarge')){
        map.classList.add('enlarge')
    }else{
        map.classList.remove('enlarge')
    }
})


var $rightfoot = $("#rightfoot"),
    $leftfoot = $("#leftfoot");

var tl = new TimelineMax({repeat:-1})

  

  var ease = SteppedEase.config(5);

tl

  .to($rightfoot, 0.25, {autoAlpha:1,},1)
  .to($leftfoot, 0.25, {autoAlpha:1,},1)
  .to($leftfoot, 3, 

  {bezier:{ curviness: .3, values:[{x:0, y:0},{x:13, y:10}, {x:19, y:40}, {x:35, y:54}, {x:45, y:83}, {x:50, y:90},{x:57, y:150,}],
  autoRotate:90}, ease:ease},1)

  .to($rightfoot, 3, 
  {bezier:{ curviness: 1, values:[{x:0, y:0}, {x:16, y:10}, {x:30, y:40,}, {x:40, y:54}, {x:50, y:83}, {x:56, y:90,}, {x:36, y:150,}],
  autoRotate:100}, ease:ease},1.25)

