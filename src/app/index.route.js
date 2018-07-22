(function() {
  'use strict';

  angular
    .module('liability')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('Home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('Quote', {
        url:'/Quote',
        templateUrl:'app/form/quote.html',
        controller:'QuoteController',
        controllerAs:'quote'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
