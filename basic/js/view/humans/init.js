HumanInitView = Backbone.View.extend({

   render: function () {
       
        console.log('init render() 함수 호출');

		this.model.set({ /* 넘어온 데이터 변경 */
			name  : 'u4bi',
			age   : 15,
			admin : true
		});


        console.log(this.model);

		humans.add(this.model); /* 컬렉션에 추가 */

   }

});