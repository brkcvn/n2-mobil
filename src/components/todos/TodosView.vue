<template>
    <div class="p-4 lg:p-0 lg:ltr:ml-[278px] lg:rtl:mr-[278px] lg:ltr:pr-7 lg:rtl:pl-7 lg:mb-16 mt-4 lg:mt-[42px]">
        <GoHome />

        <div class="flex flex-col gap-4 mt-6 lg:mt-[80px]">
            <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggle="toggleTodoStatus(todo.id)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import TodoItem from './TodoItem.vue';
import GoHome from '../GoHome.vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();
const route = useRoute();
const userId = computed(() => route.params.id);
const todos = computed(() => store.getters['user/getUserTodos']);

const fetchTodosForUser = async () => {
    try {
        await store.dispatch('user/fetchUserTodosByUserId', userId?.value);
    } catch (err) {
        console.error('Error fetching todos:', err);
    }
};

onMounted(async () => {
    await fetchTodosForUser();
});

const toggleTodoStatus = (todoId: number) => {
    store.dispatch('user/toggleTodoStatus', todoId);
};
</script>