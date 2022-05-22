'use strict';

function rnd(min, max){
    return Math.floor(Math.random() * max) + min;
 };

 function getPrime(min, max){
    let x = rnd(min, max)
    if(isPrime(x)) return x;
    else return getPrime(min, max);
 }
function isPrime(inputNum){
    let prime = true;
    for (let i =2; i<=Math.sqrt(inputNum) && prime==true; i++){
        if(inputNum%i == 0)
            prime =false;
    }
    return prime;
}

let highScore = 0;
let score = 20;
let secretPrimeGuess = getPrime(2,100);
console.log(Number(secretPrimeGuess))

function JFF(){
   const inputNum = Number(document.querySelector('.guess').value);
   if(!inputNum) document.querySelector('.message').textContent = "You should guess you know.."
   if(inputNum<=0 || inputNum>101) 
        console.log ("Number out of bounds, try again");

   else if (inputNum === secretPrimeGuess) {
        document.querySelector('.message').textContent ="🏆 Thats correct!";
        document.querySelector('.number').textContent = secretPrimeGuess;
        if(score> highScore){
            highScore=score;
            document.querySelector('.highscore').textContent = score;
        }

   }
   else{
       if(score>1){
        if(inputNum<secretPrimeGuess){
            document.querySelector('.message').textContent ="Too low, try again!";
            score--;
            document.querySelector('.score').textContent = score;
   }
        else {
            document.querySelector('.message').textContent ="Too high, try again!!";
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
    else{
        document.querySelector('.message').textContent =  "💥 You lost the game, try again";
        document.querySelector('.score').textContent = "0";
        
    }
   } 


}

function Again(){
    score = 20;
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.score').textContent = '20';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value='';
    secretPrimeGuess = getPrime(2,100);
    console.log(Number(secretPrimeGuess))
   }
   
document.querySelector('.check').addEventListener('click', JFF)
document.querySelector('.again').addEventListener('click',Again)
