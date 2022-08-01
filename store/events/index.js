export const state = () => ({
  items: {
    data: [],
    meta: {
      total: 0,
    },
  },
  event: {},
});

export const mutations = {
  items: (state, items) => (state.items = items),
  event: (state, event) => (state.event = event),
  push(state, event) {
    state.items.data.push(event);
  },
  pop(state) {
    state.items.data.pop();
  },
};

export const getters = {
  items: (state) => state.items,
  event: (state) => state.event,
};

export const actions = {
  async get({ commit }, params) {
    await this.$axios
      .get("/api/events", {
        params: {
          ...params,
        },
      })
      .then((res) => {
        commit("items", res.data);
      });
  },

  async find({ commit }, uid) {
    await this.$axios.get("/api/events/" + uid).then((res) => {
      commit("event", res.data.data);
    });
  },
  async save({ commit }, params) {
    if (params.event_uid) {
      return this.$axios.put("/api/events/" + params.event_uid, params.form);
    }
    return this.$axios.post("/api/events", params.form);
  },
  async delete({ commit }, params) {
    return this.$axios.delete("/api/events/" + params.event_uid, params.form);
  },
};
