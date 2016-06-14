angular.module("bookmarkApp")

.directive("addbookmark", function () {
    return {
        templateUrl: "add_bookmark/add_bookmark.html",
    };
})

.controller("AddBookmarkController", ["$scope", "BookmarkService", function ($scope, BookmarkService) {
    console.log($scope.newBookmark);
    var newBookmark = this.newBookmark;
    this.save = function() {
        BookmarkService.save(newBookmark);
        console.log(newBookmark);
    }
}]);
