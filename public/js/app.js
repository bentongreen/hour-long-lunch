'use strict';
$(document).ready(function(){

	if(localStorage.getItem('login') != 'true'){
		window.location.href = 'login.html';
	}
  //Event listeners for form input
  var firstLoc, spotNameValue, spotStreetValue, spotCrossValue, cuisineValue, ratingValue, waitTimeValue, linkValue, zoomLevel, latitudeVal, longitudeVal;
  var storageArray = new Array();

  if(localStorage['storageArray'] == undefined){
   localStorage['storageArray'] = JSON.stringify(storageArray);
 }

  if(localStorage.getItem('login') === 'true'){
  var storedArray = JSON.parse(localStorage['storageArray']);
  for(var i = 0; i < storedArray.length; i++) {
    $('#unorderedList').append(storedArray[i]);
  }
 } 

// Take data from form
$('#sub').click(function() {
  spotNameValue = $('#spotname').val();
  spotStreetValue = $('#spotstreet').val();
  spotCrossValue = $('#spotcross').val();
  cuisineValue = $('#cuisine').val();
  ratingValue = $('#rating').val();
  waitTimeValue = $('#wait-time').val();
  ratingValue = parseFloat(ratingValue).toFixed(2);
  waitTimeValue = parseInt(waitTimeValue);

    //-----------------------------linkValue to be generated from function that get a google maps location from street names ------------------------------------------------------
      var geocoder;
      var streetAddress = spotStreetValue + ', Seattle, WA, 98109, USA';
      geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': streetAddress },
          function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              firstLoc = results[0].geometry.location;
              console.log('Firstloc: ' + firstLoc);
              firstLoc = JSON.stringify(firstLoc);
              firstLoc = firstLoc.replace('(', '');
              firstLoc = firstLoc.replace(')', ''); 
            } 
          }
        );

  //-----------------------------------------------------------------------------------------------------------------------------------------------

  linkValue = '<a href="https://www.google.com/maps?q=' + firstLoc + '">See on map!</a>';


  inputForm.waitTime();
  inputForm.getRating();

     //appends user submissons to unordered list of added locations
   var liString = '<li>' + spotNameValue + ' - ' + spotStreetValue + ' - ' + spotCrossValue + ' - ' + cuisineValue + ' - ' + waitTimeValue + ' - ' + ratingValue + ' - ' + linkValue + '</li>';
   JSON.stringify(liString);
   storageArray.push(liString);
   localStorage['storageArray'] = JSON.stringify(storageArray);
   var storedArray = JSON.parse(localStorage['storageArray']);

  for(var i = 0; i < storageArray.length; i++) {
    $('#unorderedList').append(storedArray[i]);
  }

  //console.log('Button was clicked');
  //console.log(spotNameValue);
  //console.log(spotStreetValue);
  //console.log(spotCrossValue);
  //console.log(cuisineValue);
  //console.log(waitTimeValue);
  //console.log(ratingValue);
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
  var waitAvg = waitSum / this.waitArray.length;
  console.log('The sum of all the elements is: ' + waitSum + ' The average is: ' + waitAvg);
};

// Function for averaging user input of score 1-5
InputForm.prototype.getRating = function() {
  this.ratingArray.push(ratingValue); //push use input to array onclick in form
  var ratingSum = 0;
  for(var i = 0; i < this.waitArray.length; i++) {
    ratingSum += this.ratingArray[i];
  }

  var avgRating = ratingSum / this.ratingArray.length;
  console.log('The sum of all the elements is: ' + ratingSum + ' The average is: ' + avgRating);
  };  
});