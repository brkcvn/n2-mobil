<template>
  <div class="p-4 lg:p-0 lg:ltr:ml-[278px] lg:rtl:mr-[278px] lg:ltr:pr-7 lg:rtl:pl-7 lg:mb-16 mt-4 lg:mt-[42px]">
    <GoHome />

    <PostCard v-for="post in posts" :key="post.id" :id="post.id" :title="post.title" :body="post.body" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import PostCard from './PostCard.vue';
import GoHome from '../GoHome.vue';
import { PostViewProps } from '../../types';

const store = useStore();
const route = useRoute();
const userId = computed(() => route.params.id);
const posts = computed(() => store.getters['user/getUserPosts']) as unknown as PostViewProps[];

const fetchPostsForUser = async () => {
  try {
    await store.dispatch('user/fetchUserPostsByUserId', userId?.value);
  } catch (err) {
    console.error('Error fetching posts:', err);
  }
};

onMounted(async () => {
  await fetchPostsForUser();
});
</script>