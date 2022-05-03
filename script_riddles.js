const submit = document.querySelector("button");
submit.addEventListener("click", function() {
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
    else if (answer.value!="leaves") {
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
      
      let btn = document.createElement("button");
      btn.innerHTML = "NEXT";
      submitButton.appendChild(btn);
      btn.classList.add('submitButton');
    }
  });
