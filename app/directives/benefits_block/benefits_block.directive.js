;(function () {

    'use strict';

    angular
        .module('app.benefits', [])
        .directive('benefitsBlock', benefitsBlock);

    benefitsBlock.$inject = [];

    function benefitsBlock() {
        return {
            bindToController: true,
            controller: 'BenefitsBlockController',
            controllerAs: 'vm',
            templateUrl: 'directives/benefits_block/benefits_block.html',
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