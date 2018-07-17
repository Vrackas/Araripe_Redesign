;(function () {
    'use strict';

    angular.module('app')
        .controller('HomepageController', HomepageController);


    HomepageController.$inject = [];

    function HomepageController() {
        var vm = this;


        vm.proactiveAnim = proactiveAnim;
        vm.proactiveAnimOff = proactiveAnimOff;

        vm.proactive = [
            {
                text: "homepage_proactive_item1",
                link: 'content/img/proactive/item_1.png'
            },
            {
                text: "homepage_proactive_item2",
                link: 'content/img/proactive/item_2.png'
            },
            {
                text: "homepage_proactive_item3",
                link: 'content/img/proactive/item_3.png'
            },
            {
                text: "homepage_proactive_item4",
                link: 'content/img/proactive/item_4.png'
            },
            {
                text: "homepage_proactive_item5",
                link: 'content/img/proactive/item_5.png'
            },
            {
                text: "homepage_proactive_item6",
                link: 'content/img/proactive/item_6.png'
            },
            {
                text: "homepage_proactive_item7",
                link: 'content/img/proactive/item_7.png'
            },
            {
                text: "homepage_proactive_item8",
                link: 'content/img/proactive/item_8.png'
            }
        ];


        function proactiveAnim(index) {
            for (var i = index - 1; i > -1; i--) {
                $(String('.proactive_' + i + '')).css({
                    'opacity': '0.2',
                    'margin-bottom': '50px'
                })
            }
        }

        function proactiveAnimOff(index) {
            for (var i = index - 1; i > -1; i--) {
                $(String('.proactive_' + i + '')).css({
                    'opacity': '1',
                    'margin-bottom': '20px'
                })
            }

        }
    }
})();