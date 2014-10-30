'use strict';

angular.module('agy', ['ngResource', 'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('cnn', {
                url: '/cnn',
                templateUrl: 'app/cnn/cnn.html',
                controller: 'CNNCtrl'
            })
            .state('hacker_news', {
                url: '/hacker_news',
                templateUrl: 'app/hacker_news/hacker_news.html',
                controller: 'HackerNewsCtrl'
            })
            .state('huffington_post', {
                url: '/huffington_post',
                templateUrl: 'app/huffington_post/huffington_post.html',
                controller: 'HuffingtonPostCtrl'
            })
            .state('mashable', {
                url: '/mashable',
                templateUrl: 'app/mashable/mashable.html',
                controller: 'MashableCtrl'
            })
            .state('tech_crunch', {
                url: '/tech_crunch',
                templateUrl: 'app/tech_crunch/tech_crunch.html',
                controller: 'TechCrunchCtrl'
            });



        $urlRouterProvider.otherwise('/');
    })
;
