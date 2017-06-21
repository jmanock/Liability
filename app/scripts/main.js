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
    $('#showDate').text('Date: '+date);
    $('#date').val(date);
    // Hide name, email, time,
    // Show selected date
  });// End `Datepicker Change`

  $('.back').on('click', function(e){
    e.preventDefault();
    $('form').hide(1000);
    $('.datepicker').show(1000);
  });// End `Back Click`

  startUp();
});
