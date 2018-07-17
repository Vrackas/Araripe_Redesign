;(function () {

    'use strict';

    angular
        .module('app')
        .controller('HeaderBlockController', HeaderBlockController);

    HeaderBlockController.$inject = ['$state', '$timeout', '$translate'];

    function HeaderBlockController($state, $timeout, $translate) {
        let vm = this;

        vm.contentActive = false;

        vm.langOpen = langOpen;
        vm.headerWrapperOpen = headerWrapperOpen;
        vm.headerWrapperClose = headerWrapperClose;
        vm.redirect = redirect;
        vm.changeLang = changeLang;
        vm.getStarted = getStarted;

        function langOpen(style) {
            console.log($(style));
            $(style).addClass('active');

            $(document).mouseup(function (e) {
                let container = $(style);
                if (container.has(e.target).length === 0){
                    container.removeClass('active');
                }
            });
        }


        function headerWrapperOpen() {
            $('.header_wrapper').addClass('active');
            $(document).mouseup(function (e) {
                let container = $('.header_wrapper');
                if (container.has(e.target).length === 0){
                    container.removeClass('active');
                }
            });
        }
        function headerWrapperClose() {
            $('.header_wrapper').removeClass('active');
        }


        function redirect(link){
            console.log(String(link));
            $state.go(String(link))

        }

        function changeLang(lang) {
            $translate.use(lang);
        }

        function getStarted() {
            location.href = 'https://www.desk.iscopay.com/';

        }

        $(document).ready(function () {
            $(window).scroll(function () {
                let wScroll = $(this).scrollTop();

                if (wScroll > $('#section').offset().top + 50) {
                    console.log("hi")
                    $('#header_site').css({
                        'background': 'rgba(0, 0, 0, 0.48)',
                        'transition': '.8s'
                    })
                }
                else if (wScroll > $('#section').offset().top - 60) {
                    $('#header_site').css({
                        'background': 'transparent',
                        'transition': '.8s'
                    })
                }

            })
        })
    }
})();
