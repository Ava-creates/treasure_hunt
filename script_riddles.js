const submit = document.querySelector("button");
const riddleAnswer = 'leaves'
const nextPage = 'map1.html'

const form = document.getElementById('mainform')

const textelem = document.getElementById('youranswer')
const fulltext = 'Your Answer:'
window.onload = ()=>{
    for(let i = 0; i < (fulltext.length+1); i++){
        setTimeout(()=>{
            textelem.innerText = fulltext.slice(0,i)
            if(fulltext[i-1]===' '){
                textelem.style.paddingRight='0.5em'
            }else{
                textelem.style.paddingRight='0em'
            }
        },i*350)
    }
}

const answerQuestion = () =>{
  const answer = document.getElementById("answer");
  let valid = true;

  if (!answer.value) {
    console.log("ouch");
    const emptyAnswer = document.getElementById("emptyAnswer");
    emptyAnswer.classList.add("visible");
    answer.classList.add("invalid");
    emptyAnswer.setAttribute("aria-hidden", false);
    emptyAnswer.setAttribute("aria-invalid", true);

    correctAnswer.classList.remove("visible");
    incorrectAnswer.classList.remove("visible");
  }
  else if (answer.value.toLowerCase()!==riddleAnswer) {
    const incorrectAnswer = document.getElementById("incorrectAnswer");
    incorrectAnswer.classList.add("visible");
    answer.classList.add("invalid");
    incorrectAnswer.setAttribute("aria-hidden", false);
    incorrectAnswer.setAttribute("aria-invalid", true);

    correctAnswer.classList.remove("visible");
    emptyAnswer.classList.remove("visible");
  }
  else{
    const correctAnswer = document.getElementById("correctAnswer");
    correctAnswer.classList.add("visible");
    answer.classList.add("valid");
    correctAnswer.setAttribute("aria-hidden", false);
    correctAnswer.setAttribute("aria-valid", true);

    emptyAnswer.classList.remove("visible");
    incorrectAnswer.classList.remove("visible");

    submit.style.display = "none";
    if(submitButton.children.length == 1){
      let btn = document.createElement("button");
      btn.innerHTML = "NEXT";
      btn.onclick = function () {
        location.href = nextPage;
      }
        submitButton.appendChild(btn);
        btn.classList.add('submitButton');
      }
  }
}

form.addEventListener('submit',(e)=>{
  e.preventDefault();
  answerQuestion();
})

submit.addEventListener("click", answerQuestion);

