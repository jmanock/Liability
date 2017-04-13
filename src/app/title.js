function mainController($scope, $log) {
  $log.log('HelloFriend');
}
module.exports = {
  template: require('./title.html'),
  controller: mainController
};
