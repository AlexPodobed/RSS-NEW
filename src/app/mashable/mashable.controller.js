//HuffingtonPostCtrl

'use strict';

angular.module('agy')
    .controller('MashableCtrl', ['$scope', 'RSS', function ($scope, RSS) {
        RSS.getFeed('Mashable', function(data){
            $scope.rss = data;
        });
    }])
    .filter('unsafe', function($sce){
        return function(val){
            return $sce.trustAsHtml(val);
        };
    });