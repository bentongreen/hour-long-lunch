'use strict'
$(document).ready(function(){

	$("#loginButton").click(function(){
		var username = $('#usernameId').val();
		var password = $('#passwordId').val();
		console.log(username);
		console.log(password);

		if(password === "codefellows"){
			window.location.href = "index.html";
		}
			else{
				alert("Invalid Password");
			}
	});


});