// quiz.js

const words = [
    'LOVE STORY',
    'BLANK SPACE',
    'SHAKE IT OFF',
    'BAD BLOOD',
    'YOU BELONG WITH ME'
];

let currentWordIndex = 0;
let correctGuesses = 0;
let incorrectGuesses = 0;
let timerInterval;

const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');
const wordContainer = document.getElementById('word-container');
const piecesContainer = document.getElementById('pieces-container');
const resultChart = document.getElementById('result-chart');
const timer = document.getElementById('timer');

startButton.addEventListener('click', startGame);

function startGame() {
    startScreen.classList.add('hidden');
    wordContainer.classList.remove('hidden');
    piecesContainer.classList.remove('hidden');
    timer.classList.remove('hidden');
    loadWord();
}

function loadWord() {
    resetState();
    const word = words[currentWordIndex];
    const letters = word.split('').filter(letter => letter !== ' ');
    const shuffledPieces = letters.slice().sort(() => Math.random() - 0.5);
    
    word.split('').forEach((letter, index) => {
        const slot = document.createElement('div');
        slot.className = 'letter-slot';
        slot.dataset.letter = letter;
        slot.dataset.index = index;
        slot.innerHTML = letter === ' ' ? '&nbsp;' : '';
        wordContainer.appendChild(slot);
    });

    shuffledPieces.forEach((piece) => {
        const letterWrapper = document.createElement('div');
        letterWrapper.className = 'letter-wrapper';
        const letter = document.createElement('div');
        letter.className = 'letter-piece';
        letter.draggable = true;
        letter.innerText = piece;
        letterWrapper.appendChild(letter);
        piecesContainer.appendChild(letterWrapper);
        letterWrapper.addEventListener('dragstart', dragStart);
    });

    document.querySelectorAll('.letter-slot').forEach((slot) => {
        slot.addEventListener('dragover', dragOver);
        slot.addEventListener('drop', drop);
    });

    startTimer();
}

function resetState() {
    wordContainer.innerHTML = '';
    piecesContainer.innerHTML = '';
    clearInterval(timerInterval);
    timer.innerText = '15';
}

function dragStart(event) {
    const letterWrapper = event.target.closest('.letter-wrapper');
    event.dataTransfer.setData('text/plain', letterWrapper.dataset.index);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const index = event.dataTransfer.getData('text/plain');
    const letterWrapper = document.querySelector(`.letter-wrapper[data-index="${index}"]`);
    const slot = event.target.closest('.letter-slot');
    if (slot && !slot.innerHTML.trim()) {
        slot.appendChild(letterWrapper);
        checkWin();
    }
}

function checkWin() {
    const slots = document.querySelectorAll('.letter-slot');
    let isComplete = true;
    slots.forEach((slot) => {
        if (slot.innerText !== slot.dataset.letter) {
            isComplete = false;
        }
    });
    if (isComplete) {
        correctGuesses++;
        if (currentWordIndex < words.length - 1) {
            currentWordIndex++;
            loadWord();
        } else {
            showResults();
        }
    }
}

function startTimer() {
    let timeLeft = 15;
    timerInterval = setInterval(() => {
        timeLeft--;
        timer.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            incorrectGuesses++;
            if (currentWordIndex < words.length - 1) {
                currentWordIndex++;
                loadWord();
            } else {
                showResults();
            }
        }
    }, 1000);
}

function showResults() {
    wordContainer.classList.add('hidden');
    piecesContainer.classList.add('hidden');
    timer.classList.add('hidden');
    resultChart.classList.remove('hidden');
    displayChart();
}

function displayChart() {
    const ctx = resultChart.getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Acertos', 'Erros'],
            datasets: [{
                data: [correctGuesses, incorrectGuesses],
                backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                borderWidth: 1
            }]
        }
    });
}
