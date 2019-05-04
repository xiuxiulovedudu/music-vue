import app from './App.vue'
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'

const vm = new Vue({
  el: "#app",
  render: c => c(app),
  router
})