/*
 * @Author: jiaoyang.wang
 * @LastEditors: jiaoyang.wang
 * @Description: 本地配置
 */
const assetDir = 'static';
export const chainWebpackDev = (config: any) => {
  config.module
    .rule('images')
    .test(/\.(png|jpe?g|gif|webp|ico)(\?.*)?$/)
    .use('url-loader')
    .loader(require.resolve('url-loader'))
    .tap((options: any) => {
      const newOptions = {
        ...options,
        name: `${assetDir}/logo/transfer/[name].[ext]`,
        fallback: {
          ...options.fallback,
          options: {
            name: `${assetDir}/logo/transfer/[name].[ext]`,
            esModule: false,
          },
        },
      };
      return newOptions;
    });

  // dayjs 替换 moment
  config.plugin('moment2dayjs').use('antd-dayjs-webpack-plugin', [
    {
      preset: 'antdv3',
    },
  ]);

  // lodash 按需打包（有坑）
  // config.plugin('loadshReplace').use('lodash-webpack-plugin');

  return config;
};
