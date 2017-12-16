// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import PeriodicTable from './components/PeriodicTable'
import Vue2Filters from 'vue2-filters'

require('./assets/css/periodic-table.css');

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vue2Filters)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path:'/',
      component: PeriodicTable
    }
  ]
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <ul>
      <li><router-link to="/">Periodic Table</router-link></li>
      </ul>
      <router-view></router-view>
    </div>`,
}).$mount('#app')
