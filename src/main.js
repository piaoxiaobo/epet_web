import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store';
import './filters/index'
import VueLazyload from 'vue-lazyload'
import loading from './common/loading/loading.gif'

Vue.use(VueLazyload, {
  loading,
})

/*
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './common/loading/loading.gif',
  loading: './common/loading/loading.gif',
  attempt: 3
});
*/

new Vue({
  el:'#app',
  render:h => h(App),
  router,
  store
});
