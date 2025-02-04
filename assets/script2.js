var randomWord;
const maxGuesses = 6;

window.onload = function() {
    hangman(); 
    };
  
    function hangman() {
      var modal = document.getElementById("game-modal");
    //   var playBtn = document.getElementsByClassName("play");
    //     playBtn.addEventListener("click", function() { 
    //     startGame();   
    //     });
    //   playBtn.onClick = function() {
    //     startGame();
    //   };

}

$("#play").click(function(e) {
    startGame();
});

    function startGame() {
        randomWord = getRandomWord();
        console.log(randomWord);
        var hintText = document.getElementById("hint-text");
      //  hintText.innerText = randomWord.hint;
    }

    function getRandomWord() {
        return codingQuiz[Math.floor(Math.random() 
          * codingQuiz.length)];
      };

      function resetGame() {
        randomWord = null;
        correctLetters = [];
        wrongGuessCount = 0;
        var guessesText = document.getElementById("guesses-text");
        hangmanImage.src = 
        `https://media.geeksforgeeks.org/wp-content/uploads/20240215173028/0.png`;
        guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
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
          hint: "I'll do it when I'm ready",
        },
        {
          word: "mizzle",
          hint: "Mist and drizzle",
        },
        {
          word: "boolean",
          hint: "A data type that can haveone of two values, true or false.",
        },
        {
          word: "conditional",
          hint: "A statement that executes a block ofcode if a specified condition is true.",
        },
        {
          word: "parameter",
          hint: "A variable in a method definition.",
        },
        {
          word: "algorithm",
          hint: "A step-by-step procedure or formula for solving a problem.",
        },
        {
          word: "debugging",
          hint: "The process of finding and fixing errors in code.",
        },
        {
          word: "syntax",
          hint: "The rules that govern the structure of statements in a programming language.",
        },
      ];