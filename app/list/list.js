angular.module("bookmarkApp")
.directive("bookmarklist", function () {
    return {
        templateUrl: "list/list.html",
    };
})

.controller("ListController", ["$scope", "$http", function ($scope, $http) {
    $scope.bookmarks = [];
    return $http.get('/api/bookmarks/').then(function (result) {
      return angular.forEach(result.data, function (item) {
        return $scope.bookmarks.push(item);
      });
    });
}]);
