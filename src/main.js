import Vue from "vue";
import "vuetify/dist/vuetify.min.css";
import * as fb from "firebase";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import BuyModalComponent from "./components/Shared/BuyModal";

Vue.config.productionTip = false;
Vue.component("app-buy-modal", BuyModalComponent);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    fb.initializeApp(fbApi);

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoLoginUser", user);
      }
    });

    this.$store.dispatch("fetchAds");
  }
}).$mount("#app");
