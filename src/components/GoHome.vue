<template>
    <div class="flex items-center gap-6 cursor-pointer mb-6 lg:mb-[80px]" @click="goHome">
        <ArrowLeftIcon class="w-8 h-8" />
        <span class="text-xl font-semibold">Go Home</span>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import TodoItem from './TodoItem.vue';
import ArrowLeftIcon from './icons/ArrowLeftIcon.vue';

const router = useRouter();

const toggleTodoStatus = (index: number) => {
    todos.value[index].completed = !todos.value[index].completed;
};

const goHome = () => {
    router.push('/');
};
</script>