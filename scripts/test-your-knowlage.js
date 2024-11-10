document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submit-quiz');
    const retryBtn = document.getElementById('retry-quiz');
    const resultDiv = document.getElementById('result');
    const form = document.getElementById('quiz-form');

    const correctAnswers = {
        q1: 'True',
        q2: 'True',
        q3: 'True',
        q4: 'True',
        q5: 'True',
        q6: 'True',
        q7: 'True',
        q8: 'True',
        q9: 'True',
        q10: 'True',
        q11: 'True',
        q12: 'True'
    };

    function checkAnswers(event) {
        event.preventDefault(); // Prevent form submission (no page reload)

        let score = 0;
        const totalQuestions = 12;

        for (let i = 1; i <= totalQuestions; i++) {
            const answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer && answer.value === correctAnswers[`q${i}`]) {
                score++;
            }
        }

        // Display the number of correct answers without resetting the page
        resultDiv.innerHTML = `<p class="incorrect-msg">You got ${score} out of ${totalQuestions} correct.</p>`;
        resultDiv.style.color = score === totalQuestions ? 'green' : 'red';

        resultDiv.style.display = 'block';

        // Disable submit button after showing the result
        submitBtn.disabled = true;
    }

    function retryQuiz() {
        form.reset();
        resultDiv.style.display = 'none';
        submitBtn.disabled = false; // Re-enable submit button for retry
    }

    // Event listeners for the submit and retry buttons
    submitBtn.addEventListener('click', checkAnswers);
    retryBtn.addEventListener('click', retryQuiz);
});
