$(document).ready(function(){
  function startUp(){
    $('form').hide();
    $('#date').hide();

    $('.datepicker').datepicker({
      prevText:'<i class="fa fa-fw fa-angle-left"></i>',
      nextText:'<i class="fa fa-fw fa-angle-right"></i>'
    });// End `datepicker`
  }// End `startUp`

  $('.datepicker').on('change', function(e){
    e.preventDefault();
    $('.datepicker').hide(1000);
    $('form').show(1000);
    var date = $(this).val();
    $('#showDate').text('Booking Date: '+date);
    $('#date').val(date);
    $('#name').hide();
    $('#email').hide();
    $('#phoneNumber').hide();
    $('#time').hide();
  });// End `Datepicker Change`

  $('#stylest').on('change', function(){
    // Needs to show date, name, email, phonenumber
    // Needs to look up times for styles
    $('#name').show();
    $('#email').show();
    $('#phoneNumber').show();
    $('#time').show();
  });// End `Styles Change`
  $('.back').on('click', function(e){
    e.preventDefault();
    $('form').hide(1000);
    $('.datepicker').show(1000);
  });// End `Back Click`

  startUp();
});
