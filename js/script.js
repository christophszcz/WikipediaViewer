$(document).ready(function() {
  $('#searchfield').keypress(function(e){
    if(e.keyCode==13){
     $('#getSearches').click(); 
    }
  });
  
  $("#getSearches").on("click", function(){
  	search = $('#searchfield').val();
	  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&limit=10&formate=json&origin=*", function(json) {
	 	var html = "";
    for(var i = 0; i < 10; i++){
      html += "<div class = 'search-results'>";
      html +="<a href='"  + json[3][i] +"' class='description' target='_blank'>"
      html +="<p class='result-title'>" + json[1][i] + "</p>"; 
      html += json[2][i]+ "</a>";
      html +="</div>";
      html +="<hr/>";
    }
		$(".container").html(html);
    $(document.body).prepend(
        "<div class='col-lg-6 col-lg-offset-3 group'><div class='input-group'><input id='searchfield' type='search' class='form-control' placeholder='Search for...' value='" 
        + json[0] + 
        "'><span class='input-group-btn'><button class='btn btn-default' id='getSearches' type='button'><div class='glyphicon glyphicon-search'></div></button></span></div></div>");
		});
	});
});
 