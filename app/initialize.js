document.addEventListener('DOMContentLoaded', function() {
  // do your setup here
  $(document).ready(function(){
    $('form').hide();
    $('.datepicker').datepicker({
      prevText:'<i class="fa fa-fw fa-angle-left"></i>',
      nextText:'<i class="fa fa-fw fa-angle-right"></i>',
      beforeShowDay: function(date){
        return [date.getDay() !=0 && date.getDay()!=1, ''];
      }
    });// End `DatePicker`

    $('.datepicker').on('change', function(){
      var date = $(this).val();
      /*
        ~ Need to change the color of the days not working
        ~ Rules for `Book` button
        ~ Instructions might be good
        ~ Send form to goog spread sheet
      */
      $('form').show();
      $('.date').append(date);
    });// End `Change`
  });// End `Datepicker`
});
