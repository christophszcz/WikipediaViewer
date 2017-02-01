$(document).ready(function() {
  $("#getSearches").on("click", function(){
  	var search = $('#searchfield').val();
	  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&limit=10&formate=json&origin=*", function(json) {
	 	var html = "";
    for(var i = 0; i < 10; i++){
      html += "<div class = 'text'>";
      html += "<p>" + json[1][i] + "</p>";
      html +="<a href='"  + json[3][i] +"'>" + json[2][i]+ "</>";
      html += "</div>";
    }
		$(".container").html(html);
		});
	});
});
 