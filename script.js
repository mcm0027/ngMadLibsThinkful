angular.module('myApp', ['ngMessages'])
  .controller('oneController', ['$scope', function($scope) {
  $scope.sexMain = {
    name: 'female'
  };
    
  $scope.sexCeleb = {
    name: 'female'
  };
    
  $scope.sexBadCeleb = {
    name: 'female'
  }
  
  $scope.submit = function() {
    if ($scope.madForm.$valid) {
      console.log("the form is valid")
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
  


setTimeout(function(){
  $("#she-main").attr('checked','checked');
},10);

setTimeout(function(){
  $("#she-celeb").attr('checked','checked');
},10);

setTimeout(function(){
  $("#she-bad").attr('checked','checked');
},10);