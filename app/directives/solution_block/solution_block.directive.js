;(function () {

    'use strict';

    angular
        .module('app.solution', [])
        .directive('solutionBlock', solutionBlock);

    solutionBlock.$inject = [];

    function solutionBlock() {
        return {
            bindToController: true,
            controller: 'SolutionBlockController',
            controllerAs: 'vm',
            templateUrl: 'directives/solution_block/solution_block.html',
            link: link,
            restrict: 'AE',
            scope: {
                model: '='
            }
        };


        function link(scope, element, attrs) {

        }
    }
})();