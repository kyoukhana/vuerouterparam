export default [
    {path: '/',name:'home', component: (resolve) => { require(['../../components/views/home.vue'], resolve)} },
     {path: '/contact',name:'contact', component: (resolve) => { require(['../../components/views/contact.vue'], resolve)} },
]