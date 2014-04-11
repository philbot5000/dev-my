angular.module('myBoiseState.profile')

.service('profile', function ($http) {

  // Hardcoded, but should come from a profile service that tells us everything
  // about the user such as roles, settings, social tokens etc...
  var userMenu = [
    //{name: 'Course Search', path: '/CourseSearch', icon: 'glyphicon glyphicon-book', external: false, id: 5 },
    {name: 'myUpdate', path: '/myUpdate', icon: 'glyphicon glyphicon-list-alt', external: false, id: 3 },
    //{name: 'BSocial', path: '/BSocial', icon: 'glyphicon glyphicon-picture', external: false, id: 1 },
    {name: 'Campus Map', path: 'http://maps.boisestate.edu', icon: 'glyphicon glyphicon-link', external: true, id: 4 },
    {name: 'Athletics', path: '/Athletics', icon: 'glyphicon glyphicon-flag', external: false, id: 2 },
    //{name: 'Directory', path: '/Directory', icon: 'glyphicon glyphicon-user', external: false, id: 6 }
  ];

  var menuService = {};

  menuService.add = function(item) {
    menuService.list().push(item);
  };

  menuService.remove = function(item) {
    menuService.list().pop(item);
  };

  menuService.list = function() {
    return userMenu;
  };

  return menuService;

});
