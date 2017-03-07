app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'Top Books';
    $scope.promo = 'Different Topics - Similar Effect';
    $scope.products = [
    {
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014', '03', '08'),
        cover: 'https://images-na.ssl-images-amazon.com/images/I/61osjuNVvWL._SY344_BO1,204,203,200_.jpg',
        likes: 0,
        dislikes: 0
    },
    {
        name: 'Program or be Programmed',
        price: 8,
        pubdate: new Date('2013', '08', '01'),
        cover: 'https://cdn.shopify.com/s/files/1/0033/0602/products/programorbeprogrammedrushkoff_1600_large.jpg?v=1471013928',
        likes: 0,
        dislikes: 0
    },
     {
         name: 'An Open Heart',
         price: 14.99,
         pubdate: new Date('2010', '12', '3'),
         cover: 'https://michaeljeffreys.files.wordpress.com/2011/09/dalai-lama-open-heart.jpg',
         likes: 0,
         dislikes: 0
     },
     {
         name: 'How To Think Like A Programmer',
         price: 5,
         pubdate: new Date('2008', '04', '25'),
         cover: 'http://intuitowebdesign.com/images/barney-board-books_69693120.jpg',
         likes: 0,
         dislikes: 0
     }
    ];
    $scope.plusOne = function (index) {
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function (index) {
        $scope.products[index].dislikes += 1;
    };
}]);