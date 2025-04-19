<template>
  <div class="py-4 lg:py-0 px-4 lg:ltr:ml-[278px] lg:rtl:mr-[278px] lg:ltr:pr-7 lg:rtl:pl-7 lg:mt-11 lg:mb-16">
    <h1 class="lg:text-xl font-semibold mb-4 lg:mb-[35px]">All Users</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <RouterLink :to="`/users/${user.id}/todos`" v-for="user in users" :key="user.id" class="block">
        <UserCard :user="user" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import UserCard from './UserCards.vue';
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

const store = useStore();
const users = computed(() => store.getters['user/getUsers']);

onMounted(async () => {
  try {
    await store.dispatch('user/fetchUsers');
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});

</script>