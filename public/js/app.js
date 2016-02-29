'use strict';
$(document).ready(function(){

    if(localStorage.getItem('login') != 'true') {
      window.location.href = 'login.html';
    }
    //Event listeners for form input
    var firstLoc, spotNameValue, spotStreetValue, spotCrossValue, dayValue, cuisineValue, ratingValue, waitTimeValue, linkValue, zoomLevel, latitudeVal, longitudeVal;
    var storageArray = new Array();

    if(localStorage['storageArray'] === undefined) {
     localStorage['storageArray'] = JSON.stringify(storageArray);
   }

    if(localStorage.getItem('login') === 'true') {
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
    dayValue = $('#day').val();
    cuisineValue = $('#cuisine').val();
    ratingValue = $('#rating').val();
    waitTimeValue = $('#wait-time').val();
    ratingValue = parseFloat(ratingValue).toFixed(2);
    waitTimeValue = parseInt(waitTimeValue);

  //-----------------------------linkValue to be generated from function that get a google maps location from street names ------------------------------------------------------
        var geocoder;
        var firstLoc;
        var streetAddress = spotStreetValue + ", Seattle, WA, 98109, USA";
        geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': streetAddress },
          function(results, status) {
            firstLoc = results[0].geometry.location;
            firstLoc = JSON.stringify(firstLoc);
            firstLoc = firstLoc.replace('(', '');
            firstLoc = firstLoc.replace(')', '');
            firstLoc = firstLoc.replace('{', '');
            firstLoc = firstLoc.replace('}', '');
            firstLoc = firstLoc.replace('G', '');
            firstLoc = firstLoc.replace('K', '');
            firstLoc = firstLoc.replace('"', '');
            firstLoc = firstLoc.replace('"', '');
            firstLoc = firstLoc.replace('"', '');
            firstLoc = firstLoc.replace('"', '');
            firstLoc = firstLoc.replace(':', '');
            firstLoc = firstLoc.replace(':', '');

  //-----------------------------------------------------------------------------------------------------------------------------------------------
            linkValue = '<a href="https://www.google.com/maps?q=' + firstLoc + '">See on map!</a>';
            inputForm.waitTime();
            inputForm.getRating();

            //appends user submissons to unordered list of added locations
            var liString = '<li>' + spotNameValue + ' - ' + spotStreetValue + ' - ' + spotCrossValue + ' - ' + dayValue + ' - ' + cuisineValue + ' - ' + waitTimeValue + ' - ' + ratingValue + ' - ' + linkValue + '</li>';
            JSON.stringify(liString);
            storageArray.push(liString);
            localStorage['storageArray'] = JSON.stringify(storageArray);
            var storedArray = JSON.parse(localStorage['storageArray']);

            for(var i = 0; i < storageArray.length; i++) {
              $('#unorderedList').append(storedArray[i]);
            }
          });
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
    }
    var waitAvg = waitSum / this.waitArray.length;
    
  };

  // Function for averaging user input of score 1-5
  InputForm.prototype.getRating = function() {
    this.ratingArray.push(ratingValue); //push use input to array onclick in form
    var ratingSum = 0;
    for(var i = 0; i < this.waitArray.length; i++) {
      ratingSum += this.ratingArray[i];
    }
     if (ratingValue > 5) {
      alert('Choose a number between 1 and 5!');
    }

    var avgRating = ratingSum / this.ratingArray.length;
    };
});
