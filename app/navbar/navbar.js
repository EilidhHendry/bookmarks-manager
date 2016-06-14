angular.module("bookmarkApp")

.directive("navbar", function () {
    return {
        templateUrl: "navbar/navbar.html",
    };
})

.controller("NavbarController", ["$scope", function($scope) {

  this.toggleSearch = function(element) {
    this.showSearch = !this.showSearch;
  };

}])

.controller("SearchController", ["$scope", function($scope) {

}]);
