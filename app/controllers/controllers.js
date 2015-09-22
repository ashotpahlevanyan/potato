
app.controller('ListController',['$scope', function($scope){
    // $http.get('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json').then(function(res) {
    //     $scope.items = res.data.items;
    //     console.log(res.data);
    // 
	$scope.items = [
		   {
				"title": "Holy Sweet Taters & Spinach!",
				"link": "https://www.flickr.com/photos/jenniranee/20990166314/",
				"media": {"m":"https://farm6.staticflickr.com/5655/20990166314_390740434b_m.jpg"},
				"date_taken": "2015-09-20T21:34:24-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/jenniranee/\">jenniranee<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/jenniranee/20990166314/\" title=\"Holy Sweet Taters &amp; Spinach!\"><img src=\"https://farm6.staticflickr.com/5655/20990166314_390740434b_m.jpg\" width=\"223\" height=\"240\" alt=\"Holy Sweet Taters &amp; Spinach!\" /><\/a><\/p> <p>And Avocado. Of course. <br /> This is me we\'re talking about.<\/p>",
				"published": "2015-09-22T01:57:33Z",
				"author": "nobody@flickr.com (jenniranee)",
				"author_id": "21061333@N06",
				"tags": "food avocado healthy corn sweet wrap potato foodporn vegetarian tortilla spinach appleiphone6"
		   },
		   {
				"title": "The Family",
				"link": "https://www.flickr.com/photos/artofmulata/21588970595/",
				"media": {"m":"https://farm1.staticflickr.com/740/21588970595_fdb0f412e7_m.jpg"},
				"date_taken": "2015-09-21T04:00:39-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/artofmulata/\">artofmulata<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/artofmulata/21588970595/\" title=\"The Family\"><img src=\"https://farm1.staticflickr.com/740/21588970595_fdb0f412e7_m.jpg\" width=\"240\" height=\"159\" alt=\"The Family\" /><\/a><\/p> ",
				"published": "2015-09-21T05:40:17Z",
				"author": "nobody@flickr.com (artofmulata)",
				"author_id": "23988592@N05",
				"tags": "rot vine potato tuber"
		   },
		   {
				"title": "The Family 2",
				"link": "https://www.flickr.com/photos/artofmulata/21402032839/",
				"media": {"m":"https://farm6.staticflickr.com/5653/21402032839_78449555b8_m.jpg"},
				"date_taken": "2015-09-21T04:02:51-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/artofmulata/\">artofmulata<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/artofmulata/21402032839/\" title=\"The Family 2\"><img src=\"https://farm6.staticflickr.com/5653/21402032839_78449555b8_m.jpg\" width=\"240\" height=\"159\" alt=\"The Family 2\" /><\/a><\/p> ",
				"published": "2015-09-21T05:42:19Z",
				"author": "nobody@flickr.com (artofmulata)",
				"author_id": "23988592@N05",
				"tags": "vegetables potato shoots tuber"
		   },
		   {
				"title": "Final Family",
				"link": "https://www.flickr.com/photos/artofmulata/20967915843/",
				"media": {"m":"https://farm6.staticflickr.com/5771/20967915843_1199334263_m.jpg"},
				"date_taken": "2015-09-21T04:03:23-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/artofmulata/\">artofmulata<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/artofmulata/20967915843/\" title=\"Final Family\"><img src=\"https://farm6.staticflickr.com/5771/20967915843_1199334263_m.jpg\" width=\"240\" height=\"159\" alt=\"Final Family\" /><\/a><\/p> ",
				"published": "2015-09-21T05:47:28Z",
				"author": "nobody@flickr.com (artofmulata)",
				"author_id": "23988592@N05",
				"tags": "rot vines cluster potato collapse shoots regeneration tubers"
		   },
		   {
				"title": "Ban Chan (Appetizers) at Go Hyang Jib",
				"link": "https://www.flickr.com/photos/jjldickinson/20963775134/",
				"media": {"m":"https://farm1.staticflickr.com/757/20963775134_63afe4fa11_m.jpg"},
				"date_taken": "2015-08-27T13:23:59-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/jjldickinson/\">jjldickinson<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/jjldickinson/20963775134/\" title=\"Ban Chan (Appetizers) at Go Hyang Jib\"><img src=\"https://farm1.staticflickr.com/757/20963775134_63afe4fa11_m.jpg\" width=\"240\" height=\"160\" alt=\"Ban Chan (Appetizers) at Go Hyang Jib\" /><\/a><\/p> <p>DSC_0023-61.jpg<\/p>",
				"published": "2015-09-21T03:36:08Z",
				"author": "nobody@flickr.com (jjldickinson)",
				"author_id": "98849002@N00",
				"tags": "food lunch restaurant eating norwalk crab potato korean garlic appetizer kimchi banchan nikond3300 promaster52mmdigitalhdprotectionfilter 101d3300 nikon1855mmf3556gvriiafsdxnikkor gohyangjib"
		   },
		   {
				"title": "Solo",
				"link": "https://www.flickr.com/photos/artofmulata/21395044719/",
				"media": {"m":"https://farm6.staticflickr.com/5802/21395044719_2f16eab91c_m.jpg"},
				"date_taken": "2015-09-21T03:59:15-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/artofmulata/\">artofmulata<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/artofmulata/21395044719/\" title=\"Solo\"><img src=\"https://farm6.staticflickr.com/5802/21395044719_2f16eab91c_m.jpg\" width=\"240\" height=\"159\" alt=\"Solo\" /><\/a><\/p> ",
				"published": "2015-09-20T23:54:52Z",
				"author": "nobody@flickr.com (artofmulata)",
				"author_id": "23988592@N05",
				"tags": "vines bricks roots potato tuber"
		   },
		   {
				"title": "Papá",
				"link": "https://www.flickr.com/photos/131400568@N07/21590422561/",
				"media": {"m":"https://farm1.staticflickr.com/634/21590422561_cc5e7be56c_m.jpg"},
				"date_taken": "2015-09-17T11:46:07-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/131400568@N07/\">aldanacardo<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/131400568@N07/21590422561/\" title=\"Papá\"><img src=\"https://farm1.staticflickr.com/634/21590422561_cc5e7be56c_m.jpg\" width=\"240\" height=\"160\" alt=\"Papá\" /><\/a><\/p> ",
				"published": "2015-09-20T23:37:47Z",
				"author": "nobody@flickr.com (aldanacardo)",
				"author_id": "131400568@N07",
				"tags": "family white man pope black blanco familia key dad guatemala low negro picture potato papa years 60 hombre años fotografía seriousness hardness seriedad dureza"
		   },
		   {
				"title": "Potato Field in Full Bloom",
				"link": "https://www.flickr.com/photos/mrsris/20960157733/",
				"media": {"m":"https://farm1.staticflickr.com/644/20960157733_f3fab9e9b3_m.jpg"},
				"date_taken": "2015-09-20T20:22:27-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/mrsris/\">mrsris<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/mrsris/20960157733/\" title=\"Potato Field in Full Bloom\"><img src=\"https://farm1.staticflickr.com/644/20960157733_f3fab9e9b3_m.jpg\" width=\"240\" height=\"153\" alt=\"Potato Field in Full Bloom\" /><\/a><\/p> <p>Albany PEI<\/p>",
				"published": "2015-09-20T23:36:13Z",
				"author": "nobody@flickr.com (mrsris)",
				"author_id": "44537389@N02",
				"tags": "canada field postcard farming potato pei"
		   },
		   {
				"title": "They sure grow em big here",
				"link": "https://www.flickr.com/photos/mrsris/20958521804/",
				"media": {"m":"https://farm1.staticflickr.com/651/20958521804_4f26ae296b_m.jpg"},
				"date_taken": "2015-09-20T20:22:26-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/mrsris/\">mrsris<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/mrsris/20958521804/\" title=\"They sure grow em big here\"><img src=\"https://farm1.staticflickr.com/651/20958521804_4f26ae296b_m.jpg\" width=\"240\" height=\"149\" alt=\"They sure grow em big here\" /><\/a><\/p> <p>unic postcard montreal<\/p>",
				"published": "2015-09-20T23:36:14Z",
				"author": "nobody@flickr.com (mrsris)",
				"author_id": "44537389@N02",
				"tags": "tractor model postcard farming potato"
		   },
		   {
				"title": "Bifurcate",
				"link": "https://www.flickr.com/photos/artofmulata/21581616695/",
				"media": {"m":"https://farm1.staticflickr.com/639/21581616695_67528ae807_m.jpg"},
				"date_taken": "2015-09-21T03:53:09-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/artofmulata/\">artofmulata<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/artofmulata/21581616695/\" title=\"Bifurcate\"><img src=\"https://farm1.staticflickr.com/639/21581616695_67528ae807_m.jpg\" width=\"240\" height=\"159\" alt=\"Bifurcate\" /><\/a><\/p> ",
				"published": "2015-09-20T23:36:29Z",
				"author": "nobody@flickr.com (artofmulata)",
				"author_id": "23988592@N05",
				"tags": "vines potato tuber rootbundle"
		   },
		   {
				"title": "Grounded",
				"link": "https://www.flickr.com/photos/artofmulata/21581365365/",
				"media": {"m":"https://farm6.staticflickr.com/5638/21581365365_21f01e5f65_m.jpg"},
				"date_taken": "2015-09-21T03:45:13-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/artofmulata/\">artofmulata<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/artofmulata/21581365365/\" title=\"Grounded\"><img src=\"https://farm6.staticflickr.com/5638/21581365365_21f01e5f65_m.jpg\" width=\"240\" height=\"159\" alt=\"Grounded\" /><\/a><\/p> ",
				"published": "2015-09-20T23:24:21Z",
				"author": "nobody@flickr.com (artofmulata)",
				"author_id": "23988592@N05",
				"tags": "growth potato tuber rootbundle"
		   },
		   {
				"title": "Reaching Out",
				"link": "https://www.flickr.com/photos/artofmulata/21394517099/",
				"media": {"m":"https://farm1.staticflickr.com/660/21394517099_0191de74cd_m.jpg"},
				"date_taken": "2015-09-21T03:46:01-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/artofmulata/\">artofmulata<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/artofmulata/21394517099/\" title=\"Reaching Out\"><img src=\"https://farm1.staticflickr.com/660/21394517099_0191de74cd_m.jpg\" width=\"240\" height=\"159\" alt=\"Reaching Out\" /><\/a><\/p> ",
				"published": "2015-09-20T23:28:41Z",
				"author": "nobody@flickr.com (artofmulata)",
				"author_id": "23988592@N05",
				"tags": "potato tuber rootbundle"
		   },
		   {
				"title": "Stewed Beef and Potatoes",
				"link": "https://www.flickr.com/photos/photomiyako/21552490366/",
				"media": {"m":"https://farm1.staticflickr.com/747/21552490366_8b7bf90351_m.jpg"},
				"date_taken": "2015-09-20T23:19:49-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/photomiyako/\">photomiyako<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/photomiyako/21552490366/\" title=\"Stewed Beef and Potatoes\"><img src=\"https://farm1.staticflickr.com/747/21552490366_8b7bf90351_m.jpg\" width=\"240\" height=\"160\" alt=\"Stewed Beef and Potatoes\" /><\/a><\/p> ",
				"published": "2015-09-20T21:38:11Z",
				"author": "nobody@flickr.com (photomiyako)",
				"author_id": "94394434@N03",
				"tags": "food cuisine japanese rice beef potato nikujaga washoku konjac"
		   },
		   {
				"title": "Potato fields 03",
				"link": "https://www.flickr.com/photos/michaelclarke/21542119696/",
				"media": {"m":"https://farm6.staticflickr.com/5686/21542119696_9d01430330_m.jpg"},
				"date_taken": "2015-09-17T15:12:39-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/michaelclarke/\">michael clarke stuff<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/michaelclarke/21542119696/\" title=\"Potato fields 03\"><img src=\"https://farm6.staticflickr.com/5686/21542119696_9d01430330_m.jpg\" width=\"240\" height=\"140\" alt=\"Potato fields 03\" /><\/a><\/p> ",
				"published": "2015-09-20T13:50:21Z",
				"author": "nobody@flickr.com (michael clarke stuff)",
				"author_id": "19646736@N00",
				"tags": "wales potato fields pembrokeshire pembrokeshirecoastalpath"
		   },
		   {
				"title": "G0037720",
				"link": "https://www.flickr.com/photos/dowehaveto/21535486106/",
				"media": {"m":"https://farm1.staticflickr.com/671/21535486106_79e58ea2dd_m.jpg"},
				"date_taken": "2015-09-19T08:06:58-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/dowehaveto/\">DoWeHaveTo<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/dowehaveto/21535486106/\" title=\"G0037720\"><img src=\"https://farm1.staticflickr.com/671/21535486106_79e58ea2dd_m.jpg\" width=\"240\" height=\"239\" alt=\"G0037720\" /><\/a><\/p> <p>DCIM\\106GOPRO\\G0037720.<\/p>",
				"published": "2015-09-20T08:09:26Z",
				"author": "nobody@flickr.com (DoWeHaveTo)",
				"author_id": "126330905@N06",
				"tags": "rock hiking potato chip youandme mtwoodson"
		   },
		   {
				"title": "Potato Bacon Feta Br",
				"link": "https://www.flickr.com/photos/117506066@N06/21374227649/",
				"media": {"m":"https://farm1.staticflickr.com/711/21374227649_b344d5ace5_m.jpg"},
				"date_taken": "2014-09-01T19:07:13-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/117506066@N06/\">preciouskidsgreatparents<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/117506066@N06/21374227649/\" title=\"Potato Bacon Feta Br\"><img src=\"https://farm1.staticflickr.com/711/21374227649_b344d5ace5_m.jpg\" width=\"236\" height=\"157\" alt=\"Potato Bacon Feta Br\" /><\/a><\/p> <p>from Precious Kids Great Parents <a href=\"http://ift.tt/1Ku6sD5\" rel=\"nofollow\">ift.tt/1Ku6sD5<\/a><\/p>",
				"published": "2015-09-20T07:33:41Z",
				"author": "nobody@flickr.com (preciouskidsgreatparents)",
				"author_id": "117506066@N06",
				"tags": "kids parents bacon paradise br outdoor furniture great potato precious wicker feta"
		   },
		   {
				"title": "Big Bad Breakfast, Birmingham AL",
				"link": "https://www.flickr.com/photos/deepfriedkudzu/21556599705/",
				"media": {"m":"https://farm1.staticflickr.com/721/21556599705_b36a295e96_m.jpg"},
				"date_taken": "2014-07-14T12:08:08-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/deepfriedkudzu/\">Deep Fried Kudzu<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/deepfriedkudzu/21556599705/\" title=\"Big Bad Breakfast, Birmingham AL\"><img src=\"https://farm1.staticflickr.com/721/21556599705_b36a295e96_m.jpg\" width=\"240\" height=\"180\" alt=\"Big Bad Breakfast, Birmingham AL\" /><\/a><\/p> ",
				"published": "2015-09-20T03:26:45Z",
				"author": "nobody@flickr.com (Deep Fried Kudzu)",
				"author_id": "94858257@N00",
				"tags": "chicken breakfast salad big birmingham alabama bad potato fried"
		   },
		   {
				"title": "NS 6404, Stiens, February 1992",
				"link": "https://www.flickr.com/photos/derquinho/21554012871/",
				"media": {"m":"https://farm6.staticflickr.com/5692/21554012871_5153a1b4c9_m.jpg"},
				"date_taken": "1992-02-01T00:00:00-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/derquinho/\">Derquinho<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/derquinho/21554012871/\" title=\"NS 6404, Stiens, February 1992\"><img src=\"https://farm6.staticflickr.com/5692/21554012871_5153a1b4c9_m.jpg\" width=\"240\" height=\"154\" alt=\"NS 6404, Stiens, February 1992\" /><\/a><\/p> <p>In the ninetees during the winter months there was freight traffic (potatoes) on the remaining part of the former Noord-Friesche Locaal-Spoorwegmaatschappij (&quot;North Friesland Local Railway company&quot;, NFLS). The railway lines from Leeuwarden via Stiens to Dokkum and Metslawier and via Stiens and Tzummarum to Franeker Halte and Harlingen opened between 1900 and 1904, and were closed for passenger traffic between 1933 and 1940. Freight traffic lasted longer on some parts of the network. Last train between Leeuwarden and Stiens ran in 1995 and the line was removed in 2011.<br /> On the right in the background you can see the former station building of Stiens.<\/p>",
				"published": "2015-09-19T18:17:22Z",
				"author": "nobody@flickr.com (Derquinho)",
				"author_id": "42267143@N07",
				"tags": "train ns cargo potato aardappel 6400 6404 stiens nfls interfrigo aardappeltrein"
		   },
		   {
				"title": "NS 6428, Franeker, February 1992",
				"link": "https://www.flickr.com/photos/derquinho/21518825016/",
				"media": {"m":"https://farm1.staticflickr.com/781/21518825016_9dd9ecc74f_m.jpg"},
				"date_taken": "1992-02-01T00:00:00-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/derquinho/\">Derquinho<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/derquinho/21518825016/\" title=\"NS 6428, Franeker, February 1992\"><img src=\"https://farm1.staticflickr.com/781/21518825016_9dd9ecc74f_m.jpg\" width=\"240\" height=\"154\" alt=\"NS 6428, Franeker, February 1992\" /><\/a><\/p> <p>Arrival at Franeker of the combined freight train for Franeker and Harlingen. The Interfrigo wagons and containers would be loaded with potatoes (only in the winter months), the last wagon was for the VAM waste station in Harlingen. Freight traffic on the line Leeuwarden - Harlingen ended in 1996. The last freight train in the Friesland province ran in 2011....<\/p>",
				"published": "2015-09-19T17:52:03Z",
				"author": "nobody@flickr.com (Derquinho)",
				"author_id": "42267143@N07",
				"tags": "train ns cargo potato vam harlingen 6400 franeker 6428 interfrigo aardappelvervoer aardappeltrein"
		   },
		   {
				"title": "Watermelon, Peas, ad Potato Cakes",
				"link": "https://www.flickr.com/photos/dobie256/21553584591/",
				"media": {"m":"https://farm1.staticflickr.com/698/21553584591_a2f2ef231c_m.jpg"},
				"date_taken": "2015-09-07T18:07:40-08:00",
				"description": " <p><a href=\"https://www.flickr.com/people/dobie256/\">dobie256<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/dobie256/21553584591/\" title=\"Watermelon, Peas, ad Potato Cakes\"><img src=\"https://farm1.staticflickr.com/698/21553584591_a2f2ef231c_m.jpg\" width=\"240\" height=\"180\" alt=\"Watermelon, Peas, ad Potato Cakes\" /><\/a><\/p> <p>A late summer\'s dinner from my garden. My peas did well this year (both spring and fall plantings). There was only one good watermelon but it was delicious! And I have about 2 dozen of these little potato cakes in my freezer. <br /> <br /> September 2015<\/p>",
				"published": "2015-09-19T17:47:40Z",
				"author": "nobody@flickr.com (dobie256)",
				"author_id": "53169372@N07",
				"tags": "vegetables garden harvest watermelon potato peas 2015"
		   }
	    ]
	console.log($scope.items);
}]);


app.controller('DetailController', ['$scope', '$http', function($scope, $http){
	$scope.val = 15;
}]);

