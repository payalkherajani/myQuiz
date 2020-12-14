//required Packages
var readlineSync = require('readline-sync');
const chalk = require('chalk');

// Input Username
var userName = readlineSync.question("Your name please! ");

console.log("Welcome " + userName + chalk.underline.bgBlue(" to do YOU KNOW PAYAL game? ") );
console.log(chalk.red("You will be given 5 Questions"));

//Declaring score as global variable
var score = 0;

//Array of Questions
var arrayOfQuestions = [
  {
  q: "Where Do Payal live? ",
  a: "Bhopal"
}, 
{
  q: "What is Payal's favourite color? ",
  a: "Black"
}, 
{
  q: "What is Payal's hobby ? " ,
  a: "Gardening"
},
{
  q: "What is Payal's dream country to visit ? ",
  a: "France"
}, 
{
  q: "Whom do Payal loves the most? ",
  a: "Mother"
}
        ]

//looping over arrayOfQuestions
for (var i =0 ; i<arrayOfQuestions.length; i++){

  var userAnswer = readlineSync.question(arrayOfQuestions[i].q);

  if(userAnswer.toLowerCase() === arrayOfQuestions[i].a.toLowerCase()){
    console.log(chalk.bgGreen("Your answer is correct!"))
    score = score + 1;
  }
  else{
    console.log(chalk.bgRed("Your answer is wrong!"));
    console.log(chalk.bgWhite("Correct Answer is " + arrayOfQuestions[i].a))
    
    
  }
}


//Final score 
console.log(chalk.bgMagenta(userName + " your Score is   " + score));

