(function(){
  'use strict';
  angular
  .module('liability')
  .controller('EditController', EditController);

  function EditController($stateParams, $log){
    var vm = this;
    var dog = $stateParams.dog;
    $log.log(dog);
  }
})();
