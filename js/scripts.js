// welcome the user
// alert("Welcome to Quiz Ninja!");

// var question = "What is Superman's real name?"
// var answer = prompt(question);
// alert("You answered " + answer);
var score = 0 // initialize score

for(var i=0,max=quiz.length;i<max;i++){
    // get answer from user
    var answer = prompt(quiz[i][0]); // quiz[i][0] is the ith question
    // check if answer is correct
    if(answer === quiz[i][1]){ // quiz[i][1] is the ith answer
    alert("Correct!");
    // increase score by 1
    score++;
    } else {
    alert("Wrong!");
    }
    }

    alert("Game Over, you scored " + score + " points");