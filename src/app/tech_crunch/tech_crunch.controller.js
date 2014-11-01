//HuffingtonPostCtrl

'use strict';

angular.module('agy')
    .controller('TechCrunchCtrl', ['$scope', 'RSS',
        function ($scope, RSS) {
            var name = 'TechCrunch';

            function addToScope(data) {
                $scope.rss = data;
            }

            RSS.getFeed(name, addToScope);

            $scope.updateRSS = function () {
                RSS.update(name, addToScope);
            }
        }
    ])
    .filter('unsafe', function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    });