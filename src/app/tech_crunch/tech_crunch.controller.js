//HuffingtonPostCtrl

'use strict';

angular.module('agy')
    .controller('TechCrunchCtrl', ['$scope', 'RSS', function ($scope, RSS) {
        RSS.getFeed('TechCrunch', function(data){
            $scope.rss = data;
        });
    }])
    .filter('unsafe', function($sce){
        return function(val){
            return $sce.trustAsHtml(val);
        };
    });