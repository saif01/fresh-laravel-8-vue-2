import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './components/pages/Home.vue'
import Blank from './components/pages/Blank.vue'


const router = new VueRouter({
    mode: 'history',
    routes : [

        { 
            path: '/', 
            component: Home,
            name: 'Home',
          
        },

        { 
            path: '/blank', 
            component: Blank,
            name: 'Blank',
          
        },

    ]
});


export default router;