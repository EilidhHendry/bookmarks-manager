"use strict";

var bookmarkApp = angular.module("bookmarkApp", ["ngMaterial", "templates"],
    ["$interpolateProvider", function ($interpolateProvider) {
        $interpolateProvider.startSymbol("{[{");
        $interpolateProvider.endSymbol("}]}");
    }]
)

.controller("AppController", ["$scope", "$http", function ($scope, $http) {
        $scope.bookmarks = [];
        return $http.get("api/bookmarks").then(function (response) {
            return angular.forEach(response.data, function (item) {
                return $scope.bookmarks.push(item);
            });
        });
    }
])

.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = "csrftoken";
    $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";
}]);
