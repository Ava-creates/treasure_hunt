const textelem = document.getElementById('pressme')
const fulltext = 'press me!'
window.onload = ()=>{
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
