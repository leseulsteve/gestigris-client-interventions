'use strict';

angular.module('users').factory('User',
  function (Schema, $window) {

    var User = new Schema('user');

    User.prototype.toString = function () {
      return this.getFullName();
    };

    User.prototype.getFullName = function () {
      return this.prenom + ' ' + this.nomFamille;
    };

    User.prototype.getTitle = function () {
      return this.title;
    };

    User.prototype.hasCar = function () {
      return this.voiture;
    };

    User.prototype.getLastVisit = function () {
      var lastVisit = $window.localStorage.getItem('lastVisit');
      return lastVisit ? new Date(lastVisit) : undefined;
    };

    User.prototype.equals = function (user) {
      return user.pseudo === this.pseudo;
    };

    return User;

  });
