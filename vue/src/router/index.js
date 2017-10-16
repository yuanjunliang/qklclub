import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import QklHome from '@/vues/QklHome'
import QklRegist from '@/vues/QklRegist'
import QklAdminIndex from '@/vues/admin/QklAdminIndex'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'QklHome',
            component: QklHome
        },
        {
            path: '/regist',
            name: 'QklRegist',
            component: QklRegist
        },
        {
            path: '/admin',
            name: 'QklAdminIndex',
            component: QklAdminIndex
        }
    ]
})