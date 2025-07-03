document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const answers = {
        "Which Ayurvedic practice is primarily used for detoxification and rejuvenation?": "Panchakarma",
        "Which of the following is NOT one of the primary concepts of Ayurveda?": "Qi",
        "In Ayurveda, which Dosha is primarily associated with the elements of fire and water?": "Pitta",
        "What is the primary goal of Yoga in the AYUSH system?": "Spiritual enlightenment",
        "Which of the following herbs is commonly used in Ayurveda for improving digestion and reducing inflammation?": "Ginger",
        "In Siddha medicine, which concept is similar to Ayurveda’s Doshas?": "Humors",
        "Which of the following is a key practice in Unani medicine for balancing the body's humors?": "Cupping",
        "In Homeopathy, which principle is used to treat illness?": "\"Like cures like\"",
        "What is the main focus of Naturopathy as part of the AYUSH system?": "Natural healing methods",
        "What is the primary aim of Abhyanga in Ayurveda?": "Oil massage for rejuvenation"
    };

    let score = 0;

    const questions = document.querySelectorAll('fieldset');
    questions.forEach(question => {
        const questionText = question.querySelector('legend').innerText.trim();
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption && selectedOption.value.trim() === answers[questionText]) {
            score++;
        }
    });

    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<h2>Your Score: ${score} / 10</h2>`;

    const retryButton = document.createElement('button');
    retryButton.className = 'retry-button';
    retryButton.innerText = 'Retry';
    retryButton.addEventListener('click', function() {
        document.getElementById('quiz-form').reset();
        resultContainer.innerHTML = '';
    });

    resultContainer.appendChild(retryButton);
});
