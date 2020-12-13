import Vue from 'vue'
import store from "./store";
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router";
import VueTheMask from 'vue-the-mask'
//import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;
Vue.use(VueTheMask)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');