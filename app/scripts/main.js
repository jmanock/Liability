$(document).ready(function(){
  var form = $('form');
  var dates = $('#date');
  var stylest = $('#stylest');
  var hours = $('#hours');
  var minutes = $('#minutes');

  function startUp(){
    form.hide();
    dates.hide();

    $('.datepicker').datepicker({
      prevText:'<i class="fa fa-fw fa-angle-left"></i>',
      nextText:'<i class="fa fa-fw fa-angle-right"></i>'
    });// End `datepicker`
  }// End `startUp`

  $('.datepicker').on('change', function(e){
    e.preventDefault();
    $('.datepicker').hide(1000);
    form.show(1000);
    var date = $(this).val();
    $('#showDate').text('Booking Date: '+date);
    dates.val(date);
    $('#name').hide();
    $('#email').hide();
    $('#phoneNumber').hide();
    hours.hide();
    minutes.hide();
  });// End `Datepicker Change`

  $('#stylest').on('change', function(){
    // Needs to show date, name, email, phonenumber
    // Needs to look up times for styles
    init();
    $('#name').show();
    $('#email').show();
    $('#phoneNumber').show();
    hours.show();
    minutes.show();
  });// End `Styles Change`

  $('.back').on('click', function(e){
    e.preventDefault();
    $('form').hide(1000);
    $('.datepicker').show(1000);
  });// End `Back Click`

  startUp();
});

var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1p9t8s8-WC5F6pnxJs3VF0RH5s9gGzFFN6kzL2tjFBBI/pubhtml?gid=0&single=true';

function init(){
  Tabletop.init({
    key:publicSpreadsheetUrl,
    callback:showInfo,
    simpleSheet:true
  });
}

function showInfo(data, tabletop){
  data.forEach(function(x){
    var timeBackEnd = x.Time;
    var dateBackEnd = x.Date;
    var stylestBackEnd = x.Stylest;
    var dateValue = document.getElementById('date').value;
    var stylestValue = document.getElementById('stylest').value;
    var something = dateValue.charAt(0);
    if(something === '0'){
      // Remove the 0 to match the dates
      dateValue = dateValue.substring(1);
    }
    if(dateValue === dateBackEnd && stylestBackEnd === stylestValue){
      // This will show just the avaible times
       console.log('HelloFriend');
    }

  });
}

//window.addEventListener('DOMContentLoaded', init);
