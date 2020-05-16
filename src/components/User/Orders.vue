<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 class="text-center pt5" v-if="loading">
        <v-progress-circular :size="100" :width="10" color="#d595e0" indeterminate></v-progress-circular>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length !== 0">
        <h1 class="text--secondary" mb3>Orders</h1>
        <v-list subheader two-line flat>
          <v-list-item avatar v-for="order in orders" :key="order.id">
            <v-list-item-action>
              <v-checkbox color="success" v-model="order.done" @click="markDone(order)"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ order.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn class="primary" :to="'/ad/' + order.adId">Open</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-flex>
      <v-flex xs12 class="text-center" v-else>
        <h1 class="text--secondary">You have no orders.</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.getters.loading;
    },
    orders() {
      return this.$store.getters.orders;
    }
  },
  methods: {
    markDone(order) {
      this.$store
        .dispatch("markOnderDone", order.id)
        .then(() => {
          order.done = true;
        })
        .catch(() => {});
    }
  },
  created() {
    this.$store.dispatch("fetchOrders");
  }
};
</script>

<style></style>
