<template>
  <nav :class="clsx(
    isOpen ? 'w-full' : 'ltr:-left-[250px] rtl:-right-[250px] ltr:lg:left-0 rtl:lg:rtl:right-0',
    'fixed lg:w-[250px] bg-[#F5F5F5] border h-screen',
    'top-0 h-screen'
  )">
    <template v-if="!showUserDetailMenu">
      <div class="flex items-center mt-8 cursor-pointer bg-white" @click="router.push('/')">
        <div class="w-1.5 h-10 bg-primary_purple ltr:rounded-r-md rtl:rounded-l-md"></div>
        <div class="py-1 ltr:pl-9 rtl:pr-9 flex items-center gap-3">
          <UsersIcon class="text-primary_purple" />
          <span class="text-lg text-primary_purple">
            Users
          </span>
        </div>
      </div>
    </template>

    <template v-if="showUserDetailMenu">
      <div class="flex flex-col gap-5 mb-5 px-4">
        <div class="flex items-center gap-4">
          <div class="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <img :src="userAvatar" :alt="userName" class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col">
            <h3 class="text-lg font-medium text-primary_dark_blue">{{ userName }}</h3>
            <p class="text-sm text-primary_gray">{{ userEmail }}</p>
          </div>
        </div>
        <div class="border-b border-primary_light_gray"></div>
      </div>

      <SideNavItem url="todos" :icon="CheckupListIcon" />
      <SideNavItem url="posts" :icon="NotebookIcon" />
      <SideNavItem url="albums" :icon="PhotoHeartIcon" />
    </template>

    <RouterLink to="/" class="absolute bottom-8 left-0 right-0 border-t border-primary_light_gray pt-6 px-4">
      <img src="../../assets/images/logo.png" alt="logo" />
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import clsx from 'clsx';
import UsersIcon from '../icons/UsersIcon.vue';
import { RouterLink } from 'vue-router';
import SideNavItem from './SideNavItem.vue';
import CheckupListIcon from '../icons/CheckupListIcon.vue';
import NotebookIcon from '../icons/NotebookIcon.vue';
import PhotoHeartIcon from '../icons/PhotoHeartIcon.vue';
import { User } from '@/types';

const props = defineProps<{
  isOpen?: boolean;
  users?: User[];
}>();

const route = useRoute();
const router = useRouter();

let currentActiveMenu = ''

const showUserDetailMenu = computed(() => {
  return route.path.includes('/users/') ||
    currentActiveMenu === 'todos' ||
    currentActiveMenu === 'posts' ||
    currentActiveMenu === 'albums';
});

const userId = route.params.id as string;
const userName = ref('');
const userEmail = ref('');
const userAvatar = ref('');

onMounted(() => {
  const user = props?.users?.find(user => user.id === userId);
  if (user) {
    userName.value = user.name;
    userEmail.value = user.email;
    userAvatar.value = user.avatar;
  }
});

</script>