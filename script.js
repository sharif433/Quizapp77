// Sample questions array
let timer;
let timeLeft = 30;
function startTimer() {
    clearInterval(timer);
    timeLeft = 30;
    const feedback = document.getElementById('feedback');
    document.getElementById('timer-text').innerText = `⏱️ Time Left: ${timeLeft} seconds`;


    timer = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('timer-text').innerText = '⏱️ Time Over!';
            feedback.innerText = 'Time out';
            feedback.classList.add('incorrect');
            document.getElementById('next-btn').style.display = 'block';
        } else {
            document.getElementById('timer-text').innerText = `⏱️ Time Left: ${timeLeft} seconds`;
        }
    }, 1000);
    
}

const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correctAnswer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Saturn"], correctAnswer: "Mars" },
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], correctAnswer: "4" },
    { question: "Which language is used for web apps?", options: ["Python", "Java", "JavaScript", "C++"], correctAnswer: "JavaScript" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"], correctAnswer: "Leonardo da Vinci" },
    { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"], correctAnswer: "Carbon dioxide" },
    { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe", "Hippo"], correctAnswer: "Blue Whale" },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "South Korea", "Thailand", "Japan"], correctAnswer: "Japan" },
    { question: "What is the hardest natural substance?", options: ["Iron", "Gold", "Diamond", "Silver"], correctAnswer: "Diamond" },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], correctAnswer: "7" },
    { question: "What is H2O commonly known as?", options: ["Hydrogen", "Oxygen", "Water", "Salt"], correctAnswer: "Water" },
    { question: "What do bees produce?", options: ["Milk", "Wax", "Honey", "Oil"], correctAnswer: "Honey" },
    { question: "Which organ pumps blood in the human body?", options: ["Lungs", "Brain", "Liver", "Heart"], correctAnswer: "Heart" },
    { question: "Who invented the telephone?", options: ["Isaac Newton", "Albert Einstein", "Alexander Graham Bell", "Thomas Edison"], correctAnswer: "Alexander Graham Bell" },
    { question: "Which planet has rings?", options: ["Venus", "Saturn", "Mars", "Earth"], correctAnswer: "Saturn" },
    { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], correctAnswer: "Pacific" },
    { question: "How many days are there in a leap year?", options: ["365", "366", "364", "367"], correctAnswer: "366" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Gold", "Oxygen", "Iron", "Silver"], correctAnswer: "Oxygen" },
    { question: "What color do you get by mixing red and blue?", options: ["Orange", "Purple", "Green", "Pink"], correctAnswer: "Purple" },
    { question: "What is the square root of 81?", options: ["9", "8", "7", "6"], correctAnswer: "9" }
];
let currentQuestionIndex = 0;
let score = 0;

function loadQuestion(index) {
    const questionData = questions[index];
    document.getElementById('question').innerText = `${index + 1}. ${questionData.question} (total ${questions.length})`;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    questionData.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => {
            clearInterval(timer);
            checkAnswer(option, questionData.correctAnswer);
        };
        optionsContainer.appendChild(button);
    });

    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('feedback').classList.remove('correct', 'incorrect');
    startTimer();
}


function checkAnswer(selectedOption, correctAnswer) {
    const feedback = document.getElementById('feedback');
    if (selectedOption === correctAnswer) {
        feedback.innerText = 'Correct!';
        feedback.classList.add('correct');
        feedback.classList.remove('incorrect');
        score++;
    } else {
        feedback.innerText = 'Incorrect!';
        feedback.classList.add('incorrect');
        feedback.classList.remove('correct');
    }

    document.getElementById('score').innerText = score;
    document.getElementById('final-score').innerText = score;

    // ✅ Show Next button after answering
    document.getElementById('next-btn').style.display = 'block';
}

function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        // End of quiz
        document.getElementById('question').innerHTML = '<h2>Quiz Complete!</h2>';
        document.getElementById('options-container').innerHTML = '';
        document.getElementById('feedback').innerText = `Final Score: ${score}/${questions.length}`;
        document.getElementById('next-btn').style.display = 'none'; // Hide Next button
    }
}

// Load the first question
loadQuestion(currentQuestionIndex);
