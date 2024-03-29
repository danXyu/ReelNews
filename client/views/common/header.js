// Create a helper function to be called to set routes to respective-active states
Template.header.helpers({
	activeRouteClass: function(/* route names */) {
		var args = Array.prototype.slice.call(arguments, 0);
		args.pop();
		
		var active = _.any(args, function(name) {
			return Router.current().route.name === name
		});
		
		return active && 'active';
	}
});