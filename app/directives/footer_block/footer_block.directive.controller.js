;(function () {

    'use strict';

    angular
        .module('app')
        .controller('FooterBlockController', FooterBlockController);

    FooterBlockController.$inject = ['$state'];

    function FooterBlockController($state) {
        let vm = this;

        vm.privacyOpen=privacyOpen;

        function privacyOpen(){
            var lang = navigator.language;
            if (lang.indexOf('ru') !== -1 || lang.indexOf('kz') !== -1) {
                location.href = "content/pdf/privacy_ru.pdf";
            }
            else {
                location.href = "content/pdf/privacy_eu.pdf";
            }
        }

    }
})();
