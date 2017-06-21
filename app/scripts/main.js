$(document).ready(function(){
  /*
    ~ List of Stylest
      - Open Times
      - Open Dates
    ~ If date and time match should not be able to book the date
  */

  // Testing the api in sheets
  var id = 'AIzaSyCC7WGlw2E6bq1grue0BlwmOD831iinJDo';
  var sheets = 'https://docs.google.com/spreadsheets/d/19G5guLeArcjOsrmKGLJjYN6T7bW6HUGxVXDav73JM0M/edit?usp=sharing';

  $('form').hide();
  $('#date').hide();
  $('#showDate').text('Please Select a Date!');
  $('.send').prop('disabled', true);
  $('.datepicker').datepicker({
    prevText:'<i class="fa fa-fw fa-angle-left"></i>',
    nextText:'<i class="fa fa-fw fa-angle-right"></i>'
  });

  $('.datepicker').on('change', function(e){
    e.preventDefault();
    $('form').show(1000);
    //$('form').fadeIn(1000);
    var date = $(this).val();
    $('.send').prop('disabled', false);
    $('#showDate').text('Date: '+date);
    $('#date').val(date);
    $('#date').hide();
  });

  $('.send').on('click', function(e){
    e.preventDefault();
    console.log('Hold on champ nothing to send yet');
  })
});
