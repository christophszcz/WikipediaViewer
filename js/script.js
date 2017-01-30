$(document).ready(function() {
   $("#getSearches").on("click", function(){
	  $.getJSON(" https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json", function(json) {
	  	$(".container").html(JSON.stringify(json));
		});
	});
});
