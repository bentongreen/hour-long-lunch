'use strict'
$(document).ready(function(){

	if(localStorage.getItem("login") != "true"){
		window.location.href = "login.html";
	}
  //Event listeners for form input
  var spotNameValue, spotStreetValue, spotCrossValue, cuisineValue, ratingValue, waitTimeValue;

// Take data from form
$('#sub').click(function() {
  spotNameValue = $('#spotname').val();
  spotStreetValue = $('#spotstreet').val();
  spotCrossValue = $('#spotcross').val();
  cuisineValue = $('#cuisine').val();
  ratingValue = $('#rating').val();
  waitTimeValue = $('#wait-time').val();
  ratingValue = parseInt(ratingValue);
  waitTimeValue = parseInt(waitTimeValue);
  inputForm.waitTime();
  inputForm.getRating();
  $('#unorderedList').append("<p>Test</p>"); //Test line
  console.log('Button was clicked');
  console.log(spotNameValue);
  console.log(spotStreetValue);
  console.log(spotCrossValue);
  console.log(cuisineValue);
  console.log(waitTimeValue);
  console.log(ratingValue);
});

// Constructor
var InputForm = function() {
  this.ratingArray = []; //starts at 0
  this.waitArray = []; //starts at 0
};

var inputForm = new InputForm();

// Function for averaging user input wait time
InputForm.prototype.waitTime = function() {
  this.waitArray.push(waitTimeValue); //push user input to array onclick in form
  var waitSum = 0;
  for(var i = 0; i < this.waitArray.length; i++) {
    waitSum += this.waitArray[i];
};
  var waitAvg = waitSum/this.waitArray.length;
  console.log("The sum of all the elements is: " + waitSum + " The average is: " + waitAvg);

};

// Function for averaging user input of score 1-5
InputForm.prototype.getRating = function() {
  this.ratingArray.push(ratingValue); //push use input to array onclick in form
  var ratingSum = 0;
  for(var i = 0; i < this.waitArray.length; i++) {
    ratingSum += this.ratingArray[i];
  }

  var avgRating = ratingSum/this.ratingArray.length;
  console.log("The sum of all the elements is: " + ratingSum + " The average is: " + avgRating);
  };

});