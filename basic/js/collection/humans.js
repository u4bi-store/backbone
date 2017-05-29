Humans = Backbone.Collection.extend({

	initialize: function () {
		
		this.view = new HumanMainView({ collection: this });
		
		console.log('view init');

	},

	model: Human
});