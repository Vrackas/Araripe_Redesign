;(function () {
    'use strict';

    angular.module('app')
        .controller('ECommerceController', ECommerceController);


    ECommerceController.$inject = [];

    function ECommerceController() {
        var vm = this;
        vm.solutions = [
            {
                subTitle: 'homepage_solution_item1_subtitle',
                title: 'homepage_solution_item1_title',
                link: 'merchant_account',
                text1: 'homepage_solution_item1_text',
                text2: 'ecommerce_item1_text2'
            },{
                subTitle: 'homepage_solution_item2_subtitle',
                title: 'homepage_solution_item1_title',
                link: 'merchant_acquiring',
                text1: 'homepage_solution_item1_text',
                text2: 'ecommerce_item2_text2'
            },
            // {
            //     subTitle: 'iscopay stream',
            //     title: 'Payment Processing',
            //     link: 'payment_processing',
            //     text1: 'Empower your business with our comprehensive Payment Processing Solution for issuers and acquirers.',
            //     text2: 'Optimised and adaptable payment processing solution for issuers and acquirers. Our innovative suite of services and advanced technologies offers secure end-to-end authorisation platform to help you successfully compete in today’s highly competitive financial environment. '
            // },{
            //     subTitle: 'iscopay smart',
            //     title: 'Card Issuing',
            //     link: 'card_issuing',
            //     text1: 'Expand your offering with our white-label Card Issuing Solution and launch your own card programme.',
            //     text2: 'White-label solution for branded card issuing and management. Our advanced card issuing solution provides excellent opportunities to increase market competitiveness and launch personalised card programmes quickly and efficiently.'
            // }
        ]


    }
})();