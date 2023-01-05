const questionContainers = document.querySelectorAll('.question-container');
let numCorrect = 0;
let currentQuestion = 0;

questionContainers.forEach((container, index) => {
  // Get the answer choices
  const answers = container.querySelectorAll('.answer');
  // Add a click event listener to each answer
  answers.forEach(answer => {
    answer.addEventListener('click', event => {
      // Check if the answer is correct
      if (event.target.getAttribute('data-correct') === 'true') {
        numCorrect++;
        // Display the "Correct!" message
        alert('Correct answer!');
      } else {
        // Handle incorrect answer (e.g. display an alert)
        alert('Incorrect answer!');
      }

      // Move to the next question
      currentQuestion++;
      if (currentQuestion < questionContainers.length) {
        questionContainers[currentQuestion].style.display = 'block';
        container.style.display = 'none';
      } else {
        // When all the questions have been answered, display the final score
        alert(`Your score is ${numCorrect}/${questionContainers.length}`);
      }
    });
  });
});