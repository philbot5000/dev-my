angular.module('myBoiseState.athletics')

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('athletics', {
    url: '/Athletics',
    views: {
      "main": {
        controller: 'AthleticsCtrl',
        templateUrl: 'app/views/Athletics/athletics.tpl.html'
      }
    },
    resolve: {
      articles: function(athleticsService) {
        return athleticsService.getArticles();
      },
      videos: function(athleticsService) {
        return athleticsService.getVideos();
      },
      events: function(athleticsService) {
        return athleticsService.getEvents();
      }
    },
    data: { pageTitle: 'Athletics' }
  });
}])

.controller('AthleticsCtrl', ['$scope', 'articles', 'videos', 'events', function($scope, articles, videos, events) {

  $scope.athleticEvents = events.data.Content;
  $scope.athleticVideos = videos.data.Content;
  $scope.athleticArticles = articles.data.Content;

}]);
