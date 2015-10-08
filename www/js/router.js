angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider/*, $routeProvider*/) {
          var provider = $stateProvider
                  .state('app', {
                    url: '',
                    abstract: true,
                    templateUrl: 'templates/menu.html',
                    controller: 'AppCtrl'
                  });

          var states = [{
              name: 'preload',
              url: '/preload',
              templateUrl: 'templates/home/preload.html',
              controller: 'preload'
            }, {
              name: 'main',
              url: '/main',
              cache: true,
              templateUrl: 'templates/home/home.html',
              controller: 'home'
            }, {
              name: 'newActivities',
              url: '/new-activities',
              cache: true,
              templateUrl: 'templates/home/home.html',
              controller: 'home'
            }, {
              name: 'login',
              url: '/login',
              templateUrl: 'templates/session/login.html',
              controller: 'session.login'
            }, {
              name: 'logout',
              url: '/logout',
              templateUrl: 'templates/session/logout.html',
              controller: 'session.logout'
            }, {
              name: 'commingSoon',
              url: '/comming-soon',
              cache: true,
              templateUrl: 'templates/coming-soon.html'
            }, {
              name: 'poling',
              url: '/poling',
              cache: true,
              templateUrl: 'templates/coming-soon.html'
            }, {
              name: 'terms',
              url: '/terms',
              cache: true,
              templateUrl: 'templates/terms.html',
              controller: 'session.terms'
            }, {
              name: 'registration',
              url: '/registration',
              templateUrl: 'templates/session/registration.html',
              controller: 'session.registration'
            }, {
              name: 'registrationStep2',
              url: '/registration-step2',
              templateUrl: 'templates/session/registration-step2.html',
              controller: 'session.registration-step2'
            }, {
              name: 'registrationStep3',
              url: '/registration-step3',
              templateUrl: 'templates/session/registration-step3.html',
              controller: 'session.registration-step3'
            }, {
              name: 'forgotPassword',
              url: '/forgot-password',
              templateUrl: 'templates/session/forgot-password.html',
              controller: 'session.forgot-password'
            }, {
              name: 'guide',
              url: '/guide',
              templateUrl: 'templates/guide/index.html',
              controller: 'guide'
            }, {
              name: 'guideConfirm',
              url: '/guide-confirm',
              templateUrl: 'templates/guide/confirm.html',
              controller: 'guide.confirm'
            }, {
              name: 'search',
              url: '/search',
              cache: true,
              templateUrl: 'templates/search/index.html',
              controller: 'search'
            }, {
              name: 'paymentPolls-paymentRequest',
              url: '/payment-polls/payment-request/:id',
              templateUrl: 'templates/payment-polls/payment-request.html',
              controller: 'question.payment-request'
            }, {
              name: 'paymentPolls-crowdfundingPaymentRequest',
              url: '/payment-polls/crowdfunding-payment-request/:id',
              templateUrl: 'templates/payment-polls/crowdfunding-payment-request.html',
              controller: 'question.payment-request'
            }, {
              name: 'petition',
              url: '/petition/:id',
              templateUrl: 'templates/petitions/petition.html',
              controller: 'petition'
            }, {
              name: 'discussion',
              url: '/discussion/:entity/:id',
              templateUrl: 'templates/question/discussion.html',
              controller: 'discussion'
            }, {
              name: 'discussionComent',
              url: '/discussion/:entity/:id/:comment',
              templateUrl: 'templates/question/discussion.html',
              controller: 'discussion'
            }, {
              name: 'question',
              url: '/questions/:id',
              templateUrl: 'templates/question/layout.html',
              controller: 'question'
            }, {
              name: 'questionNews',
              url: '/question/news/:id',
              templateUrl: 'templates/question/news.html',
              controller: 'question.news'
            }, {
              name: 'questionLeaderPetition',
              url: '/question/leader-petition/:id',
              templateUrl: 'templates/question/petition.html',
              controller: 'question.leader-petition'
            }, {
              name: 'questionLeaderEvent',
              url: '/leader-event/:id',
              templateUrl: 'templates/leader-event/leader-event.html',
              controller: 'question.leader-event'
            }, {
              name: 'questionEducational',
              url: '/questions/educational/:id',
              templateUrl: 'templates/question/educational-context.html',
              controller: 'question.educational-context'
            }, {
              name: 'questionInfluences',
              url: '/question/influences/:id',
              templateUrl: 'templates/question/influences.html',
              controller: 'question.influences'
            }, {
              name: 'influences',
              url: '/influences',
              templateUrl: 'templates/influence/influences.html',
              controller: 'influences'
            }, {
              name: 'influencesProfile',
              url: '/influence/profile/:id',
              templateUrl: 'templates/influence/profile.html',
              controller: 'influence.profile'
            }, {
            }, {
              name: 'influencesAdd',
              url: '/influences/add',
              templateUrl: 'templates/influence/search.html',
              controller: 'influences.search'
            }, {
              name: 'influencesNotification',
              url: '/influences/notifications',
              templateUrl: 'templates/influence/notifications.html',
              controller: 'influences.notifications'
            }, {
              name: 'representatives',
              url: '/representatives',
              templateUrl: 'templates/representatives/list.html',
              controller: 'representatives'
            }, {
              name: 'representativeProfile',
              url: '/representative/:id/:storageId',
              templateUrl: 'templates/representatives/profile.html',
              controller: 'representatives.profile'
            }, {
              name: 'groups',
              url: '/groups',
              templateUrl: 'templates/groups/my-groups.html',
              controller: 'groups'
            }, {
              name: 'groupsSearch',
              url: '/groups/search',
              templateUrl: 'templates/groups/search.html',
              controller: 'groups.search'
            }, {
              name: 'groupsCreate',
              url: '/groups/create',
              templateUrl: 'templates/groups/create.html',
              controller: 'groups.create'
            }, {
              name: 'groupsProfile',
              url: '/group/:id',
              templateUrl: 'templates/groups/profile.html',
              controller: 'groups.profile'
            }, {
              name: 'groupsJoin',
              url: '/group/:id/join/:publicStatus/:isFieldRequired',
              templateUrl: 'templates/groups/join.html',
              controller: 'groups.join'
            }, {
            }];

          states.forEach(function (state) {
            if (!state.name) {
              return;
            }
            var options = {cache: !!state.cache, url: state.url};
            options.views = {
              'menuContent': {
                templateUrl: state.templateUrl
              }
            };
            if (state.controller) {
              options.views.menuContent.controller = state.controller;
            }
            $stateProvider.state('app.' + state.name, options);
          });

          $urlRouterProvider.otherwise('/preload');

        });