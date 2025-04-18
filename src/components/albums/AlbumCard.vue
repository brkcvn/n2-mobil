<template>
    <div class="bg-white border border-primary_light_gray rounded-xl p-5 cursor-pointer hover:shadow-2xl transition-shadow duration-300"
        @click="$emit('click', album)">
        <div class="grid grid-cols-2 mb-4">
            <div class="w-full aspect-square overflow-hidden">
                <BaseImage :src="album.images[0]" alt="Album image" class="w-full h-full object-cover" />
            </div>
            <div class="w-full aspect-square overflow-hidden">
                <BaseImage :src="album.images[1]" alt="Album image" class="w-full h-full object-cover" />
            </div>
            <div class="w-full aspect-square overflow-hidden">
                <BaseImage :src="album.images[2]" alt="Album image" class="w-full h-full object-cover" />
            </div>
            <div class="w-full aspect-square overflow-hidden">
                <BaseImage :src="album.images[3]" alt="Album image" class="w-full h-full object-cover" />
            </div>
        </div>

        <h3 class="text-sm font-normal text-primary_dark_blue truncate">{{ album.title }}</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import BaseImage from '../BaseImage.vue';

interface Album {
    id: number;
    title: string;
    images: string[];
}

export default defineComponent({
    name: 'AlbumCard',
    components: {
        BaseImage
    },
    props: {
        album: {
            type: Object as PropType<Album>,
            required: true
        }
    },
    emits: ['click']
});
</script>