<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm-3>
        <h1 class="text-secondary mb-3">My ads</h1>

        <v-card class="elevation-10 mb-4" v-for="ad in ads" :key="ad.id">
          <v-layout row>
            <v-flex xs4>
              <v-img :src="ad.imageSrc" height="160px"></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text-primary">{{ ad.title }}</h2>
                <p>{{ ad.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="info mr-3" :to="'/ad/' + ad.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      ads: [
        {
          title: "First ad",
          description: "Hello this is a first picture",
          promo: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id: "123"
        },
        {
          title: "Second ad",
          description: "Somebody knows",
          promo: true,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          id: "124"
        },
        {
          title: "Third ad",
          description: "Porque no",
          promo: true,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          id: "125"
        }
      ]
    };
  }
};
</script>

<style></style>
