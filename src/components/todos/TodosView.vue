<template>
    <div class="p-4 lg:p-0 lg:ltr:ml-[278px] lg:rtl:mr-[278px] lg:ltr:pr-7 lg:rtl:pl-7 lg:mb-16 mt-4 lg:mt-[42px]">
        <div class="flex items-center gap-6 cursor-pointer mb-6 lg:mb-[80px]" @click="goHome">
            <ArrowLeftIcon class="w-8 h-8" />
            <span class="text-xl font-semibold">Go Home</span>
        </div>

        <div class="">
            <div class="flex flex-col gap-4">
                <TodoItem v-for="(todo, index) in todos" :key="index" :todo="todo" @toggle="toggleTodoStatus(index)" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from 'vue';
import { useRouter } from 'vue-router';
import TodoItem from './TodoItem.vue';
import ArrowLeftIcon from '../icons/ArrowLeftIcon.vue';

const router = useRouter();

provide('activeMenu', 'todos');

const todos = ref([
    { text: 'Curabitur tempor quis eros tempus lacinia.', completed: true },
    { text: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque.', completed: false },
    { text: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut', completed: false },
    { text: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum', completed: false },
    { text: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam', completed: false },
    { text: 'Curabitur tempor quis eros tempus lacinia. Nama convallis. Sed ut', completed: false },
    { text: 'Curabitur tempor quis eros tempus lacinia. Nam bibend Sed ut', completed: true },
    { text: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque Sed ut', completed: false },
    { text: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque Sed ut', completed: true },
    { text: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque Sed ut', completed: false },
    { text: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque Sed ut', completed: false },
    { text: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum', completed: false },
    { text: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque Sed ut', completed: false },
    { text: 'Curabitur tempor quis eros tempus lacinia. Sed ut', completed: true },
    { text: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum Sed ut', completed: false },
    { text: 'Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque Sed ut', completed: false }
]);

const toggleTodoStatus = (index: number) => {
    todos.value[index].completed = !todos.value[index].completed;
};

const goHome = () => {
    router.push('/');
};
</script>