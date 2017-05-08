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
      $('.date').text(date);
      getData(date);
    });// End `Change`
  });// End `Ready`
});// End `Event Listener`
function getData(date){
  var elements = document.getElementById('BookNow').elements;


  var fields = Object.keys(elements).map(function(k){
    if(elements[k].name !== undefined){
      return elements[k].name;
    }else if(elements[k].length > 0){
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self){
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(k){
    data[k] = elements[k].value;
    // Need to add date into the values
    var str = "";
    if(elements[k].type === 'checkbox'){
      str = str + elements[k].checked + ', ';
      data[k].str.slice(0,-2);
    }else if(elements[k].length){
      for(var i = 0; i<elements[k].length; i++){
        if(elements[k].item(i).checked){
          str = str + elements[k].itme(i).value + ', ';
          data[k].str.slice(0,-2);
        }
      }
    }
  });
  //console.log(data);
  return data;
}
