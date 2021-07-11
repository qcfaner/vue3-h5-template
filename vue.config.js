const path = require("path")

module.exports = {
    chainWebpack(config) {
        // set svg-sprite-loader
        config.module.rule('svg').exclude.add(path.resolve('src/assets/svgs')).end()
        config.module.rule('icons').test(/\.svg$/).include.add(path.resolve('src/assets/svgs')).end().use('svg-sprite-loader').loader('svg-sprite-loader').options({
            symbolId: 'icon-[name]'
        }).end()
    }
}