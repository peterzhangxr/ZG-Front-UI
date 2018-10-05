//全局样式加载
import './assets/app.less'

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import NProgress from 'nprogress'
import routes from './routes'
import ZGFrontUI from './index'


Vue.use(VueRouter)
Vue.use(ZGFrontUI)

const router = new VueRouter({
    mode: 'hash',
    base: '/',
    routes: routes
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach((to, from) => {
   NProgress.done()
   NProgress.remove()
})
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})