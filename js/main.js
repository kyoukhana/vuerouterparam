import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

/*Define Router */
const router = new VueRouter({
    hashbang: false,
    linkActiveClass: 'active',
    mode: 'history',

    scrollBehavior (to, from, savedPosition) {
        var maincontent = document.getElementsByTagName("main")[0];
        maincontent.scrollTop=0;
    }
});

router.map({
    '/': {
        component: (resolve) => { require(['./components/views/root.vue'], resolve); }
    },
    'users': {
        component: (resolve) => { require(['./components/views/users.vue'], resolve); },

        subRoutes: {

            '/add':{
                component: (resolve) => { require(['./components/views/users/add.vue'], resolve); }
            },

            '/view':{
                component: (resolve) => { require(['./components/views/users/view.vue'], resolve); }
            },

            '/edit/:userid':{
                name:"edituser",
                userid:'',
                component: (resolve) => { require(['./components/views/users/edit.vue'], resolve); }
            }

        }
    },
    '/contact': {
        component: (resolve) => { require(['./components/views/contact.vue'], resolve); }
    }
});

var App = Vue.extend({});

router.start(App, '#app');