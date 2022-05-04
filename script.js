const textelem = document.getElementById('pressme')
const fulltext = 'press me!'
const cover = document.getElementById('cover')
window.onload = ()=>{
    if(textelem){
        for(let i = 0; i < (fulltext.length+1); i++){
            setTimeout(()=>{
                textelem.innerText = fulltext.slice(0,i)
                if(fulltext[i-1]===' '){
                    textelem.style.paddingRight='0.5em'
                }else{
                    textelem.style.paddingRight='0em'
                }
            },i*500)
        }
    }
    cover.style.visibility='visible';
    cover.style.opacity=0;
}
