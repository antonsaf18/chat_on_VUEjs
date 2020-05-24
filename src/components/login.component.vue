<template>
  <v-col cols="12" sm="6" md="3">
    <h3 class="text-center">Please log in</h3>
    <div>
      <v-text-field label="login" v-model="username" />
    </div>
    <v-btn @click="login">Войти</v-btn>
  </v-col>
</template>

<script>
export default {
  name: "login",
  data: () => ({
    username: ""
  }),

  methods: {
    login() {
      this.$store.dispatch("setUser", {
        name: this.username
      });
    }
  }
};
</script>

<style scoped></style>
