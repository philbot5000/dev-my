angular.module('myBoiseState.mainNav')

.controller('MainNavCtrl', ['$scope', '$location', 'profile', function($scope, $location, profile) {

  $scope.menu = profile.list();
  $scope.isCollapsed = true;

  // Adds Bootstrap CSS class to indicate the current selected menu item
  $scope.getClass = function(path) {
    if ($location.path().substr(0, path.length) == path) {
      return "active";
    } else {
      return "";
    }
  };

  $scope.filterMenu = function(item) {

    //console.log(item);
    return item;
  };

  $scope.goToStudentDashboard = function(){
    $location.path('/StudentDashboard');
  };

}]);
