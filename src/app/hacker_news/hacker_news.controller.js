'use strict';

angular.module('agy')
    .controller('HackerNewsCtrl', ['$scope', 'RSS', function ($scope, RSS) {
        var name = 'Hacker News';

        function addToScope(data) {
            $scope.rss = data;
        }

        RSS.getFeed(name, addToScope);

        $scope.updateRSS = function () {
            RSS.update(name, addToScope);
        }
    }])
    .filter('unsafe', function($sce){
        return function(val){
            return $sce.trustAsHtml(val);
        };
    });