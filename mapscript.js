const map = document.getElementById('map')

map.addEventListener('click',()=>{
    if(!map.classList.contains('enlarge')){
        map.classList.add('enlarge')
    }else{
        map.classList.remove('enlarge')
    }
})
