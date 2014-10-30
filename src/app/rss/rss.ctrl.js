'use strict';


angular.module('agy')
    .controller('RSSCtrl', ['$scope', 'RSS', '$stateParams', function ($scope, RSS, $stateParams) {

        $scope.feed = RSS.fetch("http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=JSON_CALLBACK&q=http://rss.cnn.com/rss/cnn_topstories.rss")
            .success(function(data){
                console.log(data)
            });
        console.log('rss page')
    }])
    .controller('RSSDetailCtrl', ['$scope', 'RSS', '$stateParams', function ($scope, RSS, $stateParams) {
        console.log($stateParams)

        console.log('rss detail')
    }]);