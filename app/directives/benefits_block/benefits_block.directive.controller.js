;(function () {

    'use strict';

    angular
        .module('app')
        .controller('BenefitsBlockController', BenefitsBlockController);

    BenefitsBlockController.$inject = ['$state'];

    function BenefitsBlockController($state) {
        var vm = this;

        vm.benefits = [
            {
                link: 'content/img/benefits/1E.svg',
                text: 'benefits_item1_text'
            },
            {
                link: 'content/img/benefits/2E.svg',
                text: 'benefits_item2_text'
            },
            {
                link: 'content/img/benefits/3E.svg',
                text: 'benefits_item3_text'
            },
            {
                link: 'content/img/benefits/4E.svg',
                text: 'benefits_item4_text'
            },
            {
                link: 'content/img/benefits/5E.svg',
                text: 'benefits_item5_text'
            },
            {
                link: 'content/img/benefits/Expert_support.svg',
                text: 'benefits_item6_text'
            },
            {
                link: 'content/img/benefits/7E.svg',
                text: 'benefits_item7_text'
            },
            {
                link: 'content/img/benefits/8E.svg',
                text: 'benefits_item8_text'
            },
            {
                link: 'content/img/benefits/3_p.svg',
                text: 'benefits_item9_text'
            }
        ]

    }
})();
