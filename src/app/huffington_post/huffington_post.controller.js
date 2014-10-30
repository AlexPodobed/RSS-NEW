//HuffingtonPostCtrl

'use strict';

angular.module('agy')
    .controller('HuffingtonPostCtrl', ['$scope', 'RSS', function ($scope, RSS) {
        RSS.getFeed('Huffington Post', function(data){
            $scope.rss = data;
        });
    }])
    .filter('unsafe', function($sce){
        return function(val){
            return $sce.trustAsHtml(val);
        };
    });