Router= Backbone.Router.extend({

	initialize: function () {
		alert('라우터 인잇');
	},

	routes: {
		'a': 'index',
		'a/:id': 'show',
		'a/:id/*action': 'param'
	},

	index: function () {
		alert('모든 A');
	},

	show: function (id) {
		alert('A의 '+ id+'번');
	},

	param: function (id, action){
		alert( 'A의'+id+'번 '+action);
	}
});

var router = new Router();
Backbone.history.start();