Vue.filter('lower',function(s){
	return s.toLowerCase();
});

var app = new Vue({
	el:"#root",
	data:{
		newdata:'',
		link1:{title:'lol',url:'facebook.com'},
		link2:{title:'lol 2',url:'twitter.com'},
		activelink:'link1',
		lol:'<h1>Hello World</h1>',
		lo:["asd","asdasdada","asdasd"],
		payments:[
			{service:'elc',amount:23,paid:true},
			{service:'Home',amount:30,paid:true},
			{service:'Bill',amount:25,paid:false},
			{service:'Gun',amount:40,paid:false}
		]
	},
	methods:{
		add_data : function(){
			this.lo.push(this.newdata);
		},
		remove:function(i){
			this.lo.splice(i,1);
		}
	},
	computed : {
		unpaid : function(){
			return this.payments.filter(function(p){
				return !p.paid;
			});
		},
		totalAmount : function(){
			var sum = 0;
			for(var i=0;i<this.payments.length;i++){
				sum += this.payments[i].amount;
			}
			return sum;
		}
	},
	filters : {
		uper:function(s){
			return s.toUpperCase();
		}
	}
});