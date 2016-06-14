"use strict";

var bookmarkApp = angular.module("bookmarkApp", ["ngMaterial", "ngMdIcons", "templates", "angularUtils.directives.dirPagination"],
    ["$interpolateProvider", function ($interpolateProvider) {
        $interpolateProvider.startSymbol("{[{");
        $interpolateProvider.endSymbol("}]}");
    }]
)

.controller("AppController", ["$scope", "BookmarkService", function($scope, BookmarkService) {

}])

.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = "csrftoken";
    $httpProvider.defaults.headers.common['X-CSRFToken'] = '{{ csrf_token|escapejs }}';
}]);
