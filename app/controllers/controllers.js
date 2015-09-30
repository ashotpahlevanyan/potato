
app.controller('ImageListController',['$scope', '$moment', '$http', 'GetDataService', function($scope, $moment, $http, GetDataService){
    
   	
    //$scope.items = GetDataService.getItems();

    //console.log($scope.items);

    function init(){
    	GetDataService.getItems().then(function(response){
			$scope.items = response.data.items;
			//console.log($scope.items);
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

app.controller('ImageDetailController', ['$scope', '$stateParams', '$moment', 'GetDataService',
  function($scope, $stateParams, $moment, GetDataService) {
    $scope.item = GetDataService.find($stateParams.id);
    
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
