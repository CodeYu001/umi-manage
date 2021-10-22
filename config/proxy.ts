export default {
  '/api': {
    target: '',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  },
};
