;(function () {
    angular.module('app',
        [
            'app.core',
            'blocks.directives',
            'blocks.request',
            'blocks.services',
            'blocks.filters',

        ])
        .run(runBlock);

    runBlock.$inject = ['$translate'];

    function runBlock($translate) {
        var lang = navigator.language;
        console.log(lang);
        // if (lang.indexOf('ru') !== -1 || lang.indexOf('kz') !== -1) {
        //     $translate.use('ru');
        // }
        // else {
        //     $translate.use('eu');
        // }
        // if($localStorage.lang !=== undefied){
        //
        // }
    }
})();
