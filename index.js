

var readlineSync = require("readline-sync");
const chalk = require('chalk');
const error = chalk.bold.red;
const correct = chalk.bold.green;
const bgGreen = chalk.black.bgGreen;

var highscore = { 
  name: "Bhavya",
  topScore: 9
};
var score = 0;

var quizList = [
  {
    question: "What is the capital of Afghanistan? \n",
    answer: "Kabul"
  },
  {
    question: "What is the capital of Australia?\n ",
    answer: "Canberra"
  },
  {
    question: "What is the capital of Bangladesh? \n",
    answer: "Dhaka"
  },
  {
    question: "What is the capital of Austria? \n",
    answer: "Vienna"
  },
  {
    question: "What is the capital of  Canada? \n",
    answer: "Ottawa"
  },
  {
    question: "What is the capital of France? \n",
    answer: "Paris"
  },
  {
    question: "What is the capital of Germany? \n ",
    answer: "Berlin"
  },
   {
  question : "What is the capital of India? \n",
  answer: "New Delhi"
},
  {
    question: "What is the capital of Ireland? \n",
    answer: "Dublin"
  },
 {
   question: "What is the capital of Russia? \n",
   answer: "Moscow"
 },
 
  
]

function welcomeMessage(){
  console.log(bgGreen("            Country and Capital            \n"));
  console.log(" A quiz to check how well do you know the countries and their capitals.  ")

  console.log("\n");


  var userName = readlineSync.question("Hello! Who's this?\n" );

  console.log( (("Welcome to")+ chalk.cyan(" How well do you know the country capitals ") + chalk.bold.white(userName )+"!" ));

  console.log("Let's play! ");
  readlineSync.question( chalk.cyan("Can you beat this HIGHSCORE " + highscore.topScore +" ? Press enter to play! \n") );
  playGame();
}
 

function checkAnswer(n,question, answer){
  var userAnswer = readlineSync.question(n + "." + chalk.cyan(question));

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(correct("You are right! "));
    score++;
    console.log("Current Score: "+ chalk.green(score));
    

  }
  else{
    console.log(error("You are wrong! "));
    console.log("Current Score: " + chalk.red(score) );
  }
  console.log("\n");
}

function playGame(){
  for(var i=0; i<quizList.length; i++){
    checkAnswer(i+1, quizList[i].question, quizList[i].answer);
  }
  displayScore();
}

function displayScore(){
  console.log((chalk.cyan("Hurray! Your total score is " + chalk.green(score))));

  if(score > highscore.topScore){
    highscore.topScore = score;
    console.log("Congratulations! You have beaten the highscore");
    console.log("New HIGHSCORE: "+ highscore);
  }
  console.log(chalk.cyan("Thanks for playing.") );
  console.log(bgGreen("Don't forget to share screenshot."));
}

welcomeMessage();
playGame();
displayScore();
