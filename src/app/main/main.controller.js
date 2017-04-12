// (function() {
//   'use strict';
//
//   angular
//     .module('sRetro')
//     .controller('MainController', MainController);
//
//
//   /** @ngInject */
//   function MainController($scope, $interval){
//     $scope.minDate = new Date();
//   }// End `MainController`
//
// })();

angular.module('sRetro', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
.controller('MainController', function(){
  this.myDate = new Date();
  this.isOpen = false;
});
angular
  .module('sRetro')
  .config(function($mdDateLocaleProvider){
    $mdDateLocaleProvider.firstDayOfWeek = 1;
    $mdDateLocaleProvider.formatDate = function(date){
      var injector = angular.injector(['ng']), $filter = injector.get('$filter');
      var currWeek;
      if(date === undefined){
        date = new Date();
      }
      var currWeek = 'Week '+$filter('date')(date, 'ww');
      return currWeek;
    };
    $mdDateLocaleProvider.weekNumberFormatter = function(weekNumber){
      return 'Semaine '+weekNumber;
    };
  });
