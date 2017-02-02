$(document).ready(function() {
  $('#searchfield').keypress(function(e){
    if(e.keyCode==13){
     $('#getSearches').click(); 
    }
  });

  $("#searchclear").hide();

  $( "#searchfield").focus(function(){
    $("#searchclear").show();
    $("#searchclear").click(function(){
      $("#searchfield").val('');
    });
  });

  $("#getSearches").on("click", function searching(){
  	var search = $('#searchfield').val();
	  $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&limit=10&formate=json&origin=*", function(json) {
  	 	var html = "";

      for(var i = 0; i < 10; i++){
        html += "<div class = 'search-item'>";
        html +="<a href='"  + json[3][i] +"' class='description' target='_blank'>"
        html +="<p class='result-title'>" + json[1][i] + "</p>"; 
        html += json[2][i]+ "</a>";
        html +="</div>";
        html +="<hr/>";
      }
  		$(".search-results").html(html);

      if(!($('#instruction').length > 0)){
        $('.search-results').addClass('space');
      }

      $('body').prepend("<p id='remove' >Back</p>");

      $('#remove').on('click', function removeHtml(){
        $('.search-results').remove();
        $('#remove').remove();
        $('.col-lg-6').append("<br><div class='search-results'><p class='text' id='instruction'>Click icon to search</p></div>");
      });

		});
	});
});