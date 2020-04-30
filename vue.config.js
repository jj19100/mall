module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // 配置别名，默认@为src目录
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}