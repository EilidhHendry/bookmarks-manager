angular.module("bookmarkApp")

.factory('BookmarkService', ["$http", function ($http) {
    var api_url = "/api/bookmarks/";

    var bookmark_object = {}
    bookmark_object.items = [];

    bookmark_object.list_bookmarks = function () {
        $http.get(api_url).then(function(response) {
            angular.copy(response.data, bookmark_object.items);
        });
    };

    bookmark_object.add_bookmark = function(bookmark) {
        bookmark_object.items.push({name: bookmark.name, url: bookmark.url});
        $http.post(api_url, bookmark);
    }

    return bookmark_object;
}]);
