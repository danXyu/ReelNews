Template.search.helpers({
	'submit form': function(e) {
		e.preventDefault();

		var query = $(".search-query").val();
		console.log(query.val());
	} 
});