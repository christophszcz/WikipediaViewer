$(document).ready(function() {
  $("#getSearches").on("click", function(){
  	var search = $('#searchfield').val();
	  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&limit=10&formate=json&origin=*", function(json) {
	 	var html = "";
    for(var i = 0; i < 10; i++){
      html += "<div class = 'search-results'>";
      html +="<a href='"  + json[3][i] +"' class='description'>"
      html +="<p class='result-title'>" + json[1][i] + "</p>"; 
      html += json[2][i]+ "</a>";
      html +="</div>";
      html +="<hr/>";
    }
		$(".container").html(html);
		});
	});
});
 