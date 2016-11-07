angular.module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
              url: '/',
              controller: function($state) {
                $state.go('game.level', {levelId: 1});
              }
            })
            .state('game', {
              abstract: true,
              template: '<div ui-view></div>'
            })
            .state('game.level', {
              url: '/game/level/{levelId:[0-9]}',
              template: '<game></game>'
            });

        $urlRouterProvider.otherwise('/');
    });
