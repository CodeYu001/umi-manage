const errorPage = require('@/pages/404');

export function patchRoutes({ routes }: any) {
  routes.push({
    path: '*',
    component: errorPage.default,
  });
}
