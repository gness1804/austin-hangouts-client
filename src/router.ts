import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Places from './views/Places.vue';
import AddPlace from './views/AddPlace.vue';
import EditPlace from './views/EditPlace.vue';

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
    {
      path: '/add-place',
      name: 'add-place',
      component: AddPlace,
    },
    {
      path: '/edit-place/:placeId',
      name: 'edit-place',
      component: EditPlace,
      props: true,
    },
  ],
});
