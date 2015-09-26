'use strict';


const commonsScriptUrl = '/js/commons.js';

/**
 * Controller for rendering views.
 */
module.exports = {
  /**
   * Render the view for the app's index.
   */
  index: function *() {
    this.body = yield this.render('index', {
      commonsScriptUrl,
      scriptUrl: '/js/vacay.js'
    });
  },

  /**
   * Render the view for the login page.
   */
  login: function *() {
    this.body = yield this.render('login', {
      commonsScriptUrl,
      scriptUrl: '/js/login.js'
    });
  },

  /**
   * Render the view for the signup page.
   */
  signup: function *() {
    this.body = yield this.render('signup', {
      commonsScriptUrl,
      scriptUrl: '/js/signup.js'
    });
  }
};
