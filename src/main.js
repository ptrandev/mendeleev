// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Vue2Filters from "vue2-filters";

import App from "./App";
import SortingMenu from "./components/menus/SortingMenu";
import ProfileMenu from "./components/menus/ProfileMenu";
import CategoryMenu from "./components/menus/CategoryMenu";
import FooterPeriodicTable from "./components/footers/FooterPeriodicTable";
import FooterProfile from "./components/footers/FooterProfile";
import PeriodicTable from "./components/PeriodicTable";
import ElementProfile from "./components/ElementProfile";
import CategoryProfile from "./components/CategoryProfile";

import pt from "periodic-table";

window.$ = window.jQuery = require("jquery");

require("./assets/css/grids.css");
require("./assets/css/grids-responsive.css");
require("./assets/css/luxbar.css");
require("./assets/css/periodic-table.css");
require("./../node_modules/atomic-bohr-model/dist/atomicBohrModel.min.js");

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vue2Filters);

const router = new VueRouter({
  mode: "history",
  base: "/mendeleev",
  routes: [
    {
      path: "/",
      components: {
        nav: SortingMenu,
        default: PeriodicTable,
        footer: FooterPeriodicTable
      }
    },
    {
      path: "/element/:id",
      components: {
        nav: ProfileMenu,
        default: ElementProfile,
        footer: FooterProfile
      }
    },
    {
      path: "/category/:id",
      components: {
        nav: CategoryMenu,
        default: CategoryProfile,
        footer: FooterProfile
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  template: `<App/>`,
  components: { App }
}).$mount("#app");
