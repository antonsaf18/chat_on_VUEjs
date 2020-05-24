<template>
  <div class="chat-history">
    <div v-for="(message, i) in messages" :key="i">
      <div>{{ message.author }}</div>
      <div>{{ message.date }}</div>
      <div>{{ message.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chat-history",
  props: {
    messages: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>

<style scoped>
.chat-history {
  height: 500px;
  overflow-x: scroll;
  border: 2px double black;
  padding: 10px;
}
</style>
