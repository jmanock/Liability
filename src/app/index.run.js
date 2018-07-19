(function() {
  'use strict';

  angular
    .module('liability')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
