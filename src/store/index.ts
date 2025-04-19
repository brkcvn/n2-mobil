import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import userModule from './modules/user';

export default createStore({
  modules: {
    user: userModule
  },
  plugins: [
    createPersistedState({
      paths: ['user.users', 'user.userTodos, user.userPosts, user.userComments']
    })
  ]
});