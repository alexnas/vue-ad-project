import Vue from "vue";
import "vuetify/dist/vuetify.min.css";
import * as fb from "firebase";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyAv_GtbVVx2kJUvjINh3U0uNLhsc_YQ2vY",
      authDomain: "vue-ads-project-a1dff.firebaseapp.com",
      databaseURL: "https://vue-ads-project-a1dff.firebaseio.com",
      projectId: "vue-ads-project-a1dff",
      storageBucket: "vue-ads-project-a1dff.appspot.com",
      messagingSenderId: "598665661834",
      appId: "1:598665661834:web:5c9cb62e0aa27758eccc73"
    });
  }
}).$mount("#app");
