
$(document).ready(function(){
  $.getJSON('db.json', function(data){
    for(var i = 0; i < data.length; i++){
      // console.log(data[i].hometeam);
      // This is where I should store the weeks
      var homeTeam = data[i].hometeam;
      var visitorTeam = data[i].visitorteam;
      var homeScore = data[i].homescore;
      var visitorScore = data[i].visitorscore;
      var winner = data[i].winner;
      if(i > 132 && i < 146){
        $('#weeks').append(visitorTeam + ' ' + visitorScore + ' @ '+homeTeam + ' '+ homeScore+ ' ' + winner + '<br>');
      }
    }
  });
  $('a').on('click', function(){
    // Could be a way to change the page
    var text = $(this).text();
    if(text === 'Standings'){
      console.log('Standings is open');
    }else if(text === 'Picks'){
      console.log('Picks is open');
    }else{
      console.log('Games is open');
    }
  });
});
