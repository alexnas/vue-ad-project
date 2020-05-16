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
    fb.initializeApp({
      apiKey: "FakeApi",
      authDomain: "ads-wwwwwwww.ffffffffff.com",
      databaseURL: "https://ads-wwwwwwww.ffffffffffff.com",
      projectId: "ads-wwwwwwww",
      storageBucket: "ads-wwwwwwww.aaaaaaa.com",
      messagingSenderId: "123123123213",
      appId: "1:948753759835:www:987o54l5kj3lk4fakeapi"
    });

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoLoginUser", user);
      }
    });

    this.$store.dispatch("fetchAds");
  }
}).$mount("#app");
