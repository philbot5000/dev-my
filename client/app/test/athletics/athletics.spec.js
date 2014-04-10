'use strict';

var articles = [{
  Sport: "Track",
  Opponent: "Day 1",
  Location: "Tempe, Ariz.",
  Date: "Tomorrow",
  Time: "All Day ",
  Guid: null,
  Tv: "",
  Tournamentname: null,
  Homeaway: "V",
  Image: "img/default_schedule.png"
},
{
  Sport: "Women's Tennis",
  Opponent: "Wyoming",
  Location: "Laramie, Wyo.",
  Date: "04/11/2014",
  Time: "1:00 PM MT",
  Guid: null,
  Tv: "",
  Tournamentname: null,
  Homeaway: "V",
  Image: "img/default_schedule.png"
}];

describe('AthleticsCtrl', function(){
    var scope, $httpBackend;//we'll use these in our tests

    //mock Application to allow us to inject our own dependencies
    beforeEach(angular.mock.module('myBoiseState'));
    //mock the controller for the same reason and include $rootScope and $controller
    beforeEach(angular.mock.inject(function ($rootScope, $controller, _$httpBackend_){
        $httpBackend = _$httpBackend_;
        //$httpBackend.expectJSONP('http://localhost/athletics/getschedule').respond(articles);

        //create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('AthleticsCtrl', { $scope: scope });
    }));
    // tests start here

    // it('should fetch list of aritlces', function(){
    //     $httpBackend.flush();
    //     expect(scope.athleticEvents.length).toBe(2);
    //     expect(scope.athleticEvents[0].Sport).toBe('Track');
    // });

    it('should expect true to be true', function () {
      expect(true).toBeTruthy();
    });
});




// describe( 'Athletics: ', function() {
//   beforeEach( module( 'myBoiseState.athletics' ) );
//
//   it( 'should expect true to be true', inject( function() {
//     expect( true ).toBeTruthy();
//   }));
// });
