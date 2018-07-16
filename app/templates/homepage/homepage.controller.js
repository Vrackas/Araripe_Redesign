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
                text: "homepage_proactive_item1"
            },
            {
                text: "homepage_proactive_item2"
            },
            {
                text: "homepage_proactive_item3"
            },
            {
                text: "homepage_proactive_item4"
            },
            {
                text: "homepage_proactive_item5"
            },
            {
                text: "homepage_proactive_item6"
            },
            {
                text: "homepage_proactive_item7"
            },
            {
                text: "homepage_proactive_item8"
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