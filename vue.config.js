module.exports = {
  configureWebpack: {
    resolve: {
      /*extensions: [],  默认已经配了.js,.css等后缀*/
      alias: {
        // '@': 'src'  默认已经有了
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
};
