var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  this.product = menu;
});
app.controller('ReviewController',function(){
  this.review = {};
  this.addReview = function(product){
    product.reviews.push(this.review);
  } ;
});
var menu =[
  {
  name: 'Burger',
  price: 2.95,
  desc: 'Crispy chicken',
  stock: true,
  soldout: false,
  image: "https://goo.gl/images/ea1Azi",
  reviews:[
  {
      star:4,
      name:'Michelle',
      body:'Awesome taste',
      contact:'michelle@gmail.com'
    },
    {
      star:1,
      name:'Kevin',
      body:'Not so delicious',
      contact:'kevin@co.in'
    }]
  },
{
  name: 'Pizza',
  price: 3.00,
  desc: 'Cheese slice',
  stock: true,
  soldout: false,
  image: "https://goo.gl/images/O8lJC3"
}
];