(function() {
  'use strict';

  angular
    .module('liability')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('form', {
        url:'/form',
        templateUrl:'app/form/form.html',
        controller:'FormController',
        controllerAs:'form'
      })
      .state('summary', {
        url:'/summary',
        templateUrl:'app/form/summary.html',
        controller:'SummaryController',
        controllerAs:'summary',
        params:{'dogs':null}
      });

    $urlRouterProvider.otherwise('/');
  }

})();
