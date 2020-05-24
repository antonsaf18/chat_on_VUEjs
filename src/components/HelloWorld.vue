<template>
  <v-container>
    <login v-if="!isLoggedIn" />
    <chat-module v-else />
  </v-container>
</template>

<script>
import login from "./login.component.vue";
import chatModule from "./chat-module.component.vue";
export default {
  name: "HelloWorld",
  components: {
    login,
    chatModule
  },
  data: () => ({}),
  computed: {
    isLoggedIn() {
      return this.$store.state.userInfo?.name;
    }
  }
};
</script>
