$(document).ready(function(){
  var form = $('form');
  var dates = $('#date');
  var stylest = $('#stylest');
  var time = $('#time');

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
    time.hide();
  });// End `Datepicker Change`

  $('#stylest').on('change', function(){
    // Needs to show date, name, email, phonenumber
    // Needs to look up times for styles
    init();
    $('#name').show();
    $('#email').show();
    $('#phoneNumber').show();
    time.show();
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
    /*
      ~ Need to check date vs date
      ~ Need to check stylest vs stylest
      ~ Get back times available
    */
    var timeBackEnd = x.Time;
    var dateBackEnd = x.Date;
    var stylestBackEnd = x.Stylest;
    var dateValue = document.getElementById('date').value;
    var stylestValue = document.getElementById('stylest').value;

    if(dateBackEnd.length === 9){
      
    }
  });
}

//window.addEventListener('DOMContentLoaded', init);
