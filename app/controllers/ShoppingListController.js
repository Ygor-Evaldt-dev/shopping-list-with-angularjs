myApp.controller("ShoppingListController", ["$scope", "$timeout", "AlertService", function ($scope, $timeout, AlertService) {
    $scope.products = [];

    $scope.add = function (product) {
        if (!product) {
            AlertService.show('.add-new-product-error');
            return;
        }

        $scope.products.push(product);
        $scope.product = "";
    }

    $scope.remove = function (product) {
        const newItems = $scope.products.filter(item => item !== product);
        $scope.products = newItems;
    }
}]);