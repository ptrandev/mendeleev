// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import SortingMenu from './components/SortingMenu'
import PeriodicTable from './components/PeriodicTable'
import Vue2Filters from 'vue2-filters'

window.$ = window.jQuery = require('jquery');

require('./assets/css/luxbar.css');
require('./assets/css/periodic-table.css');
require('./../node_modules/atomic-bohr-model/dist/atomicBohrModel.min.js');

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vue2Filters)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path:'/mendeleev',
      components: {
        default: PeriodicTable,
        menu: SortingMenu
      }
    }
  ]
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <router-view></router-view>
      <router-view name="menu"></router-view>
    </div>`,
}).$mount('#app');