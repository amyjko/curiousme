define(["react"], function(React) {
	
	return new React.createClass({
		displayName: "SearchBox",
		render: function() {
			
			return React.createElement("div",
				{ className: "input-group" }, 
				React.DOM.input({ className: "form-control", placeholder: "How or why?", type: "text" }),
				React.DOM.span(
					{ className: "input-group-btn" },
					React.DOM.button(
						{ className: "btn btn-default", type: "button" },
						"Ask"
					)
				)
			);
						
		}
	});
	
});