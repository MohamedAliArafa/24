var app = angular.module('app', ['ionic', 'app.controller', 'app.service']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
            .state('index', {
                url: '/',
                templateUrl: 'index.html',
                controller: 'IndexCtrl'
            })

            .state('app.share', {
                url: "/share",
                views: {
                    'menuContent': {
                        templateUrl: "templates/share.html",
                        controller: 'shareCtrl'
                    }
                }
            })

            .state('splash', {
                url: '/splash',
                templateUrl: 'Splash.html',
                controller: 'MyController'
            });

    $urlRouterProvider.otherwise("/");

});

app.filter('unsafe', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
});
