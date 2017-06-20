$(document).ready(function(){
  /*
    ~ Styles Name
    ~ Time of Appointment every 15 mins
    ~ Up to two Appointments per time
    ~ Have to check and see if time is avaible
    ~ Thank you message
    ~ Salon Retro gmail group or invite everyone to mine?
  */
  $('#date').hide();
  $('#showDate').text('Please Select a Date!');
  $('.send').prop('disabled', true);
  $('.datepicker').datepicker({
    prevText:'<i class="fa fa-fw fa-angle-left"></i>',
    nextText:'<i class="fa fa-fw fa-angle-right"></i>'
  });

  $('.datepicker').on('change', function(e){
    e.preventDefault();
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
