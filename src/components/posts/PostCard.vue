<template>
    <div
        class="flex flex-col justify-end items-end mt-3 lg:mt-6 px-4 lg:px-8 pt-5 lg:pt-0 pb-5 border-b border-primary_light_gray">
        <div class="w-full">
            <h2 class="lg:text-lg font-medium text-primary_black tracking-wide mb-2 capitalize">{{ title }}</h2>
            <p class="text-sm lg:max-w-xl text-sm text-opacity-70 text-black tracking-wide leading-relaxed capitalize">{{ body
                }}</p>
        </div>
        <div class="flex items-center mt-3 gap-x-3 lg:gap-x-6 cursor-pointer" @click="showPostDetail">
            <span class="text-sm font-medium text-primary_black cursor-pointer">See More</span>
            <ArrowRightIcon class="w-8 h-8 text-primary_purple" />
        </div>

        <PostDetail v-if="isDetailOpen" :isOpen="isDetailOpen" :post="postData" @close="closePostDetail" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import PostDetail from './PostDetail.vue';
import ArrowRightIcon from '../icons/ArrowRightIcon.vue';
import { PostViewProps } from '../../types';

const props = defineProps<PostViewProps>();

const isDetailOpen = ref(false);

const postData = computed(() => ({
    id: props.id,
    title: props.title,
    body: props.body
}));

const showPostDetail = () => {
    isDetailOpen.value = true;
    document.body.style.overflow = 'hidden';
};

const closePostDetail = () => {
    isDetailOpen.value = false;
    document.body.style.overflow = '';
};
</script>