const commonConfig = require('./common.js')

const hotModuleScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
const NodemonPlugin = require('nodemon-webpack-plugin');
const common = require('./common.js');

commonConfig.plugins.push(new NodemonPlugin());

commonConfig.devtool = "inline-source-map"
module.exports = commonConfig;