<template>
    <div v-if="isOpen" class="fixed inset-4 xl:inset-0 flex items-center justify-center z-50">
        <div class="absolute -m-4 xl:m-0 inset-0 bg-primary_black bg-opacity-40" @click="closeDetail"></div>

        <div class="bg-white rounded-3xl w-full lg:max-w-5xl relative z-10">
            <div class="flex items-center justify-between p-4 lg:p-8 pb-3 lg:pb-6">
                <h2 class="text-lg lg:text-2xl font-medium text-primary_black tracking-wide capitalize">{{ post.title }}
                </h2>
                <div @click="closeDetail" class="cursor-pointer">
                    <CloseIcon />
                </div>
            </div>

            <div
                class="max-h-[600px] flex flex-col lg:flex-row items-start lg:divide-x lg:divide-primary_light_gray post-modal overflow-y-auto lg:overflow-auto">
                <div class="post-modal w-full lg:max-h-[500px] lg:w-1/2 px-4 lg:px-8 lg:overflow-y-auto mb-5 lg:mb-10">
                    <p class="text-sm text-opacity-70 text-black tracking-wide leading-relaxed capitalize">{{ post.body
                        }}</p>
                </div>

                <div class="post-modal w-full lg:max-h-[500px] lg:w-1/2 px-4 lg:px-8 lg:overflow-y-auto">
                    <h3 class="font-semibold text-xl text-primary_black mb-5">Comments</h3>

                    <div class="space-y-5 lg:space-y-10 mb-5 lg:mb-10">
                        <div v-for="comment in comments" :key="comment.id" class="flex ltr:space-x-4 rtl:space-x-reverse">
                            <div
                                class="w-12 h-12 rounded-full bg-gray-200 border border-primary_light_gray overflow-hidden flex-shrink-0">
                                <BaseImage :src="comment?.avatar" alt="user avatar"
                                    class="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 class="font-medium text-sm text-primary_black mb-3 capitalize">{{ comment?.name }}
                                </h4>
                                <p class="text-sm text-primary_gray capitalize">{{ comment?.body }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CloseIcon from '../icons/CloseIcon.vue';
import type { PostDetailProps } from '../../types';
import BaseImage from '../BaseImage.vue';

const { isOpen, post } = defineProps<{
    isOpen: boolean;
    post: PostDetailProps;
}>();

const store = useStore();
const comments = computed(() => store.getters['user/getUserComments']);

const fetchCommentsForUser = async () => {
    try {
        await store.dispatch('user/fetchCommentsByPostId', post.id);
    } catch (err) {
        console.error('Error fetching comments:', err);
    }
};

onMounted(async () => {
    await fetchCommentsForUser();
});

const emit = defineEmits<{
    (e: 'close'): void
}>();

const closeDetail = () => {
    emit('close');
};
</script>