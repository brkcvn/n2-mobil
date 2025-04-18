import { AlbumProps, StateProps, CommentProps, UserProps, TodoProps, PostProps } from '@/types';
import axios from 'axios';

export default {
    namespaced: true,

    state: (): StateProps => ({
        users: [],
        selectedUser: null,
        userTodos: [],
        userPosts: [],
        userComments: [],
        userAlbums: [],
        loading: false,
        error: null
    }),

    getters: {
        getUsers: (state: StateProps) => {
            if (!state.users || state.users.length === 0) {
              return [];
            }
            
            return state.users.map((user, index) => ({
              id: user.id.toString(),
              name: user.name,
              email: user.email,
              phone: user.phone,
              avatar: `assets/images/user-${(user.id % 3 || index % 2) + 1}.png`,
              location: user.address ? `${user.address.street}\n${user.address.city}` : 'No address',
              company: user.company ? user.company.name : 'No company',
              website: user.website
            }));
          },
        getSelectedUser: (state: StateProps) => state.selectedUser,
        getUserTodos: (state: StateProps) => state.userTodos,
        getUserPosts: (state: StateProps) => state.userPosts,
        getUserComments: (state: StateProps) => state.userComments,
        getUserAlbums: (state: StateProps) => state.userAlbums,
        isLoading: (state: StateProps) => state.loading,
        getError: (state: StateProps) => state.error
    },

    mutations: {
        SET_USERS(state: StateProps, users: UserProps[]) {
            state.users = users;
        },
        SET_SELECTED_USER(state: StateProps, user: UserProps) {
            state.selectedUser = user;
        },
        SET_USER_TODOS(state: StateProps, todos: TodoProps[]) {
            state.userTodos = todos;
        },
        SET_USER_POSTS(state: StateProps, posts: PostProps[]) {
            state.userPosts = posts;
        },
        SET_USER_COMMENTS(state: StateProps, comments: CommentProps[]) {
            state.userComments = comments;
        },
        SET_USER_ALBUMS(state: StateProps, albums: AlbumProps[]) {
            state.userAlbums = albums;
        },
        SET_LOADING(state: StateProps, loading: boolean) {
            state.loading = loading;
        },
        SET_ERROR(state: StateProps, error: string | null) {
            state.error = error;
        }
    },

    actions: {
        async fetchUsers({ commit }) {
            try {
                commit('SET_LOADING', true);
                commit('SET_ERROR', null);
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                commit('SET_USERS', response.data);
            } catch (error) {
                commit('SET_ERROR', 'Failed to fetch users');
                console.error('Error fetching users:', error);
            } finally {
                commit('SET_LOADING', false);
            }
        },

        async selectUser({ commit, dispatch }, user: UserProps) {
            commit('SET_SELECTED_USER', user);
            await Promise.all([
                dispatch('fetchUserTodos'),
                dispatch('fetchUserPosts'),
                dispatch('fetchUserComments'),
                dispatch('fetchUserAlbums')
            ]);
        },

        async fetchUserTodos({ commit, state }) {
            if (!state.selectedUser) return;

            try {
                commit('SET_LOADING', true);
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${state.selectedUser.id}`);
                commit('SET_USER_TODOS', response.data);
            } catch (error) {
                commit('SET_ERROR', 'Failed to fetch user todos');
                console.error('Error fetching user todos:', error);
            } finally {
                commit('SET_LOADING', false);
            }
        },

        async fetchUserPosts({ commit, state }) {
            if (!state.selectedUser) return;

            try {
                commit('SET_LOADING', true);
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${state.selectedUser.id}`);
                commit('SET_USER_POSTS', response.data);
            } catch (error) {
                commit('SET_ERROR', 'Failed to fetch user posts');
                console.error('Error fetching user posts:', error);
            } finally {
                commit('SET_LOADING', false);
            }
        },

        async fetchUserComments({ commit, state }) {
            if (!state.selectedUser) return;

            try {
                commit('SET_LOADING', true);
                const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${state.selectedUser.id}`);
                const postIds = postsResponse.data.map((post: PostProps) => post.id);

                if (postIds.length === 0) {
                    commit('SET_USER_COMMENTS', []);
                    return;
                }

                let allComments: Comment[] = [];
                for (const postId of postIds) {
                    const commentsResponse = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
                    allComments = [...allComments, ...commentsResponse.data];
                }

                commit('SET_USER_COMMENTS', allComments);
            } catch (error) {
                commit('SET_ERROR', 'Failed to fetch user comments');
                console.error('Error fetching user comments:', error);
            } finally {
                commit('SET_LOADING', false);
            }
        },

        async fetchUserAlbums({ commit, state }) {
            if (!state.selectedUser) return;

            try {
                commit('SET_LOADING', true);
                const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${state.selectedUser.id}`);
                commit('SET_USER_ALBUMS', response.data);
            } catch (error) {
                commit('SET_ERROR', 'Failed to fetch user albums');
                console.error('Error fetching user albums:', error);
            } finally {
                commit('SET_LOADING', false);
            }
        }
    }
};