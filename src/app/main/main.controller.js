(function() {
  'use strict';

  angular
    .module('sRetro')
    .controller('MainController', MainController);


  /** @ngInject */
  function MainController($scope, $interval){
    $scope.minDate = new Date();
  }// End `MainController`

})();
