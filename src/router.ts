import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Places from './views/Places.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/places',
      name: 'places',
      component: Places,
    },
  ],
});
