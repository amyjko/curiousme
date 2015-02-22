define(["react", "lodash"], function(React, _) {
	
	return new React.createClass({
		displayName: "TopQuestions",
		render: function() {

			var questions = [
				{ questionid: 1, text: "How do windmills generate electricity?" },
				{ questionid: 2, text: "How does Snapchat prevent my friends from saving photos I send?" },
				{ questionid: 3, text: "Why is my smartphone’s screen so resistant to breaking?" },
				{ questionid: 4, text: "How does Google Maps know where I am?" },
				{ questionid: 5, text: "How does my phone know when it’s battery is about to die?" },
				{ questionid: 6, text: "How does Facebook decide which advertisements to show me?" },
				{ questionid: 7, text: "How does my phone know what time it is?" },
				{ questionid: 8, text: "Why do pictures I take in the dark look so grainy?" },
				{ questionid: 9, text: "Why do my eyes hurt after staring at my smartphone for too long?" },
				{ questionid: 10, text: "Why do text messages sometimes fail to send?" }
			];

			return React.DOM.div({},
				React.DOM.h2({}, "Top questions"),
				React.DOM.div({ className: "list-group" },
					_.map(questions, function(question) {
						return React.DOM.a({ 
							className: "list-group-item",
							key: question.questionid,
							href: "#"
						}, question.text);
					})
				)
			);
						
		}
	});
	
});