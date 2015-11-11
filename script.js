angular.module('myApp', ['ngMessages', 'ngAnimate'])
  .controller('oneController', ['$scope', function($scope) {
  $scope.sexMain = {};
    
  $scope.sexCeleb = {};
    
  $scope.sexBadCeleb = {};
  
   
  $scope.submit = function() {
          console.log($scope.sexMain);
    if ($scope.madForm.$valid) {
      $(".popup").hide();
    } else {
      $(".popup").show();
      $scope.madForm.$submitted = false;
    }
  }
  
  $scope.reset = function() {
    document.getElementById("form").reset();
    $scope.madForm.$submitted = false;
    $scope.madForm.$valid = false;
 }
    
}]);


$(document).ready(function(){
  $(".popup").hide();
});
  
  
$(document).click(function(){
		$(".popup").hide();
	});

	
$(document).keydown(function(){ 
		$(".popup").hide();
	});
  

