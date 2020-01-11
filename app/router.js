'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.base.base);
  router.get('/base/url', app.jsonp({ callback: 'fn' }), controller.base.url);
};