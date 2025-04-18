<template>
    <div v-if="isOpen" class="fixed inset-4 xl:inset-0 flex items-center justify-center z-50">
        <div class="absolute -m-4 xl:m-0 inset-0 bg-primary_black bg-opacity-40" @click="closeDetail"></div>

        <div class="bg-white rounded-3xl w-full lg:max-w-5xl relative z-10">
            <div class="flex items-center justify-between p-4 lg:p-8 pb-3 lg:pb-6">
                <h2 class="text-lg lg:text-2xl font-medium text-primary_black tracking-wide">{{ post.title }}</h2>
                <div @click="closeDetail" class="cursor-pointer">
                    <CloseIcon />
                </div>
            </div>

            <div
                class="max-h-[600px] flex flex-col lg:flex-row items-start lg:divide-x lg:divide-primary_light_gray post-modal overflow-y-auto lg:overflow-auto">
                <div class="post-modal w-full lg:max-h-[500px] lg:w-1/2 px-4 lg:px-8 lg:overflow-y-auto mb-5 lg:mb-10">
                    <p class="text-sm text-opacity-70 text-black tracking-wide leading-relaxed">{{ post.content }}</p>
                </div>

                <div class="post-modal w-full lg:max-h-[500px] lg:w-1/2 px-4 lg:px-8 lg:overflow-y-auto">
                    <h3 class="font-semibold text-xl text-primary_black mb-5">Comments</h3>

                    <div class="space-y-5 lg:space-y-10 mb-5 lg:mb-10">
                        <div class="flex space-x-4">
                            <div
                                class="w-12 h-12 rounded-full bg-gray-200 border border-primary_light_gray overflow-hidden flex-shrink-0">
                                <!-- <img src="assets/images/avatar1.jpg" alt="Leyla SELİM" class="w-full h-full object-cover"> -->
                            </div>
                            <div>
                                <h4 class="font-medium text-sm text-primary_black mb-3">Leyla SELİM</h4>
                                <p class="text-sm text-primary_gray">Curabitur tempor quis eros tempus lacinia.
                                    Nam
                                    bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed
                                    leo
                                    vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum
                                    vest...
                                </p>

                            </div>
                        </div>

                        <div class="flex space-x-4">
                            <div
                                class="w-12 h-12 rounded-full bg-gray-200 border border-primary_light_gray overflow-hidden flex-shrink-0">
                                <!-- <img src="assets/images/avatar1.jpg" alt="Leyla SELİM" class="w-full h-full object-cover"> -->
                            </div>
                            <div>
                                <h4 class="font-medium text-sm text-primary_black mb-3">Leyla SELİM</h4>
                                <p class="text-sm text-primary_gray">Curabitur tempor quis eros tempus lacinia.
                                    Nam
                                    bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed
                                    leo
                                    vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum
                                    vest...
                                </p>
                            </div>
                        </div>

                        <div class="flex space-x-4">
                            <div
                                class="w-12 h-12 rounded-full bg-gray-200 border border-primary_light_gray overflow-hidden flex-shrink-0">
                                <!-- <img src="assets/images/avatar1.jpg" alt="Leyla SELİM" class="w-full h-full object-cover"> -->
                            </div>
                            <div>
                                <h4 class="font-medium text-sm text-primary_black mb-3">Leyla SELİM</h4>
                                <p class="text-sm text-primary_gray">Curabitur tempor quis eros tempus lacinia.
                                    Nam
                                    bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed
                                    leo
                                    vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum
                                    vest...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import CloseIcon from '../icons/CloseIcon.vue';
import type { PostDetailProps } from '../../types';



defineProps<{
    isOpen: boolean;
    post: PostDetailProps;
}>();

const emit = defineEmits<{
    (e: 'close'): void
}>();

const closeDetail = () => {
    emit('close');
};
</script>