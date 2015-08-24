'use strict'
$(document).ready(function(){

localStorage.setItem("student", "guest");
localStorage.setItem("faculty", "codefellows");
localStorage.setItem("benton", "green");
localStorage.setItem("bella", "idontcare");
localStorage.setItem("kelsey", "kelseycat");
localStorage.setItem("ryan", "surpriseme");

	$("#loginButton").click(function(){
		var username = $('#usernameId').val();
		var password = $('#passwordId').val();
		console.log(username);
		console.log(password);

		if(password === localStorage.getItem(username)){
			localStorage.setItem("login", "true");
			window.location.href = "index.html";
		}
			else{
				alert("Invalid Password");
			}
	});


});