document.addEventListener('DOMContentLoaded', function(){
  $(document).ready(function(){
    $('form').hide();
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
      $('.date').append(date);
    });// End `Change`
  });// End `Ready`
});// End `Event Listener`
