define(["react"], function(React) {
	
	return new React.createClass({
		displayName: "Header",
		render: function() {
			
			return React.createElement("nav",
				{ className: "navbar navbar-default" }, 
				React.DOM.div(
					{ className: "container-fluid" },
					React.DOM.div(
						{ className: "navbar-header" },
						React.DOM.a({ className: "navbar-brand", href: "#" }, "CuriousMe")
					)
				)
			);
						
		}
	});
	
});