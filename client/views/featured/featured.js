var api_key = 'AAA7C2EE6B5EF232B5BB26246E6B93A9:18:68526060';
var popularUrl = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.jsonp?api-key='+api_key;

// Declare the featuredList array var here, use to capture the array of results
var featuredList;

// Performing the ajax call to grab mostviewed articles from NYTimes api
$.ajax({
	data: '{}',
	url: popularUrl,
	type: 'GET',
	dataType: 'jsonp',
	// Callback function, upon success, return the articles array
	success: function(response) {
		featuredList = response.results;
		Session.set('featuredList', featuredList);
	}
});

Template.featured.helpers({
	featuredList: function () {
		return Session.get('featuredList');
	}
});
