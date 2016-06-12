"use strict";

var bookmarkApp = angular.module("bookmarkApp", ["ngResource", "ngMaterial", "templates"],
    ["$interpolateProvider", function ($interpolateProvider) {
        $interpolateProvider.startSymbol("{[{");
        $interpolateProvider.endSymbol("}]}");
    }]
)

.factory('Bookmark', ["$resource", function ($resource) {
    return $resource('api/bookmarks/:id', {
        id: '@id'
    });
}])

.controller("AppController", ["$scope", 'Bookmark', function($scope, Bookmark) {
    return $scope.bookmarks = Bookmark.query()
}])

.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = "csrftoken";
    $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";
}]);
