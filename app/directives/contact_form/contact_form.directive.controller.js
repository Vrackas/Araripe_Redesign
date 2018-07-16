;(function () {

    'use strict';

    angular
        .module('app')
        .controller('ContactFormController', ContactFormController);

    ContactFormController.$inject = ['$state'];

    function ContactFormController($state) {
        var vm = this;
        vm.sendContact = sendContact;

        function sendContact(form) {
            console.log(form);

        }


    }
})();
