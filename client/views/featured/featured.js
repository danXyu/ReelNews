Template.featured.helpers({
	featuredList: function () {
		var api_key = 'AAA7C2EE6B5EF232B5BB26246E6B93A9:18:68526060';
		var popularUrl = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.jsonp?api-key='+api_key;

		// Declare the featuredList array var here, use to capture the array of results
		var featuredList;

		// Performing the ajax call to grab mostviewed articles from NYTimes api
		var mvGrab = $.ajax({
			data: '{}',
			url: popularUrl,
			type: 'GET',
			dataType: 'jsonp',
			// Callback function, upon success, return the articles array
			success: function(response) {
				featuredList = response.results;
				featuredList = featuredList.slice(0,5);
				console.log(featuredList);
				return featuredList;
			}
		});
	},

	posts: function() {
		var postsData = [
		{
			title: 'Introducing Telescope',
			author: 'Sacha Greif',
			url: 'http://sachagreif.com/introducing-telescope/'
		},
		{
			title: 'Meteor',
			author: 'Tom Coleman',
			url: 'http://meteor.com'
		}, 
		{
			title: 'The Meteor Book',
			author: 'Tom Coleman',
			url: 'http://themeteorbook.com'
		}
		];

		console.log(postsData);
		return postsData;
	}
});
