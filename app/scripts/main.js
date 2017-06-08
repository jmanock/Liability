document.addEventListener('DOMContentLoaded', function(){
  /*
    ~ Need to send emails to brit to start new day
    ~ Add some style to the booking part
    ~ Email should be a little better
    ~ Thank you message after summit
    ~ Maybe some security or a check that only so many can book a time date
    ~ Open on the right
  */
  $(document).ready(function(){
    $('#BookNow').hide();
    $('.datepicker').datepicker({
      prevText:'<i class="fa fa-fw fa-angle-left"></i>',
      nextText:'<i class="fa fa-fw fa-angle-right"></i>',
      beforeShowDay:function(date){
        var day = date.getDay();
        return [day !=0 && day!=1, ''];
      }
    });// End `DatePicker`

    $('.datepicker').on('change',function(e){
      e.preventDefault();
      var date = $(this).val();
      $('form').show();
      $('.date').text(date);
      $('#Date').val(date);
      $('#Date').hide();
    });// End `Change`

    $('.grid').masonry({
      itemSelector:'.grid-item',
      columnWidth:160
    });
  });// End `Ready`
});// End `Event Listener`
function initMap(){
  var uluru = {lat:28.6486639786372, lng:-81.3540162583253};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom:16,
    center:uluru
  });
  var marker = new google.maps.Marker({
    position:uluru,
    map:map
  });
}
