<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list>
        <v-list-item v-for="link of links" :key="link.title" :to="link.url">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="onLogout" v-if="isUserLoggedIn">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="'Logout'"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dark color="primary" app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer"
          >Ad Application</router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text v-for="link in links" :key="link.title" :to="link.url">
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>

        <v-btn text @click="onLogout" v-if="isUserLoggedIn">
          <v-icon left>mdi-exit-to-app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-template v-if="error">
      <v-snackbar
        color="error"
        :multi-line="true"
        :timeout="5000"
        @input="closeError"
        :value="true"
      >
        {{ error }}
        <v-spacer></v-spacer>
        <v-btn text dark @click.native="closeError">
          Close
        </v-btn>
      </v-snackbar>
    </v-template>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn;
    },
    links() {
      if (this.isUserLoggedIn) {
        return [
          { title: "Orders", icon: "mdi-bookmark-outline", url: "/orders" },
          { title: "New ad", icon: "mdi-file-plus", url: "/new" },
          { title: "My ads", icon: "mdi-format-list-bulleted", url: "/list" }
        ];
      }

      return [
        { title: "Login", icon: "mdi-lock", url: "/login" },
        { title: "Registration", icon: "mdi-face", url: "/registration" }
      ];
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch("clearError");
    },
    onLogout() {
      this.$store.dispatch("logoutUser");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
