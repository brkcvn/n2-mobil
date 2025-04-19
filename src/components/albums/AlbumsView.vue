<template>
    <div>
        <div v-if="!selectedAlbum"
            class="p-4 lg:p-0 lg:ltr:ml-[278px] lg:rtl:mr-[278px] lg:ltr:pr-7 lg:rtl:pl-7 lg:mb-16 mt-4 lg:mt-[42px]">
            <GoHome />

            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-4 lg:my-8">
                <div v-for="album in albums" :key="album.id">
                    <AlbumCard :album="album" @click="showAlbumDetail" />
                </div>
            </div>
        </div>

        <AlbumDetail v-if="selectedAlbum" :album="selectedAlbum" @back="goBackToAlbums" />
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import AlbumCard from './AlbumCard.vue';
import AlbumDetail from './AlbumDetail.vue';
import GoHome from '../GoHome.vue';
import { AlbumViewProps } from '../../types';

const store = useStore();
const route = useRoute();
const userId = computed(() => route.params.id);
const albums = computed(() => store.getters['user/getUserAlbums']);

const fetchAlbumsForUser = async () => {
    try {
        await store.dispatch('user/fetchUserAlbumsByUserId', userId?.value);
    } catch (err) {
        console.error('Error fetching albums:', err);
    }
};

onMounted(async () => {
    await fetchAlbumsForUser();
});

const selectedAlbum = ref<AlbumViewProps | null>(null);

const showAlbumDetail = (album: AlbumViewProps) => {
    selectedAlbum.value = album;
};

const goBackToAlbums = () => {
    selectedAlbum.value = null;
};
</script>