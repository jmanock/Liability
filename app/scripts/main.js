document.addEventListener('DOMContentLoaded', function(){
  /*
    ~ Need to have checks for missing email
      - Need at least a phone number or email address
    ~ Add content
    ~ Clean up location
    ~ Work on footer
  */
  $(document).ready(function(){
    var sections = $('section');
    var nav = $('nav');
    var nav_height = nav.outerHeight();

    $(window).on('scroll', function(){
      var cur_pos = $(this).scrollTop();

      sections.each(function(){
        var top = $(this).offset().top - nav_height;
        var bottom = top + $(this).outerHeight();

        if(cur_pos >= top && cur_pos <= bottom){
          nav.find('a').removeClass('active');
          sections.removeClass('active');
          $(this).addClass('active');
          nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
        }
      });
    });// End `Scroll`

    nav.find('a').on('click', function(){
      var $el = $(this);
      var id = $el.attr('href');
      $('html, body').animate({
        scrollTop:$(id).offset().top -nav_height
      }, 500);
      return false;
    });

    $('#Date').hide();
    $('.date').text('Please Select a Date.');

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
      $('.date').text('Date: '+date);
      $('#Date').val(date);
      $('#Date').hide();
    });// End `Change`

  });// End `Ready`
});// End `Event Listener`
function initMap(){
  var uluru = {lat:28.6486639786372, lng:-81.3540162583253};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom:16,
    center:uluru
  });
  var marker = new google.maps.Marker({
    position:uluru,
    map:map
  });
}
