
angular.module('myBoiseState', [
  'ui.router',
  'ui.bootstrap',
  'myBoiseState.profile',
  'myBoiseState.mainNav',
  'myBoiseState.myUpdate',
  'myBoiseState.athletics'
])

.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
])

.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {

  // Sets up our 'Loading...' indicator.
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.isViewLoading = true;

  $rootScope.setLoading = function () {
    $rootScope.isViewLoading = true;
  };

  $rootScope.unsetLoading = function () {
    $rootScope.isViewLoading = false;
  };

  $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
    $rootScope.setLoading();
  });

  $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
    $rootScope.unsetLoading();
  });
  // End Loading Indicator Logic

}])

.controller('AppCtrl', ['$scope', '$location',

  function($scope, $location) {

    $scope.$on('$stateChangeSuccess',
      // Dynamically change page title in header based on view
      function(event, toState, toParams, fromState, fromParams) {
        if(angular.isDefined(toState.data.pageTitle)) {
          $scope.pageTitle = 'myBoiseState | '+ toState.data.pageTitle;
        }
      }
    );
  }
]);

// Define all our modules first here.
angular.module('myBoiseState.athletics', []);
angular.module('myBoiseState.myUpdate', ['ngSanitize']);
angular.module('myBoiseState.mainNav', []);
angular.module('myBoiseState.profile', []);
