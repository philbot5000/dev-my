
angular.module('myBoiseState', [
  'ui.router',
  'myBoiseState.athletics'
])

.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
])

.run(function run() {

})

.controller('AppCtrl', ['$scope', '$location',

  function($scope, $location) {

    $scope.$on('$stateChangeSuccess',
      // Dynamically change page title in header based on view
      function(event, toState, toParams, fromState, fromParams) {
        if(angular.isDefined(toState.data.pageTitle)) {
          $scope.pageTitle = toState.data.pageTitle + ' | myBoiseState';
        }
      }
    );
  }
]);
