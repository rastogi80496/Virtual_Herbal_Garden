document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.querySelector('#quiz-form');
    const resultContainer = document.querySelector('#result-container');

    quizForm.addEventListener('submit', handleQuizSubmit);

    function handleQuizSubmit(event) {
        event.preventDefault();

        // Correct answers mapped to updated question names
        const correctAnswers = {
            "question1": "Panchakarma",
            "question2": "Qi",
            "question3": "Pitta",
            "question4": "Holistic well-being",
            "question5": "Ginger",
            "question6": "Humors",
            "question7": "Cupping",
            "question8": "Like cures like",
            "question9": "Natural healing methods",
            "question10": "Oil massage for rejuvenation"
        };

        let score = 0;
        let feedback = "<h2>Your Quiz Results</h2><ul>";

        // Loop through each answer in the form
        for (const [name, answer] of new FormData(quizForm).entries()) {
            if (correctAnswers[name] === answer) {
                score++;
                feedback += `<li><strong>Question ${name.replace('question', '')}</strong>: ✅ Correct</li>`;
            } else {
                feedback += `<li><strong>Question ${name.replace('question', '')}</strong>: ❌ Incorrect (Correct answer: <b>${correctAnswers[name]}</b>)</li>`;
            }
        }

        feedback += "</ul>";

        // Calculate percentage score
        const totalQuestions = Object.keys(correctAnswers).length;
        const percentage = (score / totalQuestions) * 100;

        feedback += `<p>You answered <b>${score}</b> out of <b>${totalQuestions}</b> questions correctly.</p>`;
        feedback += `<p>Your score: <b>${percentage.toFixed(2)}%</b></p>`;
        feedback += `<p>${percentage >= 70 ? '🎉 Great job!' : '❗ Try again for a better score!'}</p>`;

        // Display results
        resultContainer.innerHTML = feedback;

        // Reset the form for a new attempt
        quizForm.reset();
    }
});






























