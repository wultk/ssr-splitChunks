const path = require('path');
export default {
  treeShaking: true,
  plugins: [
    ['umi-plugin-react', {
      chunks: ['vendors', 'umi'],
      antd: true,
      dva: false,
      title: 'umi',
      dll: false,
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  hash: true,
  ssr: true,
  theme: './theme-config.js',
  routes: [
    { path: '/', component: '../../src/pages/index.js' },
    { path: '/a', component: '../../src/pages/a/index.js' },
    { path: '/b', component: '../../src/pages/b/index.js' },
  ],
  chainWebpack: function(config, { webpack }) {
    config.optimization.splitChunks({
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
        },
        commons: {
          name: 'commons',
          chunks: 'async',
          minChunks: 2,
          minSize: 0,
        },
      },
    });
  },
};
