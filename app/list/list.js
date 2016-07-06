angular.module("bookmarkApp")
.directive("bookmarklist", function () {
    return {
        templateUrl: "list/list.html",
    };
})

.controller("ListController", ["BookmarkService", function (BookmarkService) {
    BookmarkService.list_bookmarks()
    this.bookmarks = BookmarkService.items;
}]);
