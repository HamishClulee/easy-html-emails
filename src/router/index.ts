import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Beta from '../views/beta.vue'
import notfound from '../views/notfound.vue'
import overwritemetas from '../utils/seo'

Vue.use(VueRouter)

const routes = [
    // -------------------------------------------------------------------
    // --------------------------- SITE
    // -------------------------------------------------------------------
    {
        path: '/',
        name: 'home',
        component: App,
        beforeEnter: (to: any, from: any, next: any) => {
            overwritemetas({
                title: 'Easy HTML Templates',
                description: `Get tried and tested html emails easily.`,
                index: true,
            }, next)
        },
    },
    {
        path: '/beta',
        name: 'beta',
        component: Beta,
        beforeEnter: (to: any, from: any, next: any) => {
            overwritemetas({
                title: 'Easy HTML Templates',
                description: `Get tried and tested html emails easily.`,
                index: true,
            }, next)
        },
    },
    {
        path: '*',
        name: 'notfound',
        component: notfound,
        beforeEnter: (to: any, from: any, next: any) => {
            overwritemetas({ index: false}, next)
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition ? savedPosition : { x: 0, y: 0 }
    },
})

export default router
