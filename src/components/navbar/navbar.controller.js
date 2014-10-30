'use strict';

angular.module('agy')
    .controller('NavbarCtrl', ['$scope', '$location', function ($scope, $location) {

        $scope.isActive = function (route) {
            return route === $location.path();
        };

    }])
    .filter('removeSpaces', function(){
        return function(item){
            return item.replace(/\s/g, '');
        }
    });
