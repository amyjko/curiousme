define(["react", "views/Header", "views/SearchBox", "views/TopQuestions"], function(React, Header, SearchBox, TopQuestions) {
	
	return new React.createClass({
		displayName: "App",
		render: function() {
			
			return React.DOM.div(
				{},
				React.createElement(Header),
				React.DOM.div({ className: "container" },
					React.DOM.h1({}, "What's your question?"),
					React.DOM.div({ className: "lead" }, "Type a how or why question to get started."),
					React.createElement(SearchBox),
					React.createElement(TopQuestions)
				)
			);
						
		}
	});
	
});