document.addEventListener('DOMContentLoaded', function(){
  /*
    ~ Need to send emails to brit to start new day
    ~ Add some style to the booking part
  */
  $(document).ready(function(){
    $('#BookNow').hide();
    $('#thankyou_message').hide();
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
      $('.date').text('Date: '+date);
      $('#Date').val(date);
      $('#Date').hide();
    });// End `Change`
    $('button').on('click', function(){
      // Need to make sure the form is correct first before it shows up
      // $('#thankyou_message').show();
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
