const BACKEND_URL = process.env.BACKEND_URL || 'localhost';
const BACKEND_PORT = process.env.BACKEND_PORT || '31234';

const PROXY_CONFIG = {
   '/api.stlouisfed.org/*': {
        target: 'https://api.stlouisfed.org',
        secure: true,
        pathRewrite: {
            '^/api.stlouisfed.org': ''
        },
        changeOrigin: true,
        logLevel: 'debug'
    },
    '/api/*': {
        target: `http://${BACKEND_URL}:${BACKEND_PORT}`,
        secure: true,
        pathRewrite: {
            '^/api/desktop': '/desktop',
            '^/api/mobile': '/mobile'
        },
        changeOrigin: true,
        logLevel: 'debug'
    }
};


module.exports = PROXY_CONFIG;