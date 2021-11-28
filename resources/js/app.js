require('./bootstrap');

window.Vue = require('vue').default;

// Project Routes
import router from './route'

import  BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue)


Vue.component('main-component', require('./components/Main.vue').default);


const app = new Vue({
    el: '#app',
    router: router,
});
