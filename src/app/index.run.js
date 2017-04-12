(function() {
  'use strict';

  angular
    .module('sRetro')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
