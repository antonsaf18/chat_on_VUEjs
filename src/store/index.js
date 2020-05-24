import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      name: ""
    },
    userList: [
      "manager",
    ],
    history: []
  },
  getters: {
    getHistoryByUserName: state => name =>
      state.history.find(h => h.companion === name)
  },
  mutations: {
    setUser(state, payload) {
      state.userInfo = payload;
      state.userList.push(payload.name);
    },
    createChatHistory(state, companion) {
      state.history.push(createChatRoom(companion));
    },
    addMessage(state, message) {
      const chatHistory = state.history.find(h => h.companion === message.companion);
      chatHistory.messages.push(message);
    }
  },
  actions: {
    setUser(context, payload) {
      context.commit("setUser", payload);
    },
    sendMessage(context, payload) {
      const message = createMessage({
        author: payload.author,
        companion: payload.companion,
        text: payload.text
      });
      if (!context.getters.getHistoryByUserName(payload.companion)) {
        context.commit("createChatHistory", payload.companion);
      }
      context.commit("addMessage", message);
    }
  },
  modules: {}
});

const createMessage = ({ author, companion, text }) => {
  return {
    author,
    companion,
    text,
    date: new Date().toUTCString()
  };
};

const createChatRoom = name => {
  return {
    companion: name,
    messages: []
  };
};
