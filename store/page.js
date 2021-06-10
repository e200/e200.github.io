export const state = () => ({
  isScrollable: true
})

export const mutations = {
  canScroll(state, value) {
    state.isScrollable = value
  }
}
