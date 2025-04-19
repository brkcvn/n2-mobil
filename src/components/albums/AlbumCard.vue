<template>
    <div class="bg-white border border-primary_light_gray rounded-xl p-5 cursor-pointer hover:shadow-2xl transition-shadow duration-300"
        @click="handleClick">
        <div class="grid grid-cols-2 mb-4">
            <div class="w-full aspect-square overflow-hidden">
                <BaseImage :src="album?.images[0]" alt="Album image" class="w-full h-full object-cover" />
            </div>
            <div class="w-full aspect-square overflow-hidden">
                <BaseImage :src="album?.images[1]" alt="Album image" class="w-full h-full object-cover" />
            </div>
            <div class="w-full aspect-square overflow-hidden">
                <BaseImage :src="album?.images[2]" alt="Album image" class="w-full h-full object-cover" />
            </div>
            <div class="w-full aspect-square overflow-hidden">
                <BaseImage :src="album?.images[3]" alt="Album image" class="w-full h-full object-cover" />
            </div>
        </div>

        <h3 class="text-sm font-normal text-primary_dark_blue truncate">{{ album?.title }}</h3>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import BaseImage from '../BaseImage.vue';
import { AlbumViewProps } from '../../types';

const props = defineProps<{
    album: AlbumViewProps
}>();

const emit = defineEmits<{
    (e: 'click', album: AlbumViewProps): void
}>();

const handleClick = () => {
    emit('click', props.album);
};
</script>