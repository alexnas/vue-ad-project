<template>
  <v-dialog width="400px" v-model="modal">
    <template v-slot:activator="{ on }">
      <v-btn class="warning" text v-on="on">Edit</v-btn>
    </template>
    <v-card>
      <v-container>
        <v-layout row>
          <v-flex xs12>
            <v-card-title>
              <h1 class="text--primary">Edit ad</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row>
          <v-flex xs12>
            <v-card-text>
              <v-text-field label="Title" name="title" type="text" v-model="editedTitle"></v-text-field>
              <v-textarea
                label="Description"
                name="description"
                type="text"
                v-model="editedDescription"
              ></v-textarea>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text @click="onCancel">Cancel</v-btn>
              <v-btn text class="success" @click="onSave">Save</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["ad"],
  data() {
    return {
      modal: false,
      editedTitle: this.ad.title,
      editedDescription: this.ad.description
    };
  },
  methods: {
    onCancel() {
      this.editedTitle = this.ad.title;
      this.editDescription = this.ad.description;
      this.modal = false;
    },
    onSave() {
      if (
        !this.editedTitle.strip() !== "" &&
        this.editedDescription.strip() !== ""
      ) {
        this.$store.dispatch("updateAd", {
          title: this.editTitle,
          description: this.editedDescription,
          id: this.ad.id
        });
        this.modal = false;
      }
    }
  }
};
</script>

<style></style>