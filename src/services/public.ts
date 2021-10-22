import { get } from '@/utils';

const target = '/api/v1';

export const getXxxServer = () => {
  return get(`${target}/xxx`);
};

