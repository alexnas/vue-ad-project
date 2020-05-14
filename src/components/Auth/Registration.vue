<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Registration</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-text-field
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="email"
                v-model="email"
                :rules="emailRules"
              ></v-text-field>

              <v-text-field
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                :counter="6"
                v-model="password"
                :rules="passwordRules"
              ></v-text-field>

              <v-text-field
                label="Confirm Password"
                name="confirm-password"
                prepend-icon="mdi-lock"
                type="password"
                :counter="6"
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :disabled="!valid || loading"
              :loading="loading"
              @click="onSubmit"
            >
              Create account
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const emailRegex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      valid: false,
      lazy: true,
      emailRules: [
        v => !!v || "E-mail is required",
        v => emailRegex.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 6) || "Password must be 6 or more characters"
      ],
      confirmPasswordRules: [
        v => !!v || "Password is required",
        v => v === this.password || "Entered passwords must be the same"
      ]
    };
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        };
        this.$store
          .dispatch("registerUser", user)
          .then(() => {
            this.$router.push("/");
          })
          .catch(() => {});
      }
    }
  }
};
</script>

<style></style>
