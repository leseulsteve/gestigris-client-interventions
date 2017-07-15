'use strict';

angular.module('navigation').controller('SideNavController',
  function ($rootScope, UserAuth, $state) {

    var ctrl = this;

    var currentUser = UserAuth.getCurrentUser();

    if (currentUser && currentUser.isAuthentified()) {
      ctrl.showSideNav = true;
    }

    $rootScope.$on('UserAuth:signin:success', function () {
      ctrl.showSideNav = true;
    });

    ctrl.showProfil = function () {
      $state.go('profil');
    };

    ctrl.showNotifications = function () {
      $state.go('notifications');
    };

    ctrl.logout = function () {
      UserAuth.signout().then(function () {
        $state.go('login');
      });
    };

  });
