window.Vue = require('vue')
import './js/common'
import './scss/main.scss'
import store from './store/store'
import VueRouter from 'vue-router'
const Main = require('./components/main-page/MainPage.vue').default
const Game = require('./components/game/Game.vue').default
// const App = require('./components/App.vue').defaul

Vue.component('App', require('./components/App.vue').default)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { 
            path: '/', 
            component: () => import('./components/main-page/MainPage.vue')
        },{ 
            path: '/game', 
            component: () => import('./components/game/Game.vue') 
        }
    ]
})

new Vue({
    router,
    store,
    el: '#app',
})
