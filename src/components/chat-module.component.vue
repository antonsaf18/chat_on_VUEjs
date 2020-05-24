<template>
  <v-row class="row no-gutters mb-6">
    <v-col class="mr-5">
      <chat-window :user="activeUser" />
    </v-col>
    <v-col>
      <chat-window user="manager" />
    </v-col>
  </v-row>
</template>

<script>
import chatWindow from "./chat-window.component.vue";

export default {
  name: "chat-module",
  components: {
    chatWindow
  },
  computed: {
    activeUser() {
      return this.$store.state.userInfo.name;
    }
  }
};
</script>

<style scoped>
.chats {
  width: 100%;
  height: 100%;
}
</style>
