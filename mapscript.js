const lfoot = document.getElementById('leftfoot')
const rfoot = document.getElementById('rightfoot')

function showImage() {
      document.getElementById("final").style.visibility = "visible";
  }
setTimeout("showImage()", 5000);


let dynamicStyles = null;

function addAnimation(body) {
  if (!dynamicStyles) {
    dynamicStyles = document.createElement('style');
    dynamicStyles.type = 'text/css';
    document.head.appendChild(dynamicStyles);
  }

  dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}

const [startX, startY] = [45,30]
const rotation = 180;
const [dx, dy] = [0, 7]
const [lrdx, lrdy] = [2, 3]

const NUM_STEPS = 4;
const STEPLEN = 100/((NUM_STEPS - 1) * 3 + 1); // 0%, ..., 100% where ... is 3 keyframes per step in NUM_STEPS - 1

const steplist = []

steplist.push([startX, startY])

for(let i = 1; i<NUM_STEPS - 1; i++){
    steplist.push([steplist[i-1][0]+dx, steplist[i-1][1]+dy])
}
steplist.push(steplist[0])

const altsteplist = steplist.map((step,index)=>[step[0]+lrdx, step[1]+lrdy])

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

console.log(makeFrames(steplist, 'move-left'))

addAnimation(makeFrames(steplist, 'move-left'));
addAnimation(makeFrames(altsteplist, 'move-right'));
rfoot.style.animation = 'move-right 10s linear infinite';
lfoot.style.animation = 'move-left 10s linear infinite';
