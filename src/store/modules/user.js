const user = {
  state: {
    pick: 0,
  },

  mutations: {
    setPick: (state, pick) => {
      state.pick = pick
    },
  },

  actions: {
    setPick( { commit, state }, pick) {
      commit('setPick', pick)
    },
  },
};

export default user
