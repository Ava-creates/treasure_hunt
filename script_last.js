//Extract riddle info from html pages and render them onto the page

const submit = document.querySelector("button");
const riddle = document.getElementById('riddle')
const {riddletext, riddleanswer, nextpage} = riddle.dataset

const parsedriddletext = JSON.parse(riddletext)
riddle.innerHTML = parsedriddletext.val.join('<br>')

const form = document.getElementById('mainform')

const textelem = document.getElementById('youranswer')
const fulltext = 'Your Answer:'
//make the text appear slowly for dramatic effect
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

//handle user input on answerquestion form
const answerQuestion = () =>{
  const answer = document.getElementById("answer");

  if (!answer.value) {
    const emptyAnswer = document.getElementById("emptyAnswer");
    emptyAnswer.classList.add("visible");
    answer.classList.add("invalid");
    emptyAnswer.setAttribute("aria-hidden", false);
    emptyAnswer.setAttribute("aria-invalid", true);

    correctAnswer.classList.remove("visible");
    incorrectAnswer.classList.remove("visible");
  }
  else if (!(validateEmail(answer.value.toLowerCase()))) {
    const incorrectAnswer = document.getElementById("incorrectAnswer");
    incorrectAnswer.classList.add("visible");
    answer.classList.add("invalid");
    incorrectAnswer.setAttribute("aria-hidden", false);
    incorrectAnswer.setAttribute("aria-invalid", true);

    answer.value = ''

    correctAnswer.classList.remove("visible");
    emptyAnswer.classList.remove("visible");
  }
  else {
    const correctAnswer = document.getElementById("correctAnswer");
    correctAnswer.classList.add("visible");
    answer.classList.add("valid");
    correctAnswer.setAttribute("aria-hidden", false);
    correctAnswer.setAttribute("aria-valid", true);
    window.open(`mailto:${answer.value}?subject=CommLab!&body=Play this game! https://ava-creates.github.io/treasure_hunt/`, target="_blank")

    emptyAnswer.classList.remove("visible");
    incorrectAnswer.classList.remove("visible");

    submit.style.display = "none";
    if(submitButton.children.length == 1){
      let btn = document.createElement("button");
      btn.innerHTML = "NEXT";
      btn.onclick = function () {
        location.href = nextpage;
      }
        submitButton.appendChild(btn);
        btn.classList.add('submitButton');
      }
  }
}

function validateEmail(email)
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

//trigger answerQuestion on button click or form submit
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  answerQuestion();
})

submit.addEventListener("click", answerQuestion);
