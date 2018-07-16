;(function () {
    'use strict';

    angular.module('app')
        .controller('ContactController', ContactController);


    ContactController.$inject = [];

    function ContactController() {
        var vm = this;

        vm.items =[
            {
                title:'contact_pay_item1_title',
                contact:'merchants@araripe.com'
            },
            {
                title:'contact_pay_item2_title',
                contact:'pro@araripe.com'
            },
            {
                title:'contact_pay_item3_title',
                contact:'cards@araripe.com'
            },
            {
                title:'contact_pay_item4_title',
                contact:'partners@araripe.com'
            }
        ]
    }


})();