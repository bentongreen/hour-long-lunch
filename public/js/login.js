'use strict';
$(document).ready(function() {

  localStorage.setItem('mrdarcy', 'janeausten');
  localStorage.setItem('student', 'guest');
  localStorage.setItem('faculty', 'codefellows');
  localStorage.setItem('benton', 'green');
  localStorage.setItem('bella', 'idontcare');
  localStorage.setItem('kelsey', 'kelseycat');
  localStorage.setItem('ryan', 'surpriseme');

    $('#loginButton').click(function() {
      var username = $('#usernameId').val();
      var password = $('#passwordId').val();

      if(password === localStorage.getItem(username)) {
        localStorage.setItem('login', 'true');
        window.location.href = 'index.html';
      } else {
        alert('Invalid Password');
      }
    });

    $('#submitButton').click(function() {
      var username2 = $('#newUsername').val();
      var password2 = $('#newPassword').val();

      localStorage.setItem(username2, password2);

      if(password2 === localStorage.getItem(username2)) {
        localStorage.setItem('login', 'true');
        window.location.href = 'index.html';
      }

  });

});
