'use strict';

angular.module('agy')
    .controller('HackerNewsCtrl', ['$scope', 'RSS', function ($scope, RSS) {
        RSS.getFeed('Hacker News', function(data){
            $scope.rss = data;
        });
    }])
    .filter('unsafe', function($sce){
        return function(val){
            return $sce.trustAsHtml(val);
        };
    });