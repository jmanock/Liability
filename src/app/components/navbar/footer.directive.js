(function(){
  'use strict';
  angular
  .module('liability')
  .directive('acmeFooter', acmeFooter);

  function acmeFooter(){
    var directive = {
      restrict: 'E',
      templateUrl:'app/components/navbar/footer.html',
      scope:{},
      controller:FooterController,
      controllerAs:'vm',
      bindToController:true
    };
    return directive;

    function FooterController($window){
      var vm = this;
      vm.Top = function(){
        $window.scrollTo(0,0);
      }
    }
  }
})();
