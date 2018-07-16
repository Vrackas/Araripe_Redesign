;(function () {

    'use strict';

    angular
        .module('app.contact', [])
        .directive('contactForm', contactForm);

    contactForm.$inject = [];

    function contactForm() {
        return {
            bindToController: true,
            controller: 'ContactFormController',
            controllerAs: 'vm',
            templateUrl: 'directives/contact_form/contact_form.html',
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