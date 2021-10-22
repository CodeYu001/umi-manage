/*
 * @Author: jiaoyang.wang
 * @LastEditors: jiaoyang.wang
 * @Description: 生产配置
 */
import { chainWebpackDev } from './dev';

const CompressionPlugin = require('compression-webpack-plugin');

const prodGzipList = ['js', 'css'];

export const chainWebpackPro = (config: any) => {
  config.plugin('compression-webpack-plugin').use(
    new CompressionPlugin({
      // filename: 文件名称，不设置，保持和未压缩的文件同一个名称
      algorithm: 'gzip', // 指定生成gzip格式
      test: new RegExp(`\\.(${prodGzipList.join('|')})$`), // 匹配哪些格式文件需要压缩
      threshold: 10240, // 对超过10k的数据进行压缩
      minRatio: 0.8, // 压缩比例，值为0 ~ 1
    }),
  );
  return { ...chainWebpackDev(config), ...config };
};
