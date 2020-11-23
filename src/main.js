import Vue from "vue";
import vuetify from "./plugins/vuetify"; // path to vuetify export
import App from "./App.vue";
import router from "./router";
//import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
