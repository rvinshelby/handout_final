var handoutApp = angular.module('handoutApp', ['firebase','ui.router','ui.bootstrap','chart.js','truncate']);
handoutApp.constant('firebase_url', 'https://handout.firebaseio.com/');
handoutApp.config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/main');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('main', {
            url: '/main',
            templateUrl: 'templates/main.html',
            controller: 'getpostsCtrl'
        })
        .state('handout', {
            url: '/handout',
            templateUrl: 'templates/handout.html',
            controller: 'handoutCtrl',
        })
        .state('post', {
            url: '/post',
            templateUrl: 'templates/post.html',
            controller: 'getpostCtrl'
        })
        .state('premium', {
            url: '/premium',
            templateUrl: 'templates/premium.html',
            controller: 'premiumCtrl'
        })
        });

handoutApp.service('$splash', [
  '$uibModal',
  '$rootScope',
  function($modal, $rootScope) {
    return {
      open: function (attrs, opts) {
        // Create a new scope so we can pass custom
        // variables into the splash modal
        var scope = $rootScope.$new();
        angular.extend(scope, attrs);
        opts = angular.extend(opts || {}, {
          backdrop: false,
          scope: scope,
          templateUrl: 'splash/content.html',
          windowTemplateUrl: 'splash/index.html'
        });
        return $modal.open(opts);
      }
    };
  }
]);

handoutApp.run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('splash/index.html',
      '<section class="splash" ng-class="{\'splash-open\': animate}" ng-style="{\'z-index\': 1000, display: \'block\'}" ng-click="close($event)">' +
      '  <div class="splash-inner" ng-transclude></div>' +
      '</section>'
    );
    $templateCache.put('splash/content.html',
      '<div class="splash-content text-center">' +
      '  <h1 ng-bind="title"></h1>' +
      '  <p class="lead" ng-bind="message"></p>' +
      '  <button class="btn btn-lg btn-outline" ng-bind="btnText || \'Ok, cool\'" ng-click="$close()"></button>' +
      '</div>'
    );
  }
]);