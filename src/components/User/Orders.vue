<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary" mb3>Orders</h1>
        <v-list subheader two-line flat>
          <v-list-item avatar v-for="order in orders" :key="order.id">
            <v-list-item-action>
              <v-checkbox
                color="success"
                v-model="order.done"
                @click="markDone(order)"
              ></v-checkbox>
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
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: "weoru32", // id for order
          name: "Alex", // userName
          phone: "8-921-212-2323",
          adId: "123", // id for ad
          done: false
        }
      ]
    };
  },
  methods: {
    markDone(order) {
      order.done = true;
    }
  }
};
</script>

<style></style>
