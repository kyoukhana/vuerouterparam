import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

var router = new VueRouter();

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

            '/edit:userid':{
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