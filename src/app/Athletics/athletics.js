angular.module('myBoiseState.athletics', [
  'ui.router'
])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('athletics', {
    url: '/Athletics',
    views: {
      "main": {
        controller: 'AthleticsCtrl',
        templateUrl: 'app/Athletics/athletics.tpl.html'
      }
    },
    data: { pageTitle: 'Athletics' }
  });
}])

.controller('AthleticsCtrl', ['$scope', function($scope){

  $scope.tests = [
    "test",
    "test 2"
  ];

}]);
