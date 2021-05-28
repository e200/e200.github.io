import Vue from 'vue'
import Router from 'vue-router'

import routes from '.'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    routes
  })
}
