<template>
  <div class="p-4 lg:p-0 lg:ltr:ml-[278px] lg:rtl:mr-[278px] lg:ltr:pr-7 lg:rtl:pl-7 lg:mb-16 mt-4 lg:mt-[42px]">
    <GoHome />

    <PostCard v-for="post in posts" :key="post.id" :id="post.id" :title="post.title" :content="post.content" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PostCard from './PostCard.vue';
import GoHome from '../GoHome.vue';
import { PostViewProps } from '../../types';



const posts = ref<PostViewProps[]>([
  {
    id: 1,
    title: 'Post Title',
    content: 'Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala with Chief Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms. Veena George'
  },
  {
    id: 2,
    title: 'Post Title',
    content: 'Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala with Chief Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms. Veena George'
  },
  {
    id: 3,
    title: 'Post Title',
    content: 'Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala with Chief Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms. Veena George'
  },
  {
    id: 4,
    title: 'Post Title',
    content: 'Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala with Chief Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms. Veena George'
  },
  {
    id: 5,
    title: 'Post Title',
    content: 'Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala with Chief Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms. Veena George'
  },
  {
    id: 6,
    title: 'Post Title',
    content: 'Body Union Health Minister Shri Mansukh Mandaviya reviews #COVID19 response in Kerala with Chief Minister Shri Pinarayi Vijayan and Health Minister of Kerala, Ms. Veena George'
  }
]);
</script>