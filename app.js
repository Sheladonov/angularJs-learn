
(function () {
    angular.module('inputApp', [])
        .controller('inputController', inputController);
    inputController.$inject = ['$scope'];
    function inputController($scope) {
        $scope.name = 'hallo';

    }
})();
