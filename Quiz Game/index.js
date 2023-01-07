const questionContainers = document.querySelectorAll('.question-container');
let numCorrect = 0;
let currentQuestion = 0;

// Define a reset function
const reset = () => {
  numCorrect = 0;
  currentQuestion = 0;
  questionContainers.forEach(container => {
    container.style.display = 'none';
  });
  questionContainers[0].style.display = 'block';
}

questionContainers.forEach((container, index) => {
  // Get the answer choices
  const answers = container.querySelectorAll('.answer');
  // Add a click event listener to each answer
  answers.forEach(answer => {
    answer.addEventListener('click', event => {
      // Check if the answer is correct
      if (event.target.getAttribute('data-correct') === 'true') {
        numCorrect++;
      }

      // Move to the next question
      currentQuestion++;
      if (currentQuestion < questionContainers.length) {
        questionContainers[currentQuestion].style.display = 'block';
        container.style.display = 'none';
      } else {
        // When all the questions have been answered, display the final score and reset the game after 0,2 seconds
        alert(`Your score is ${numCorrect}/${questionContainers.length}`);
        setTimeout(reset, 0,2000);
      }
    });
  });
});
