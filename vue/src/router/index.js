import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import QklHome from '@/vues/QklHome'
import QklLogin from '@/vues/QklLogin'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'QklHome',
            component: QklHome
        },
        {
            path: '/login',
            name: 'QklLogin',
            component: QklLogin
        }
    ]
})