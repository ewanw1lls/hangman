var randomWord;
const maxGuesses = 6;
var wrongGuessCount = 0;
const gameTimeLimit = 300;

window.onload = function () {
  initialiseHangman();
};

function initialiseHangman() {
    //var modal = document.getElementById("game-modal");

    var playBtn = document.getElementById("play");
    playBtn.addEventListener("click", function() { 
        startGame();   
    });

    randomWord = getRandomWord();
    console.log(randomWord);
    var hintText = document.getElementById("hint-text");
    hintText.innerHTML = "Hint: " + randomWord.hint;
}

function startGame() {
    startTimer();
}

function getRandomWord() {
    return codingQuiz[Math.floor(Math.random()* codingQuiz.length)];
};

function startTimer() {
    let timeLeft = gameTimeLimit;
    var timerDisplay = document.getElementById("timer-display");
    
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `Time left:${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? "0" : ""}${timeLeft % 60}`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

function resetGame() {
    randomWord = "";
    correctLetters = [];
    wrongGuessCount = 0;
    var guessesText = document.getElementById("guesses-text");
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    hangmanImage.src =`https://media.geeksforgeeks.org/wp-content/uploads/20240215173028/0.png`;
}

const codingQuiz = [
    {
        word: "pard",
        hint: "friend, right on ____",
    },
    {
        word: "proper job",
        hint: "when something is done well",
    },
    {
        word: "dreckly",
        hint: "i'll do it when I'm ready",
    },
    {
        word: "mizzle",
        hint: "mist and drizzle",
    },
    {
        word: "my lover",
        hint: "what the pasty lady calls you",
    },
    {
        word: "wasson",
        hint: "what's going on",
    },
    {
        word: "ansum",
        hint: "thats a proper ______ pasty",
    },
    {
        word: "right on",
        hint: "okay",
    },
    {
        word: "up north",
        hint: "above the tamar",
    },
    {
        word: "pasty",
        hint: "breakfast, lunch and dinner",
    },
    ];
