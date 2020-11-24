import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: "#f45e18",
          secondary: "#222f3f",
          accent: "##ff9049",
          anchor: "#000519"
        }
      }
    }
  });

export default vuetify;
