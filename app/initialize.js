document.addEventListener('DOMContentLoaded', function() {
  // do your setup here
  $(document).ready(function(){
    var eventDates = {};
    $('#calendar').datepicker({
      beforeShowDay:function(date){
        var highlight = eventDates[date];
        if(highlight){
          return [true, 'event, highligh'];
        }else{
          return [true, '', ''];
        }
      }
    })
  });
});
