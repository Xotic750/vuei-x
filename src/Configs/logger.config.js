/*
 * For catching logs early, first thing loaded
 * https://www.npmjs.com/package/babel-plugin-js-logger#be-aware
 */

import Logger from 'js-logger';
import isProduction from 'Utils/isProduction';

Logger.useDefaults({
  defaultLevel: isProduction ? Logger.WARN : Logger.DEBUG,
  formatter(messages, context) {
    messages.unshift(`${context.name}:`);
  },
});
