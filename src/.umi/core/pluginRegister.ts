// @ts-nocheck
import { plugin } from './plugin';
import * as Plugin_0 from '/Users/ecarx/Desktop/audit_certification_ client/src/app.tsx';
import * as Plugin_1 from '/Users/ecarx/Desktop/audit_certification_ client/src/.umi/plugin-dva/runtime.tsx';
import * as Plugin_2 from '../plugin-initial-state/runtime';
import * as Plugin_3 from '../plugin-model/runtime';

  plugin.register({
    apply: Plugin_0,
    path: '/Users/ecarx/Desktop/audit_certification_ client/src/app.tsx',
  });
  plugin.register({
    apply: Plugin_1,
    path: '/Users/ecarx/Desktop/audit_certification_ client/src/.umi/plugin-dva/runtime.tsx',
  });
  plugin.register({
    apply: Plugin_2,
    path: '../plugin-initial-state/runtime',
  });
  plugin.register({
    apply: Plugin_3,
    path: '../plugin-model/runtime',
  });

export const __mfsu = 1;
