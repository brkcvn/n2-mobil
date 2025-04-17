import { createRouter, createWebHistory } from 'vue-router';

import TodosView from './components/TodosView.vue';
import UserView from './components/UserView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: UserView
        },
        {
            path: '/users/:id/todos',
            name: 'todos',
            component: TodosView,
            props: true
        }
    ]
});

export default router;