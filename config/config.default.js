/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    jsonp: {
      enable: true,
      package: 'egg-jsonp',
    }
  };
  config.cluster = {
    listen: {
      path: '',
      port: 3002,
      hostname: '0.0.0.0',
    }
  };
  // config.security = {
  //   csrf: {
  //     enable: false
  //   },
  //   domainWhiteList: ['*'] //白名单
  // };
  config.cors = {
    origin: '*',
    credentials: true, // 允许跨域请求携带cookies
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578564067465_8799';

  config.mongoose = {
    client: {
      url: 'mongodb://cicaba:515253@cicaba.top/cicaba',
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
    },
  }
  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};