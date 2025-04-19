import { AlbumProps, StateProps, CommentProps, UserProps, TodoProps, PostProps } from '@/types';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export default {
    namespaced: true,

    state: (): StateProps => ({
        users: [],
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
                id: user?.id,
                name: user?.name,
                email: user?.email,
                phone: user?.phone,
                avatar: `assets/images/user-${(user?.id % 3 || index % 2) + 1}.png`,
                location: user?.address ? `${user?.address?.street}\n${user?.address?.city}` : 'No address',
                company: user?.company ? user?.company?.name : 'No company',
                website: user?.website
            }));
        },
        getUserTodos: (state: StateProps) => {
            if (!state.userTodos || state.userTodos.length === 0) {
                return [];
            }

            return state.userTodos.map((todo) => ({
                userId: todo?.userId,
                id: todo?.id,
                title: todo?.title,
                completed: todo?.completed,
            }));
        },
        getUserPosts: (state: StateProps) => {
            if (!state.userPosts || state.userPosts.length === 0) {
                return [];
            }

            return state.userPosts.map((post) => ({
                userId: post?.userId,
                id: post?.id,
                title: post?.title,
                body: post?.body,
            }));
        },
        getUserComments: (state: StateProps) => {
            if (!state.userComments || state.userComments.length === 0) {
                return [];
            }

            return state.userComments.map((comment, index) => {
                return {
                    postId: comment?.postId,
                    id: comment?.id,
                    name: comment?.name,
                    email: comment?.email,
                    body: comment?.body,
                    avatar: `assets/images/user-${(comment?.id % 3 || index % 2) + 1}.png`,
                }

            });
        },
        getUserAlbums: (state: StateProps) => {
            if (!state.userAlbums || state.userAlbums.length === 0) {
                return [];
            }

            return state.userAlbums.map((album) => {
                const imageCount = 6
                const images = [];

                for (let i = 0; i < imageCount; i++) {
                    images.push(`assets/albums/album-${i + 1}.jpg`);
                }

                return {
                    userId: album?.userId,
                    id: album?.id,
                    title: album?.title,
                    images: images,
                };
            });
        },
        isLoading: (state: StateProps) => state.loading,
        getError: (state: StateProps) => state.error
    },

    mutations: {
        SET_USERS(state: StateProps, users: UserProps[]) {
            state.users = users;
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
        },
        TOGGLE_TODO_STATUS(state: StateProps, todoId: number) {
            state.userTodos = state.userTodos.map(todo => {
                if (todo.id === todoId) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
        },
    },

    actions: {
        async fetchUsers({ commit }) {
            try {
                commit('SET_LOADING', true);
                commit('SET_ERROR', null);
                const response = await axios.get(`${API_URL}/users`);
                commit('SET_USERS', response.data);
            } catch (error) {
                commit('SET_ERROR', 'Failed to fetch users');
                console.error('Error fetching users:', error);
            } finally {
                commit('SET_LOADING', false);
            }
        },

        async fetchUserTodosByUserId({ commit }, userId) {
            try {
                commit('SET_LOADING', true);
                commit('SET_ERROR', null);

                const todosResponse = await axios.get(`${API_URL}/todos?userId=${userId}`);
                commit('SET_USER_TODOS', todosResponse.data);
            } catch (error) {
                commit('SET_ERROR', 'Failed to fetch user todos');
                console.error('Error fetching user todos:', error);
            } finally {
                commit('SET_LOADING', false);
            }
        },

        async fetchUserPostsByUserId({ commit }, userId) {
            try {
                commit('SET_LOADING', true);
                commit('SET_ERROR', null);

                const response = await axios.get(`${API_URL}/posts?userId=${userId}`);
                commit('SET_USER_POSTS', response.data);
            } catch (error) {
                commit('SET_ERROR', 'Failed to fetch user posts');
                console.error('Error fetching user posts:', error);
            } finally {
                commit('SET_LOADING', false);
            }
        },

        async fetchCommentsByPostId({ commit }, postId) {
            try {
                commit('SET_LOADING', true);
                commit('SET_ERROR', null);

                const response = await axios.get(`${API_URL}/comments?postId=${postId}`);
                commit('SET_USER_COMMENTS', response.data);
            } catch (error) {
                commit('SET_ERROR', 'Failed to fetch user comments');
                console.error('Error fetching user comments:', error);
            } finally {
                commit('SET_LOADING', false);
            }
        },

        async fetchUserAlbumsByUserId({ commit }, userId) {
            try {
                commit('SET_LOADING', true);
                commit('SET_ERROR', null);

                const response = await axios.get(`${API_URL}/albums?userId=${userId}`);
                commit('SET_USER_ALBUMS', response.data);
            } catch (error) {
                commit('SET_ERROR', 'Failed to fetch user albums');
                console.error('Error fetching user albums:', error);
            } finally {
                commit('SET_LOADING', false);
            }
        },

        async toggleTodoStatus({ commit }, todoId: number) {
            try {
                commit('TOGGLE_TODO_STATUS', todoId);
            } catch (error) {
                commit('SET_ERROR', 'Failed to update todo status');
                console.error('Error updating todo status:', error);
            }
        },
    }
};