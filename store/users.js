export const state = () => ({
  users: []
})

export const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

export const actions = {
  async fetch({ commit }) {
    const users = await this.$axios.$get(
      'https://5e63f7a3782c970014a89ee5.mockapi.io/api/post?page=1&limit=10'
    )
    commit('setUsers', users)
  }
}

export const getters = {
  users: (s) => s.users
}
