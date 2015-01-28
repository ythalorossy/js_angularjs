(function() {

	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', ['$http', function($http) {
		var store = this;

		store.products = [];

		$http.get('/products.json').success(function(data){
			store.products = data;
		});

	}]);

	app.controller('PanelController', function() {
		this.tab = 1;
		this.selectTab = function(newValue) {
			this.tab = newValue;
		};
		this.isSelected = function(tabValue){
			return (this.tab === tabValue);
		};
	});

	app.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(product) {
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		} ;
	});

	var gems = [
		{
			name : "Dodecahedron",
			price : 2,
			description : 'primero pruduto....',
			canPurchase : true,
			reviews: [
				{
					stars : 5,
					body: "I love this product",
					author : "Ythalo Rossy",
					createdOn: Date.now()
				},
				{
					stars : 3,
					body: "Is good product",
					author : "Mary Ruana",
					createdOn: Date.now()
				}

			]
		},
		{
			name : "Pentagonal gems",
			price : 5.95,
			description : " . . .  segundo...  .. ",
			canPurchase : true,
			reviews : []
		}
	];
})();
