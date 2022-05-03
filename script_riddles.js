var message = document.getElementById("message");

submitButton.addEventListener("click", function myFunction() {
  // Get the value of the input field with id="numb"
  let x = document.getElementById("answer").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x.length < 5 || x.length >10 ) {
    message.textContent += "This just got added";
  }
});
