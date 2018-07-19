;(function () {
    'use strict';

    angular.module('app')
        .controller('TechnologyController', TechnologyController);


    TechnologyController.$inject = [];

    function TechnologyController() {
        var vm = this;


        vm.tech = [
            {
                title: 'technology_main_item1_title',
                link: 'content/img/technology/t1.svg',
                text: 'technology_main_item1_text'
            },
            {
                title: 'technology_main_item2_title',
                link: 'content/img/technology/t2.svg',
                text: 'technology_main_item2_text'
            },
            {
                title: 'technology_main_item3_title',
                link: 'content/img/technology/Wide_range.svg',
                text: 'technology_main_item3_text'
            },
            {
                title: 'technology_main_item4_title',
                link: 'content/img/technology/t4.svg',
                text: 'technology_main_item1_text'
            }
        ];
        vm.features = [
            {
                link: 'content/img/technology/1.png',
                title: 'technology_list_item1_title',
                text: 'technology_list_item1_text'
            },
            {
                link: 'content/img/technology/2.png',
                title: 'technology_list_item2_title',
                text: 'technology_list_item2_text'
            },
            {
                link: 'content/img/technology/3.png',
                title: 'technology_list_item3_title',
                text: 'technology_list_item3_text'
            },
            {
                link: 'content/img/technology/4.png',
                title: 'technology_list_item4_title',
                text: 'technology_list_item4_text'
            },
            {
                link: 'content/img/technology/5.png',
                title: 'technology_list_item5_title',
                text: 'technology_list_item5_text'
            },
            {
                link: 'content/img/technology/6.png',
                title: 'technology_list_item6_title',
                text: 'technology_list_item6_text'
            },
            {
                link: 'content/img/technology/7.png',
                title: 'technology_list_item7_title',
                text: 'technology_list_item7_text'
            },
            {
                link: 'content/img/technology/8.png',
                title: 'technology_list_item8_title',
                text: 'technology_list_item8_text'
            },
            {
                link: 'content/img/technology/9.png',
                title: 'technology_list_item9_title',
                text: 'technology_list_item9_text'
            },
            {
                link: 'content/img/technology/10.png',
                title: 'technology_list_item10_title',
                text: 'technology_list_item10_text'
            },
            {
                link: 'content/img/technology/11.png',
                title: 'technology_list_item11_title',
                text: 'technology_list_item11_text'
            }

        ];

        $(document).ready(function () {

            // accordion effect

            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }

        });
    }
})();