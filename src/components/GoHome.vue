<template>
    <div class="flex items-center gap-6 cursor-pointer" @click="goHome">
        <ArrowLeftIcon class="w-8 h-8" />
        <span class="text-xl font-semibold">Go Home</span>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ArrowLeftIcon from './icons/ArrowLeftIcon.vue';

const router = useRouter();



const goHome = () => {
    router.push('/');
};
</script>