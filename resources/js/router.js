import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'

import Home from './pages/Home'
import detail from './pages/detail'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/detail',
            name: 'home',
            component: detail,
        }
    ]
})

export default router