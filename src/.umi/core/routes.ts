// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/ecarx/Desktop/audit_certification_ client/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__index' */'@/layouts/index.tsx')}),
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'@/pages/404.tsx')})
      },
      {
        "path": "/",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__index' */'@/pages/index.tsx')})
      },
      {
        "path": "/project",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__project__index' */'@/pages/project/index.tsx')})
      },
      {
        "path": "/project/list",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__project__list__index' */'@/pages/project/list/index.tsx')})
      },
      {
        "path": "/report",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__report__index' */'@/pages/report/index.tsx')})
      },
      {
        "path": "/report/list",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__report__list__index' */'@/pages/report/list/index.tsx')})
      },
      {
        "path": "/system/character",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__system__character__index' */'@/pages/system/character/index.tsx')})
      },
      {
        "path": "/system/department",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__system__department__index' */'@/pages/system/department/index.tsx')})
      },
      {
        "path": "/system",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__system__index' */'@/pages/system/index.tsx')})
      },
      {
        "path": "/system/user",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__system__user__index' */'@/pages/system/user/index.tsx')})
      },
      {
        "path": "/workOrder",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__workOrder__index' */'@/pages/workOrder/index.tsx')})
      },
      {
        "path": "/workOrder/list",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__workOrder__list__index' */'@/pages/workOrder/list/index.tsx')})
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'@/pages/404.tsx')})
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
