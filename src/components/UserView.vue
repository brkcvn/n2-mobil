<template>
  <div class="p-4 lg:ltr:ml-[278px] lg:rtl:mr-[278px] lg:ltr:pr-7 lg:rtl:pl-7 lg:mt-11 lg:mb-16">
    <h1 class="lg:text-xl font-semibold mb-4 lg:mb-[35px]">All Users</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <RouterLink :to="`/users/${user.id}/todos`" v-for="user in mockUsers" :key="user.id" class="block">
        <UserCard :user="user" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import UserCard from './UserCards.vue';
import { User } from '../types';

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Jane Doe',
    email: 'jane@lorem.com',
    phone: '+90 555 678 12 23',
    avatar: 'src/assets/images/user-first.png',
    location: 'Timko sokak no:2\nYeni Mahalle / Ankara',
    company: 'Timko sokak no:2\nYeni Mahalle / Ankara',
    website: 'jane.doe.com'
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john@lorem.com',
    phone: '+90 555 678 12 23',
    avatar: 'src/assets/images/user-second.png',
    location: 'Timko sokak no:2\nYeni Mahalle / Ankara',
    company: 'Timko sokak no:2\nYeni Mahalle / Ankara',
    website: 'john.doe.com'
  },
  {
    id: '3',
    name: 'Nazlı UYSAL',
    email: 'nazli.uysal@lorem.com',
    phone: '+90 555 678 12 23',
    avatar: 'src/assets/images/user-third.png',
    location: 'Timko sokak no:2\nYeni Mahalle / Ankara',
    company: 'Timko sokak no:2\nYeni Mahalle / Ankara',
    website: 'nazli.uysal.com'
  },
  {
    id: '1',
    name: 'Jane Doe',
    email: 'jane@lorem.com',
    phone: '+90 555 678 12 23',
    avatar: 'src/assets/images/user-first.png',
    location: 'Timko sokak no:2\nYeni Mahalle / Ankara',
    company: 'Timko sokak no:2\nYeni Mahalle / Ankara',
    website: 'jane.doe.com'
  },
  {
    id: '2',
    name: 'John Doe',
    email: 'john@lorem.com',
    phone: '+90 555 678 12 23',
    avatar: 'src/assets/images/user-second.png',
    location: 'Timko sokak no:2\nYeni Mahalle / Ankara',
    company: 'Timko sokak no:2\nYeni Mahalle / Ankara',
    website: 'john.doe.com'
  },
  {
    id: '3',
    name: 'Nazlı UYSAL',
    email: 'nazli.uysal@lorem.com',
    phone: '+90 555 678 12 23',
    avatar: 'src/assets/images/user-third.png',
    location: 'Timko sokak no:2\nYeni Mahalle / Ankara',
    company: 'Timko sokak no:2\nYeni Mahalle / Ankara',
    website: 'nazli.uysal.com'
  }
];
</script>