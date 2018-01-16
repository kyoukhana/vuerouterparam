import Vue from 'vue'
import VueRouter from 'vue-router'



/*Define Router */
Vue.use(VueRouter);

/*Define Routes Object */
import siteRoutes from './components/routes/site'
import App from './components/views/app.vue'

const loadRoutes = [
    ...siteRoutes
];

const router = new VueRouter({
    hashbang: false,
    linkActiveClass: 'active',
    mode: 'history',
    routes:loadRoutes
});

Vue.router=router;
App.router=router;
new Vue(App).$mount('#app');