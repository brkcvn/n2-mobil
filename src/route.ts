import { createRouter, createWebHistory } from 'vue-router';

import TodosView from './components/todos/TodosView.vue';
import UserView from './components/users/UserView.vue';
import PostsView from './components/posts/PostsView.vue';
import AlbumsView from './components/albums/AlbumsView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: UserView,
            props: true
        },
        {
            path: '/users/:id/todos',
            name: 'todos',
            component: TodosView,
            props: true
        },
        {
            path: '/users/:id/posts',
            name: 'posts',
            component: PostsView,
            props: true
        },
        {
            path: '/users/:id/albums',
            name: 'albums',
            component: AlbumsView
        }
    ]
});

export default router;