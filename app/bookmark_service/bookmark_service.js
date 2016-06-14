angular.module("bookmarkApp")

.factory('BookmarkService', ["$http", function ($http) {
    var api_url = "/api/bookmarks/";
    return {
        get: function (bookmark_id) {
            var url = api_url + bookmark_id
            return $http.get(url).then(function (response) {
                return response.data;
            })
        },
        list: function () {
            return $http.get(api_url).then(function (response) {
                return response.data
            })
        },
        save: function (data) {
            return $http.post(api_url, data).success(function (response, status, headers, config) {
            }).error(function (response, status, headers, config) {
            })
        },
        del: function (data) {
            return $http.delete(api_url + data.id);
        }
    }
}]);
