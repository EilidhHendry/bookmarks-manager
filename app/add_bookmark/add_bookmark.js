"use strict";

angular.module("bookmarkApp")

.directive("addbookmark", function () {
    return {
        templateUrl: "add_bookmark/add_bookmark.html",
    };
})

.controller('AddBookmarkController', ['$scope', "$http",  function($scope, $http) {
    $scope.save = function () {
        $http.post('/api/bookmarks/', $scope.newBookmark).error(function(data,status,headers,config){
            console.log('COULDNT POST!');
        }).success(function(data, status, headers, config){
            console.log('POSTED!');
        });
    };
}]);
