import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'

import App from './app.vue'

import Error from './error.vue'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)


const appAPIURL = '/api/'
Vue.prototype.$eventHub = new Vue()
Vue.prototype.$appAPIURL = appAPIURL


const routes = [
    {
        name: 'error',
        path: '*',
        component: Error,
    },
]

const router = new VueRouter({mode: 'history', routes: routes})

new Vue(Vue.util.extend({router}, App)).$mount('#app')
