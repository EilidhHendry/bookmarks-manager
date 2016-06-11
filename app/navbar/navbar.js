angular.module("bookmarkApp")
.directive("navbar", function () {
    return {
        templateUrl: "navbar/navbar.html",
    };
})
.controller("NavbarController", ["$scope", function($scope) {
}]);
