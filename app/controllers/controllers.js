
app.controller('ImageListController',['$scope', '$moment', '$http', 'GetDataService', function($scope, $moment, $http, GetDataService){
    
   	function init(){
    	GetDataService.getItems().then(function(response){
			$scope.items = response.data.items;
			console.log($scope.items);
		});
	}
	init();

	$scope.format = "Do MMMM YYYY, hh:mm"; 
	$scope.convertDate = function(date){
		pdate = $moment(date);//date, $scope.format
		fdate = pdate.format($scope.format)
		//console.log(fdate);
		return fdate;
	}
	$scope.gotoDetails = function(item) {
		
	}
}]);

app.controller('ImageDetailController', ['$scope', '$routeParams', '$moment', '$http', 'GetDataService',
  function($scope, $routeParams, $moment, $http, GetDataService) {
    
    function init(){
    	GetDataService.getItems().then(function(response){
			$scope.items = response.data.items;
			$scope.itemID = $routeParams.itemID;
			$scope.initItem();
			console.log($scope.items);
		});
	}
	init();

    $scope.initItem = function() {
    	for(i = 0; i < $scope.items.length; i++) {
    		if($scope.items[i].id == $scope.itemID) {
    			$scope.item = $scope.items[i];
    			break;
    		}
    	}
    }
    
    $scope.goBack = function() {
    	window.history.back();
    }
    $scope.format = "Do MMMM YYYY, hh:mm"; 
	$scope.convertDate = function(date){
		pdate = $moment(date);
		fdate = pdate.format($scope.format)
		return fdate;
	}

  }]);
