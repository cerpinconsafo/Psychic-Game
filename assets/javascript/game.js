 //this is the beginning of our javascript letter guessing game

 //what does our game need to do?
 //1.start the game somehow (alert)
 //2.create a variable that stores a random letter of the alphabet (the CPU's letter)
 //3.alert the user to type any letter of the alphabet
 //3.a. if the user guesses correctly, win the game
 //3.b. if the user guesses incorrectly, track the incorrect choice, and subtract from the number of remaining guesses the user has
 //4.if number of guesses runs out:
 //4.a. the game is over
 //4.b. alert to show the CPU's letter choice
 //5.finish and restart game

 var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

 console.log(alphabet);

 var wins = 0;
 var losses = 0;
 var guessNum = 7;
 var usedLetters = [];

 alert("MORTAL BEING! Please strike any key to peer into my Mind's eye! MWUAHAHAHAHA!");


 //generates the random CPU letter
 var cpuChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
 console.log(cpuChoice);

 //when the user presses a key, run this function
 document.onkeyup = function(event) {
     var userGuess = event.key;
     if (userGuess === cpuChoice) {
         wins++;
         alert("IMPOSSIBLE! You saw that " + cpuChoice + " was the correct choice!");
         alert("YOU WILL NOT BEST ME AGAIN, FOOL!")
         guessNum = 7;
         usedLetters = [];



     } else {
         guessNum--;

     }

     //if the player runs out of guesses
     if (guessNum === 0) {
         losses++;
         usedLetters = [];
         guessNum = 7;
         alert('You Lost! MWUAHAHAHAHAHA! Try Again, if you must!')
     }

     //will not add duplicate letter to guesses, and will count a loss

     if (usedLetters.indexOf(userGuess) >= 0) {} else {
         usedLetters.push(userGuess);
         document.getElementById('wrongGuess').innerHTML = usedLetters;
         console.log(usedLetters);
     }

     document.getElementById('playerWins').innerHTML = +wins;
     document.getElementById('playerLosses').innerHTML = +losses;
     document.getElementById('playerGuesses').innerHTML = +guessNum;
 }