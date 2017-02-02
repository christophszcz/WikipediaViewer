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
      $('.click-instructions').hide();
      $('#remove').hide();
  		$(".search-results").html(html);
      $('.search-results').show();

      if($('.click-instructions').css('display') === 'none'){
        $('.search-results').addClass('space');
        $('body').prepend("<p id='remove' >Back</p>");
      }

      $('#remove').on('click', function removeHtml(){
        $('#remove').hide();
        $('.search-results').hide();
        $('.click-instructions').show();
      });

		});
	});
});