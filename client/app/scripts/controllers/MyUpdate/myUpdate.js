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

            // TODO: service should return null instead of relative path
            // for and image.
            for(var i = 0; i < $scope.campusFeed.length; i++){
              var str = $scope.campusFeed[i].Image;

              if(str.indexOf('img/default') != -1) {
                //console.log(str);
                $scope.campusFeed[i].Image = null;
              }
            }
          });

        };

        $scope.campusFeed = articles.data.Content;
        $scope.campusEvents = events.data.Content;

        $scope.openCustomizeFeedModal = function($event) {
          $event.preventDefault();

          var modalInstance = $modal.open({
            templateUrl: 'app/views/myUpdate/myUpdate-select-feed-modal.html',
            //controller: 'ModalInstanceCtrl',
            scope: $scope,
            resolve: {
              post: function () {
                return $scope.post;
              }
            }
          });
        };
}]);
