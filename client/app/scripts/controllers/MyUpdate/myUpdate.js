angular.module('myBoiseState.myUpdate')

// STATE CONFIG ...
.config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('myUpdate', {
    url: '/myUpdate',
    views: {
      "main": {
        controller: 'MyUpdateCtrl',
        templateUrl: 'app/views/MyUpdate/myUpdate.tpl.html'
      }
    },
    resolve: {
      articles: function (myUpdateService) {
        return myUpdateService.getArticles();
      },
      events: function (myUpdateService) {
        return myUpdateService.getEvents();
      }
    },
    data: { pageTitle: 'myUpdate' }
  });
}])

.controller('MyUpdateCtrl', ['$scope', '$http', '$modal', 'articles', 'events', function($scope, $http, $modal, articles, events) {

  // TODO: This should grab the articles from users saved feeds.

  $scope.feed = {name: 'Latest', url: 'https://web.boisestate.edu/myboisestatemobile/v2/campusupdate/getposts?rss=latest'};
  $scope.url = 'https://web.boisestate.edu/myboisestatemobile/v2/campusupdate/getposts?rss=latest';

  // TODO: This should be pulled in from a service that gives us the feeds the user
  //       has saved and is subscribed to.

  $scope.feeds = [
    {name: 'Featured', url: 'https://web.boisestate.edu/myboisestatemobile/v2/campusupdate/getposts?rss=latest'},
    {name: 'Current Students', url: 'https://web.boisestate.edu/myboisestatemobile/v2/campusupdate/getposts?rss=current'},
    {name: 'Bronco Bytes', url: 'https://web.boisestate.edu/myboisestatemobile/v2/campusupdate/getposts?rss=bytes'},
    {name: 'Photo of the Week', url: 'https://web.boisestate.edu/myboisestatemobile/v2/campusupdate/getposts?rss=photo'},
    {name: 'Events', url: 'https://web.boisestate.edu/myboisestatemobile/v2/campusupdate/getposts?rss=events'},
  ];

  $scope.selectFeed = function(){

    $http.get($scope.feed.url).success(function(data){
      //console.log(data.Content);
      $scope.campusFeed = data.Content;

      // TODO: service should return null when there is no image instead
      //       of relative path to a for and image on the client.

      for(var i = 0; i < $scope.campusFeed.length; i++){
        var str = $scope.campusFeed[i].Image;

        if(str.indexOf('img/default') != -1) {
          $scope.campusFeed[i].Image = null;
        }
      }
    });

  };

  $scope.campusFeed = articles.data.Content;
  $scope.campusEvents = events.data.Content;

/* Modal Instance Control */

  $scope.openAddFeedsModal = function ($event) {
    $event.preventDefault();

    var modalInstance = $modal.open({
      templateUrl: 'app/views/myUpdate/myUpdate-select-feed-modal.html',
      //controller: 'ModalInstanceCtrl',
      scope: $scope
    });
  };

  $scope.ok = function () {
      modalInstance.close();
  };

  $scope.cancel = function () {
      modalInstance.dismiss('cancel');
  };

  $scope.sources = [
    { source: 'Campus Update', category: 'Featured', id: 1, saved: false },
    { source: 'Student', category: 'Current Students', id: 1, saved: false },
    { source: 'Office of Information Technology', category: 'Bronco Bytes', id: 1, saved: false },
    { source: 'Campus Update', category: 'Photo of the Week', id: 1, saved: false },
    { source: 'Athletics', category: 'Athletics', id: 1, saved: false },
    { source: 'The Arbiter', category: 'The Arbiter News', id: 7, saved: false },
    { source: 'The Arbiter', category: 'The Arbiter Sports', id: 7, saved: false },
    { source: 'The Arbiter', category: 'The Arbiter Opinion', id: 7, saved: false }
  ];

}]);
