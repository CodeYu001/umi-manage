import { defineConfig } from 'umi';

import proxy from './proxy';
import { chainWebpackPro } from './pro';
import { chainWebpackDev } from './dev';

const env = process.env.NODE_ENV;

let configParams: any = {
  nodeModulesTransform: {
    type: 'none',
  },
  ignoreMomentLocale: true,
  targets: { ie: 9 },
  dva: { immer: false },
  dynamicImport: {},
  hash: true,
  proxy,
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },
  scripts: [
    'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.production.min.js',
    'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.production.min.js',
  ],
  // 配置具体含义见：https://github.com/umijs/umi-webpack-bundle-analyzer#options-for-plugin
  // cross-env ANALYZE=1 umi build
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed',
  },
  extraBabelPlugins: ['lodash'],
  extraBabelPresets: [],
};

configParams = {
  ...configParams,
  chainWebpack: (configInp: any) => chainWebpackDev(configInp),
};

if (env === 'production') {
  configParams = {
    ...configParams,
    chainWebpack: (configInp: any) => chainWebpackPro(configInp),
  };
}
const config = defineConfig(configParams);

export default config;
