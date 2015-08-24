'use strict'
$(document).ready(function(){

//set valid logins
localStorage.setItem("username1", "student");
localStorage.setItem("username2", "faculty");
localStorage.setItem("username3", "benton");
localStorage.setItem("username4", "bella");
localStorage.setItem("username5", "kelsey");
localStorage.setItem("username6", "ryan");
localStorage.setItem("password", "codefellows");

	$("#loginButton").click(function(){
		var username = $('#usernameId').val();
		var password = $('#passwordId').val();
		console.log(username);
		console.log(password);

		if(password === localStorage.getItem("password"){
			localStorage.setItem("login", "true");
			window.location.href = "index.html";
		}
			else{
				alert("Invalid Password");
			}
	});


});