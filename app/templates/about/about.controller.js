;(function () {
    'use strict';

    angular.module('app')
        .controller('AboutController', AboutController);


    AboutController.$inject = [];

    function AboutController() {
        var vm = this;
        vm.values = [
            {
                image:'content/img/about/1 (1).svg',
                title:'about_map_value_item1_title',
                text:'about_map_value_item1_subtitle'
            },
            {
                image:'content/img/about/2 (1).svg',
                title:'about_map_value_item2_title',
                text:'about_map_value_item2_subtitle'
            },
            {
                image:'content/img/about/3 (1).svg',
                title:'about_map_value_item3_title',
                text:'about_map_value_item3_subtitle'
            },
            {
                image:'content/img/about/4 (1).svg',
                title:'about_map_value_item4_title',
                text:'about_map_value_item4_subtitle'
            }
        ]

    }
})();

