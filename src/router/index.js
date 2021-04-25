import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home')
    },
    {
        path: '/library',
        name: 'Library',
        component: () => import('../components/Library'),
        meta: {
            authRequired: true,
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/Login')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../components/Register')
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('../components/Search')
    }
];

const router = new VueRouter({
    mode: 'history',
     base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        if (firebase.auth().currentUser) {
            next();
        } else {
            alert('You must be logged in to see this page');
            next({
                path: '/login',
            });
        }
    } else {
        next();
    }
});

export default router;