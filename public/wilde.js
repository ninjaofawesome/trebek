$(document).ready(function(){
	console.log("You opened the document!");
	$("div.card.col3").on("click", function(){
	console.log("you clicked the button!  Hooray!");

		$(this).addClass("chosen");
		console.log("you added the chosen class.")
		
			$(this).find(".value").fadeOut();
			console.log("the value faded out!  Hooray!");
			$(this).find(".answer").fadeIn();
			console.log("the answer faded in!  Hooray!");
		
	
	});

});