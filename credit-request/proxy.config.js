const PROXY_CONFIG = [
  {
    context: ['/cars'],
    target: "http://localhost:3000",
    secure: false,
    loglevel: 'debug',
    changeOrigin: true,
    //pathRewrite: { 'ˆ/cars': 'car' }
  }
];

module.exports = PROXY_CONFIG;
