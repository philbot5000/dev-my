var env = 'web',
    ver = 'v2/';

angular.module('myBoiseState.myUpdate')


.factory('myUpdateService', function ($http) {
  return {
      getArticles: function (feed) {
           // $http.get returns a promise.
           return $http.get('https://'+env+'.boisestate.edu/myboisestatemobile/'+ver+'/campusupdate/getposts?rss='+feed, { cache: true });
      },
      getEvents: function() {
           // $http.get returns a promise.
           return $http.get('https://'+env+'.boisestate.edu/myboisestatemobile/'+ver+'/campusupdate/getposts?rss=events', { cache: true });
      }
  };

});
