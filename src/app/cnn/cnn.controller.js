'use strict';

angular.module('agy')
    .controller('CNNCtrl', ['$scope', 'RSS', function ($scope, RSS) {
        RSS.getFeed('CNN', function(data){
            $scope.rss = data;
        });
    }])
    .filter('unsafe', function($sce){
        return function(val){
            return $sce.trustAsHtml(val);
        };
    });