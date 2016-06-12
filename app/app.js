"use strict";

var bookmarkApp = angular.module("bookmarkApp", ["ngMaterial", "templates"],
    ["$interpolateProvider", function ($interpolateProvider) {
        $interpolateProvider.startSymbol("{[{");
        $interpolateProvider.endSymbol("}]}");
    }]
)

.controller("AppController", ["$scope", function($scope) {
}])

.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = "csrftoken";
    $httpProvider.defaults.xsrfHeaderName = "X-CSRFToken";
}]);
