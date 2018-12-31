const postcssHTML = require('postcss-html');
const postcssURL = require('postcss-url');
const postcssSafe = require('postcss-safe-parser');
const postcssAutoprefixer = require('autoprefixer');
const postcssNano = require('cssnano');
const utils = require('./Libs/utils');

const plugins = [postcssHTML, postcssURL, postcssSafe, postcssAutoprefixer];

if (utils.IS_PRODUCTION) {
  plugins.unshift(postcssNano);
}

module.exports = {
  plugins,
};
