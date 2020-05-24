<template>
  <div class="">
    <div
      v-for="user in userList"
      :key="user"
      class="pa-2"
      @click="selectUser(user)"
    >
      {{ user }}
    </div>
  </div>
</template>

<script>
export default {
  name: "chat-user-list",
  computed: {
    userList() {
      return this.$store.state.userList;
    }
  },
  methods: {
    selectUser($event) {
      this.$emit("select", $event);
    }
  }
};
</script>

<style scoped>
.user-list {
  flex-basis: 50px;
  flex-grow: 1;
}
</style>
