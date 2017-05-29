HumanMainView = Backbone.View.extend({

	template: _.template($('#humans-main-template').html()),

	render: function () {
		
		console.log('main render() 함수 호출');
        
		this.$el.html(this.template({humans: this.collection.toJSON() }));

		return this.el;
	}
});