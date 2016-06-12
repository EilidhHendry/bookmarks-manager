angular.module("bookmarkApp")
.directive("bookmark-list", function () {
    return {
        templateUrl: "list.html",
    };
})

.factory('Bookmark', ["$resource", function ($resource) {
    return $resource('api/bookmarks/:id', {
        id: '@id'
    });
}])

.controller("ListController", ["$scope", 'Bookmark', function($scope, Bookmark) {
    return $scope.bookmarks = Bookmark.query()
}])
