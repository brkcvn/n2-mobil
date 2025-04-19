<template>
    <div class="p-4 lg:p-0 lg:ltr:ml-[278px] lg:rtl:mr-[278px] lg:ltr:pr-7 lg:rtl:pl-7 lg:mb-16 mt-4 lg:mt-[42px]">
        <div @click="handleBack" class="flex items-center gap-6 mb-8 cursor-pointer">
            <ArrowLeftIcon class="w-8 h-8" />
            <span class="text-xl font-semibold text-primary_dark_blue">Go Albums</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            <div v-for="(image, index) in album.images" :key="index" class="aspect-square overflow-hidden">
                <BaseImage :src="image" :alt="`Album image ${index + 1}`" class="w-full h-full" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import ArrowLeftIcon from '../icons/ArrowLeftIcon.vue';
import BaseImage from '../BaseImage.vue';
import { AlbumViewProps } from '../../types';

defineProps<{
    album: AlbumViewProps
}>();

const emit = defineEmits<{
    (e: 'back'): void
}>();

const handleBack = () => {
    emit('back');
};
</script>