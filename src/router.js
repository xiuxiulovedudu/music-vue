import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

let router = new VueRouter({
  routes: [
    { path: "/login", component: Login },
    { path: "/register", component: Register }
  ]
})

export default router