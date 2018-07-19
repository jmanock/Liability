(function(){
  'use strict';
  angular
  .module('liability')
  .controller('SummaryController', SummaryController);

  function SummaryController($stateParams, $window, $log){
    var vm = this;
    var dog = $stateParams.dogs;
    $log.log(dog);
    vm.title = 'Summary';
    vm.states = states;
    vm.dogList = [];
    vm.dogList.push({
      name:dog.name,
      email:dog.email,
      state:dog.state
    });
    vm.Top = function(){
      $window.scrollTo(0,0);
    };

  }
})();
