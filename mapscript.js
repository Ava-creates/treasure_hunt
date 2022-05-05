const map = document.getElementById('map')

const lfoot = document.getElementById('leftfoot')
const rfoot = document.getElementById('rightfoot')

map.addEventListener('click',()=>{
    if(!map.classList.contains('enlarge')){
        map.classList.add('enlarge')
        rfoot.style.animation = 'move-right 10s linear infinite';
        lfoot.style.animation = 'move-left 10s linear infinite';
        setTimeout(()=>{
            lfoot.style.display = 'block'
            rfoot.style.display = 'block'
        },500)
    }else{
        map.classList.remove('enlarge')
        rfoot.style.animation = '';
        lfoot.style.animation = '';
        lfoot.style.display = 'none'
        rfoot.style.display = 'none'
    }
})
let dynamicStyles = null;

function addAnimation(body) {
  if (!dynamicStyles) {
    dynamicStyles = document.createElement('style');
    dynamicStyles.type = 'text/css';
    document.head.appendChild(dynamicStyles);
  }

  dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}

const [minVW, maxVW] = [15, 60]
const [minVH, maxVH] = [20, 35]
const maxrange = 5;

const NUM_STEPS = 5;
const STEPLEN = 100/((NUM_STEPS - 1) * 3 + 1); // 0%, ..., 100% where ... is 3 keyframes per step in NUM_STEPS - 1

const steplist = []

steplist.push([Math.random()*(maxVW-minVW)+minVW, Math.random()*(maxVH-minVH)+minVH])

for(let i = 1; i<NUM_STEPS - 1; i++){
    steplist.push([steplist[i-1][0]+maxrange, steplist[i-1][1]-maxrange])
}
steplist.push(steplist[0])

const altsteplist = steplist.map((step,index)=>index%2===0?[step[0]-3, step[1]+8]:[step[0]+5, step[1]-5])

const makeFrames = (steplist, name)=>{
   const first = 
    `
    0% {
        opacity: 1;
        left: ${steplist[0][0]}vw;
        top: ${steplist[0][1]}vh;
      }
    `

    const stepframes = [];
    for(let i =0; i< steplist.length-1; i++){
        stepframes.push(`
        ${STEPLEN*(3*i+1)}% {
            opacity: 0;
            left: ${steplist[i][0]}vw;
            top: ${steplist[i][1]}vh;
        }
        ${STEPLEN*(3*i+2)}% {
            opacity: 0;
            left: ${steplist[i+1][0]}vw;
            top: ${steplist[i+1][1]}vh;
        }
        ${STEPLEN*(3*i+3)}% {
            opacity: 1;
            left: ${steplist[i+1][0]}vw;
            top: ${steplist[i+1][1]}vh; 
        }
        `)
    }
    const last = 
        `
        100% {
            opacity: 1;
            left: ${steplist[steplist.length-1][0]}vw;
            top: ${steplist[steplist.length-1][1]}vh;
        }
        ` 
    return( `
    @keyframes ${name} { 
        ${first}
        ${stepframes.join('\n')}
        ${last}
     }
   `)
}



addAnimation(makeFrames(steplist, 'move-left'));
addAnimation(makeFrames(altsteplist, 'move-right'));
