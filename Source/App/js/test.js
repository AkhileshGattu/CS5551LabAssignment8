describe('myController', function () {
  beforeEach(module('ArrayExample'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('fullName', function() {
    it('Tests the Full name feature of the application', function() {
      var $scope = {};
      var controller = $controller('myController', { $scope: $scope });
      var firstname = 'akhi';
      var lastname = 'akhi';
      expect($scope.fullName(firstname, lastname)).toEqual('akhi akhi');
      
    });
  });
    describe('fullName', function() {
    it('Tests the Full name feature of the application', function() {
      var $scope = {};
      var controller = $controller('myController', { $scope: $scope });
      var firstname = 'akhi';
      var lastname = 'akhi';
      expect($scope.fullName(firstname, lastname)).toEqual('akhi akhi');
      //expect($scope.country()).toEqual('India');
      
    });
  });
    describe('fullName', function() {
    it('Tests the Full name feature of the application', function() {
      var $scope = {};
      var controller = $controller('myController', { $scope: $scope });
      var firstname = 'akhilesh';
      var lastname = 'gattu';
      expect($scope.fullName(firstname, lastname)).toEqual('akhilesh gattu');
      
    });
  });
});