const initState = () => ({

});

export default {
  namespace: 'public',
  state: initState(),
  effects: {

  },
  reducers: {
    update: (state: any, { payload }: any) => {
      return { ...state, ...payload };
    },
  },
};
