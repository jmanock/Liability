document.addEventListener('DOMContentLoaded', function() {
  // do your setup here
  $(document).ready(function(){
    $('form').hide();
    $('.datepicker').datepicker({
      prevText:'<i class="fa fa-fw fa-angle-left"></i>',
      nextText:'<i class="fa fa-fw fa-angle-right"></i>'
    });// End `DatePicker`

    $('.datepicker').on('change', function(){
      var change = $(this).val();
      /*
        ~ Send form to goog spread sheet
        ~ Should also block out the days not working
      */
      $('form').show();
    });// End `Change`
  });// End `Datepicker`
});
