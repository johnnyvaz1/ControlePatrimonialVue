import Vue from 'vue';
import Router from 'vue-router';
import Home from '../layout/patrimonio/Home.vue';
// import Starter from '../layout/starter/SamplePage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: Home,
      children: [
        // {
        //   path: 'dashboard',
        //   name: 'dashboard',
        //   components: { default: Starter }
        // }
      ]
    }
  ]
});
