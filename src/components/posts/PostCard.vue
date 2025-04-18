<template>
    <div class="flex flex-col justify-end items-end mt-3 lg:mt-6 px-4 lg:px-8 pb-5 border-b border-primary_light_gray">
        <div class="w-full">
            <h2 class="lg:text-lg font-medium text-primary_black tracking-wide mb-2">{{ title }}</h2>
            <p class="text-sm lg:max-w-xl text-sm text-opacity-70 text-black tracking-wide leading-relaxed">{{ content
                }}</p>
        </div>
        <div class="flex items-center mt-3 gap-x-3 lg:gap-x-6 cursor-pointer" @click="showPostDetail">
            <span class="text-sm font-medium text-primary_black cursor-pointer">See More</span>
            <BaseImage src="assets/images/next.png" alt="next" />
        </div>

        <PostDetail v-if="isDetailOpen" :isOpen="isDetailOpen" :post="postData" @close="closePostDetail" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseImage from '../BaseImage.vue';
import PostDetail from './PostDetail.vue';

export default defineComponent({
    name: 'PostCard',
    components: {
        BaseImage,
        PostDetail
    },
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            isDetailOpen: false
        };
    },
    computed: {
        postData() {
            return {
                id: this.id,
                title: this.title,
                content: this.content
            };
        }
    },
    methods: {
        showPostDetail() {
            this.isDetailOpen = true;
            document.body.style.overflow = 'hidden'; 
        },
        closePostDetail() {
            this.isDetailOpen = false;
            document.body.style.overflow = ''; 
        }
    }
});
</script>