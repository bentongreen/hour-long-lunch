//Original animaion desgin by kescoe on codepen.io http://codepen.io/kescoe/pen/IDaxf
$(document).ready(function(){  
$("#slide_window2").hover(function(){
  $(this)
		.animate({"left": "63px"}, 500);
  });
  $("#slide_window2").mouseleave(function(){
    $("#slide_window2")
		.animate({"left": "1px"}, 500);
  });
});

