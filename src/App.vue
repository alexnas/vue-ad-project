<template>
  <v-app>
    <v-navigation-drawer app temporary="false">
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar dark color="primary" app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>App Service</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>Link Two</v-btn>
        <v-btn text>Link Two</v-btn>
        <v-btn text>Link Two</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
</style>