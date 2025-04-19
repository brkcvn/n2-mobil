import { AlbumProps, StateProps, CommentProps, UserProps, TodoProps, PostProps } from '@/types';
import { apiService } from '../../api/apiService';

export default {
    namespaced: true,

    state: (): StateProps => ({
        users: [],
        userTodos: [],
        userPosts: [],
        userComments: [],
        userAlbums: [],
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
        async fetchData({ commit }, { apiMethod, mutationType, errorMessage }) {
            try {
                commit('SET_ERROR', null);

                const data = await apiMethod();
                commit(mutationType, data);

                return data;
            } catch (error) {
                commit('SET_ERROR', errorMessage);
                console.error(errorMessage, error);
            }
        },

        async fetchUsers({ dispatch }) {
            return dispatch('fetchData', {
                apiMethod: apiService.fetchUsers,
                mutationType: 'SET_USERS',
                errorMessage: 'Failed to fetch users'
            });
        },

        async fetchUserTodosByUserId({ dispatch }, userId) {
            return dispatch('fetchData', {
                apiMethod: () => apiService.fetchUserTodos(userId),
                mutationType: 'SET_USER_TODOS',
                errorMessage: 'Failed to fetch user todos'
            });
        },

        async fetchUserPostsByUserId({ dispatch }, userId) {
            return dispatch('fetchData', {
                apiMethod: () => apiService.fetchUserPosts(userId),
                mutationType: 'SET_USER_POSTS',
                errorMessage: 'Failed to fetch user posts'
            });
        },

        async fetchCommentsByPostId({ dispatch }, postId) {
            return dispatch('fetchData', {
                apiMethod: () => apiService.fetchPostComments(postId),
                mutationType: 'SET_USER_COMMENTS',
                errorMessage: 'Failed to fetch comments'
            });
        },

        async fetchUserAlbumsByUserId({ dispatch }, userId) {
            return dispatch('fetchData', {
                apiMethod: () => apiService.fetchUserAlbums(userId),
                mutationType: 'SET_USER_ALBUMS',
                errorMessage: 'Failed to fetch user albums'
            });
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