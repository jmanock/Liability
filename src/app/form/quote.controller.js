(function (){
  'use strict';
  angular
    .module('liability')
    .controller('QuoteController', QuoteController);

  function QuoteController($log, $window){
    var vm = this;

    vm.Next = function(){
      vm.dogInfo = true;
      vm.dogApp = true;
    };
  }
})();
