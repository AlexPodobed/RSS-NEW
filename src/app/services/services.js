'use strict';

angular.module('agy')
    .factory('RSS', ['$http', function ($http) {
        var _API = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=JSON_CALLBACK&q=';
        var _RSS_LIST = {
            "CNN": "http://rss.cnn.com/rss/cnn_topstories.rss",
            "Hacker News": "http://news.ycombinator.com/rss",
            "Mashable": "http://feeds2.feedburner.com/Mashable",
            "Huffington Post": "http://feeds.huffingtonpost.com/huffingtonpost/raw_feed",
            "TechCrunch": "http://feeds.feedburner.com/TechCrunch",
            "RIA": "http://ria.ru/export/rss2/world/index.xml"
        };

        return {
            fetch: function (name) {
                return $http.jsonp(_API + _RSS_LIST[name]);
            },
            getFeed: function(name, callback){
                var ls = localStorage.getItem(name);
                if(ls){
                    callback(JSON.parse(ls));
                }else{
                    this.fetch(name)
                        .success(function(data){
                            var feed = data.responseData.feed;
                            localStorage.setItem(name, JSON.stringify(feed));
                            callback(feed);
                        });
                }
            }
        };
    }]);