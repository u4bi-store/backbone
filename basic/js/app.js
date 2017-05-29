Router= Backbone.Router.extend({

	initialize: function () {
		console.log('route init');
	},

	routes: {
		'humans': 'main'
	},
	
    showView: function (view) {
		if (this.currentView) this.currentView.remove();

		this.currentView = view;
		$('app').html(this.currentView.render()); /* <app> 태그를 기점으로 렌더링 */
	},

    main: function () {

        console.log('route main 함수');

		var human = new Human(),
			init = new HumanInitView({ model: human });
			
		init.render();
		
        this.showView(humans.view);

	}
});

var humans = new Humans(); 	/* 휴먼스 컬렉션 생성 */
var router = new Router();  /* 라우팅 생성      */

Backbone.history.start();   /* 라우팅에 대한 진행기록 시작 */
// router.navigate('humans');  /* humans를 기점으로 라우팅을 시작 */