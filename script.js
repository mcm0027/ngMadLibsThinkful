angular.module('myApp', ['ngMessages'])
  .controller('oneController', ['$scope', function($scope) {
  $scope.sexMain = {};
    
  $scope.sexCeleb = {};
    
  $scope.sexBadCeleb = {};
  
   
  $scope.submit = function() {
          console.log($scope.sexMain);
    if ($scope.madForm.$valid) {
      console.log("the form is valid");
      

      if ($scope.sexmain === "male") {
        alert("cool");
      }
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


setTimeout(function(){
  $(".popup").hide();}, 1);
  
  
$(document).click(function(){
		$(".popup").hide();
	});

	
$(document).keydown(function(){ 
		$(".popup").hide();
	});
  

