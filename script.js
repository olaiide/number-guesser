let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
    //display message
let displayMessage = function(message){
    document.querySelector('.message').textContent = message;
};
    //display score
let displayScore = function(score){
    document.querySelector('.score').textContent = score;
};
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent;
    //click button
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    // if there is no any number input
    if(!guess){
        displayMessage("⛔ No number");
    // if the guess number is equal to secret number
    }else if(guess === secretNumber){
        displayMessage("🍕 You are correct");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = "30rem";
        if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
        }
    //if guess number is greater than secret number
    }else if(guess > secretNumber){
        if(score > 1){
        displayMessage("Too high");
        score--;
        diplayScore(score);
        }else{
        displayMessage("❌ You Lost The Game");
        displayScore(0);
        }
    //if guess number is less than the secret number
    }else if(guess < secretNumber){
        if(score > 1){
            displayMessage("Too low");
            score--;
            displayScore(score);
            }else{
            displayMessage("❌ You Lost The Game");
            displayScore(0);
           }
   }
   });
   // how to keep playing the game with clicking the again button and highscore being intact
   document.querySelector('.again').addEventListener('click', function(){
       score = 20;
     displayScore(score); 
    document.querySelector('body').style.backgroundColor =  '#222';
    document.querySelector('.number').style.width = "15rem";
    displayMessage("Start guessing...");
    document.querySelector('.guess').value = " ";
    document.querySelector('.number').textContent = "?";
   })