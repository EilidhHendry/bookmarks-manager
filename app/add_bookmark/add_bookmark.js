angular.module("bookmarkApp")

.directive("addbookmark", function () {
    return {
        templateUrl: "add_bookmark/add_bookmark.html",
    };
})

.controller("AddBookmarkController", ["BookmarkService", function (BookmarkService) {
    this.save = function() {
        BookmarkService.add_bookmark(this.newBookmark);
    }
}]);
