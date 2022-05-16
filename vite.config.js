

//代理服务器
module.exports = {
    proxy: {
        '/api': {
            target: 'https://pvp.qq.com/', // 代理的域名
            changeOrigin: true,//配置允许跨域
            rewrite: path => path.replace(/^\/api/, '')//重写api
        }
    }
}