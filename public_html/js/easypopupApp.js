/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * All Codes written by FAtimehin Dare ., 
 * contact on <fatimehindare@gmail.com> and @AmaCodeCode or on +2347061004474
 */

myapp = angular.module("myapp", []);


myapp.directive('easyPopper', function() {
    return {
         restrict: 'E',
          scope: {
      information: '=info',
    },
    templateUrl: function(elem, attr){
      return '/EasyPopUp/pop'+attr.type+'.html';
    }
  };
});


myapp.controller("PopCtrl", function($scope, $http) {
    $scope.ShowEventA=false;
   $scope.ShowEventM=false;
    $scope.type={};
    $scope.menu ={title:'Menu Head'}
    $scope.alert ={title:'Alert Head'}
  
 $scope.hideA = function(){
     $scope.ShowEventA=true;
    
    
  }
   $scope.hideM = function(){
     $scope.ShowEventM=true;
    
    
  }
   $scope.destroyA = function(){
     $scope.ShowEventA=false;
    
    
  }
   $scope.destroyM = function(){
     $scope.ShowEventM=false;
    
    
  }
});