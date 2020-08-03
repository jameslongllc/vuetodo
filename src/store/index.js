import Vue from "vue";
import Vuex from "vuex";
import store from "../store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        _id: "1",
        title: "Walk The Dog",
        description: "Go to forrest near the Zoo",
      },
      {
        _id: "2",
        title: "Buy some bread",
        description: "Preferably Potato",
      },
      {
        _id: "3",
        title: "Learn programming",
        description: "Now is the time to learn",
      },
      {
        _id: "4",
        title: "Learn Web Development",
        description: "Create Web-Base Software",
      },
    ],
  },
  
  },
  mutations: {},
  actions: {
    createTodo(todo) {
    todo._id = Math.random()
      .toString(36)
      .substr(2, 7);
     state.todos.push(todo);
  },
  modules: {},
});

store.dispatch = function (action, payload) {
  if (!this.actions[action]) return
  
  return this.actions[actions](this.state, payload)
}