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