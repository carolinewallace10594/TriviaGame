var array = [];

//QUESTION 1
var button1 = $('.btn-one');
var response1 = $('#program-response1');

button1.on("click", checkAnswerOne);

function checkAnswerOne() {
  event.preventDefault();
  var answer1 = $('.answer1').val();
  if (answer1==="Bumble") {
    response1.text("Awesome Job!");
    array.push(1);
 } else {
    response1.text("You suck");
    $('.answer1').val("");
  }
}

//QUESTION 2
var button2 = $('.btn-two');
var response2 = $('#program-response2');

button2.on("click", checkAnswerTwo);

function checkAnswerTwo() {
  event.preventDefault();
  var answer2 = $('.answer2').val();
  if (answer2==="Hoppin") {
    response2.text("Awesome Job!");
    array.push(1);
 } else {
    response2.text("You suck");
    $('.answer2').val("");
  }
}

//QUESTION 3
var button3 = $('.btn-three');
var response3 = $('#program-response3');

button3.on("click", checkAnswerThree);

function checkAnswerThree() {
  event.preventDefault();
  var answer3 = $('.answer3').val();
  if (answer3==="MooMba") {
    response3.text("Awesome Job!");
    array.push(1);
 } else {
    response3.text("You suck");
    $('.answer3').val("");
  }
}

//QUESTION 4
var button4 = $('.btn-four');
var response4 = $('#program-response4');

button4.on("click", checkAnswerFour);

function checkAnswerFour() {
  event.preventDefault();
  var answer4 = $('.answer4').val();
  if (answer4==="Oven Pizza") {
    response4.text("Awesome Job!");
    array.push(1);
 } else {
    response4.text("You suck");
    $('.answer4').val("");
  }
}

//QUESTION 5
var button5 = $('.btn-five');
var response5 = $('#program-response5');

button5.on("click", checkAnswerFive);

function checkAnswerFive() {
  event.preventDefault();
  var answer5 = $('.answer5').val();
  if (answer5==="Charleston") {
    response5.text("Awesome Job!");
    array.push(1);
 } else {
    response5.text("You suck");
    $('.answer5').val("");
  }
}

//FINAL BUTTON
var button6 = $('.final-btn');
var response6 = $('#program-response6');

button6.on("click", finalFunction);

function finalFunction() {
  event.preventDefault();
  if (array.length === 5) {
    response6.text("Yay");
  } else {
    response6.text("Don't cheat");
  }
}
