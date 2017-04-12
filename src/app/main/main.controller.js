(function() {
  'use strict';

  angular
    .module('sRetro')
    .controller('MainController', MainController)
    .directive('calendar', calendar);

  /** @ngInject */
  function MainController($scope, moment){
    var vm = this;
    vm.day = moment();
  }// End `MainController`



})();
