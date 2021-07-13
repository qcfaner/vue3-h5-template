const path = require("path")
const vantChange = path.resolve(__dirname, "./src/assets/css/vantChange.scss")

module.exports = {
    publicPath: process.env.BASE_URL,
    devServer: {
        open: false,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '^/api-dev': {
                // target: "http://172.16.0.103:8997",
                target: "http://192.168.1.100:8996",
                changeOrigin: true,
                pathRewrite: {
                    '^/api-dev': ''
                }
            },
        }
    },
    productionSourceMap: false,
    chainWebpack(config) {
        config.module.rule('vue').test(/\.vue$/).use('style-vw-loader').loader('style-vw-loader');
        // set svg-sprite-loader
        config.module.rule('svg').exclude.add(path.resolve('src/assets/svgs')).end()
        config.module.rule('icons').test(/\.svg$/).include.add(path.resolve('src/assets/svgs')).end().use('svg-sprite-loader').loader('svg-sprite-loader').options({
            symbolId: 'icon-[name]'
        }).end()
    },
    css: {
        loaderOptions: {
            less: {
                // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                lessOptions: {
                    modifyVars: {
                        // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                        hack: `true; @import "${ vantChange }";`,
                    },
                },
            },
        },
    },
}