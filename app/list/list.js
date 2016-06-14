angular.module("bookmarkApp")
.directive("bookmarklist", function () {
    return {
        templateUrl: "list/list.html",
    };
})

.controller("ListController", ["$scope", "BookmarkService", function ($scope, BookmarkService) {
    BookmarkService.list().then(function(result){
      $scope.bookmarks = result;
    });
}]);
