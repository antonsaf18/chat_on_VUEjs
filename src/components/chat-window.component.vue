<template>
  <article class="chat-window">
    <div class="chat-main">
      <chat-history :messages="historyMessages" />
      <v-textarea solo name="input-7-4" label="Solo textarea" v-model="text" />
      <v-btn @click="send">Отправить</v-btn>
    </div>
    <chat-user-list @select="selectUser" v-if="!isManager" />
  </article>
</template>

<script>
import chatHistory from "./chat-history.component.vue";
import chatUserList from "./chat-user-list.component.vue";

export default {
  name: "chat-window",
  components: {
    chatHistory,
    chatUserList
  },
  props: {
    user: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      companion: "manager",
      text: ""
    };
  },
  computed: {
    isManager() {
      return this.user === "manager";
    },
    historyMessages() {
      const history = this.$store.getters.getHistoryByUserName(this.companion);
      return history ? history.messages : [];
    }
  },
  methods: {
    selectUser($event) {
      this.companion = $event;
    },
    send() {
      const { companion, text } = this;
      this.$store.dispatch("sendMessage", {
        author: this.user,
        companion,
        text
      });
      this.message = "";
    }
  }
};
</script>

<style scoped>
.chat-window {
  display: flex;
  flex-flow: row nowrap;
}
.chat-main {
  flex-grow: 4;
}
</style>
