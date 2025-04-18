<template>
    <div class="p-4 lg:p-0 lg:ltr:ml-[278px] lg:rtl:mr-[278px] lg:ltr:pr-7 lg:rtl:pl-7 lg:mb-16 mt-4 lg:mt-[42px]">
        <GoHome />
        
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-4 lg:my-8">
            <div v-for="album in albums" :key="album.id">
                <AlbumCard :album="album" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AlbumCard from './AlbumCard.vue';
import GoHome from '../GoHome.vue';

interface Album {
    id: number;
    title: string;
    images: string[];
}

export default defineComponent({
    name: 'AlbumsView',
    components: {
        AlbumCard,
        GoHome
    },
    data() {
        return {
            albums: [
                {
                    id: 1,
                    title: 'Non esse culpa molestiae omnis sed ol...',
                    images: [
                        '/assets/albums/album1.jpg',
                        '/assets/albums/album2.jpg',
                        '/assets/albums/album3.jpg',
                        '/assets/albums/album4.jpg'
                    ]
                },
                {
                    id: 2,
                    title: 'Non esse culpa molestiae omnis sed ol...',
                    images: [
                        '/assets/albums/album1.jpg',
                        '/assets/albums/album2.jpg',
                        '/assets/albums/album3.jpg',
                        '/assets/albums/album5.jpg'
                    ]
                },
                {
                    id: 3,
                    title: 'Non esse culpa molestiae omnis sed ol...',
                    images: [
                        '/assets/albums/album1.jpg',
                        '/assets/albums/album2.jpg',
                        '/assets/albums/album3.jpg',
                        '/assets/albums/album4.jpg'
                    ]
                },
                {
                    id: 4,
                    title: 'Non esse culpa molestiae omnis sed ol...',
                    images: [
                        '/assets/albums/album1.jpg',
                        '/assets/albums/album2.jpg',
                        '/assets/albums/album3.jpg',
                        '/assets/albums/album4.jpg'
                    ]
                },
                {
                    id: 5,
                    title: 'Non esse culpa molestiae omnis sed ol...',
                    images: [
                        '/assets/albums/album1.jpg',
                        '/assets/albums/album2.jpg',
                        '/assets/albums/album3.jpg',
                        '/assets/albums/album4.jpg'
                    ]
                },
                {
                    id: 6,
                    title: 'Non esse culpa molestiae omnis sed ol...',
                    images: [
                        '/assets/albums/album7.jpg',
                        '/assets/albums/album2.jpg',
                        '/assets/albums/album3.jpg',
                        '/assets/albums/album4.jpg'
                    ]
                },
                {
                    id: 7,
                    title: 'Non esse culpa molestiae omnis sed ol...',
                    images: [
                        '/assets/albums/album1.jpg',
                        '/assets/albums/album2.jpg',
                        '/assets/albums/album3.jpg',
                        '/assets/albums/album4.jpg'
                    ]
                },
                {
                    id: 8,
                    title: 'Non esse culpa molestiae omnis sed ol...',
                    images: [
                        '/assets/albums/album1.jpg',
                        '/assets/albums/album2.jpg',
                        '/assets/albums/album3.jpg',
                        '/assets/albums/album4.jpg'
                    ]
                },
                {
                    id: 9,
                    title: 'Non esse culpa molestiae omnis sed ol...',
                    images: [
                        '/assets/albums/album1.jpg',
                        '/assets/albums/album2.jpg',
                        '/assets/albums/album3.jpg',
                        '/assets/albums/album4.jpg'
                    ]
                }
            ] as Album[]
        };
    }
});
</script>