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
    const config  =exports= {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1586172996609_2814';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };
    // mysql配置
    config.mysql = {
        // database configuration
        client: {
            // host
            host: 'localhost',
            // port
            port: '3306',
            // username
            user: 'root',
            // password
            password: 'zyj5632403',           
 		// database
            database: 'react_blog',
        },
        // load into app, default is open
        app: true,
        // load into agent, default is close
        agent: false,
    };
    config.security = {
        csrf: {
            enable: false
        }
    };
config.cors = {
  credentials: true,
  origin: ctx => ctx.get('origin'),
}

    return {
        ...config,
        ...userConfig,
    };
};
