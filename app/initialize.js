document.addEventListener('DOMContentLoaded', function() {
  // do your setup here
  $(document).ready(function(){
    $('.datepicker').datepicker({
      prevText:'<i class="fa fa-fw fa-angle-left"></i>',
      nextText:'<i class="fa fa-fw fa-angle-right"></i>'
    });// End `DatePicker`
    $('a').on('change', function(e){
      // Should open times
      // Need to block off days that arnt open
      e.preventDefault();
      var selected = $(this).val();
      console.log(selected);
    });
  });
});
