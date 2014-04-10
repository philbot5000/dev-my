var env = 'web',
    ver = 'v2/';

angular.module('myBoiseState.athletics')

.factory('athleticsService', function($http) {
  return {
    getArticles: function(sport) {
      return  $http.get('https://'+env+'.boisestate.edu/myboisestatemobile/'+ver+'athletics/getposts?sport='+sport);
    },
    getVideos: function() {
      return $http.get('https://'+env+'.boisestate.edu/myboisestatemobile/'+ver+'athletics/getvideos');
    },
    getEvents: function() {
      return $http.get('https://'+env+'.boisestate.edu/myboisestatemobile/'+ver+'athletics/getschedule');
    }
  };
});
