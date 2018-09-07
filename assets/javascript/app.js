///////////////////
// Sneaker      //
//      Trivia //
/////////////////

/* Pseudo Code - by Narin Sundarabhaya
A basic Multiple Choice Trivia Game
 
Click to Start
Timer begins at 60 seconds and countdown
Player goes through all 10 questions
player can only guess one answer per question
Once completed, player submit's answers
HTML is updated with users score
Score includes: time spent, answers correct, and answers wrong */

// --------------------------------------------------------------- 

var questions = [{
    ques: "What year did Star Wars A New Hope release at the box office?",
    ans: ["1972", "1977", "1987", "1991"],
    name: "firstMovie",
    correct: "1977",
    divClass: ".firstMovie"
},
{
    ques: "Who is Princess Leia's Brother?",
    ans: ["Admiral Ackbar", "Lando Calrissian", "Chewbacca", "Luke"],
    name: "brother",
    correct: "Luke",
    divClass: ".brother"
},
{
    ques: "Luke finds out that Darth Vader is his what?",
    ans: ["2nd cousin", "Uncle", "Father", "Mother"],
    name: "dad",
    correct: "Father",
    divClass: ".dad"
},
{
    ques: "Who shot first?",
    ans: ["Han Solo", "Greedo", "Jar Jar Binks", "Boba Fett"],
    name: "first",
    correct: "Han Solo",
    divClass: ".first"
},
{
    ques: "What is the name of Han Solo's ship?",
    ans: ["Tie Fighter", "X Wing", "Death Star", "Millenium Falcon"],
    name: "soloShip",
    correct: "Millenium Falcon",
    divClass: ".soloShip"
},
{
    ques: "A Jedi or Sith can summon the power of what?",
    ans: ["Greyskull", "The Force", "Love", "A Locomotive"],
    name: "power",
    correct: "The Force",
    divClass: ".power"
},
{
    ques: "A trap was set for Han Solo and he was frozen in what?",
    ans: ["Carbonite", "Bacta", "A refrigerator", "Ice"],
    name: "frozen",
    correct: "Carbonite",
    divClass: ".frozen"
},
{
    ques: "The Death Star uses a giant what to destroy planets?",
    ans: ["Vacuum", "Nuclear Missle", "Marshmallow Man", "Lazer Beam"],
    name: "deathStar",
    correct: "Lazer Beam",
    divClass: ".deathStar"
},
{
    ques: "Luke has to go to Tashi Station to get what?",
    ans: ["Spice", "Evaporator parts", "Power Converters", "Droids"],
    name: "tashiStation",
    correct: "Power Converters",
    divClass: ".tashiStation"
},
{
    ques: "The chosen weapon of Darth Vader is a red .....?",
    ans: ["Light Saber", "Cape", "Pistol", "Tie Fighter"],
    name: "weapon",
    correct: "Light Saber",
    divClass: ".weapon"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz