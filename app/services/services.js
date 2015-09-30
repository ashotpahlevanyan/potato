
app.factory('GetDataService', ['$http', function($http, $q) {
	var items = [];
	
	return {
	 	getItems: function() {
			jsonFlickrFeed = function(data){
				angular.callbacks._0(data);
			}
			return $http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&callback=JSON_CALLBACK", { cache: true })
				.success(function(data){
					//var localData = data;
					var dat = data;
					for(i = 0; i < dat.items.length; i++) {
						dat.items[i].id = i;
						dat.items[i].tagsList = dat.items[i].tags.split(" ");
					}
				//console.log(dat);
				items = dat.items;
				return dat;
			});
		},
		find: function(id) {
			return _.find(items, function(item){return item.id == id});
		}
	};

}]);







