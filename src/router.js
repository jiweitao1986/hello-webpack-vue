import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './home/index';
import Hello from './hello/index';
import News from './news/index';

Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
  { path: '/hello', component: Hello },
  { path: '/news', component: News },
  { path: '', component: Home },
];

const router = new VueRouter({
  routes
});

export default router;