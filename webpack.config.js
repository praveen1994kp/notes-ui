const buildValidations = require('./build_utils/build-validations')
const commonConfig = require('./build_utils/webpack.common')

const webpackMerge = require('webpack-merge')

module.exports = env => {
    if (!env) {
        throw new Error(buildValidations.ERR_NO_ENV_FLAG);
    }

    const envConfig = require(`./build_utils/webpack.${env.env}.js`)
    const mergedConfig = webpackMerge(
        commonConfig,
        envConfig
    );

    return mergedConfig;
};