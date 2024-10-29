// Define the function checkAnswer
function checkAnswer() {
  // Correct answer to the quiz question
  const correctAnswer = "4";

  // Retrieve the user's selected answer
  const userAnswer = document.querySelector(
    'input[name="quiz"]:checked'
  )?.value;

  // Get the feedback element to display results
  const feedback = document.getElementById("feedback");

  // Compare userAnswer with the correct answer
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "red";
  }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
