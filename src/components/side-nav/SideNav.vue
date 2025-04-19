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
      <div class="flex flex-col gap-5 mb-10 px-4 mt-4 lg:mt-8">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <BaseImage :src="userAvatar" :alt="userName" class="w-full h-full object-cover" />
          </div>
          <div class="flex flex-col">
            <h3 class="text-sm lg:text-lg font-medium text-primary_black">{{ userName }}</h3>
            <a :href="`mailto:${userEmail}`" class="text-xs lg:text-sm text-primary_gray border-b-2">{{ userEmail }}</a>
          </div>
        </div>
        <div class="border-b border-primary_light_gray"></div>
      </div>

      <SideNavItem url="todos" :icon="CheckupListIcon" />
      <SideNavItem url="posts" :icon="NotebookIcon" />
      <SideNavItem url="albums" :icon="PhotoHeartIcon" />
    </template>
    <RouterLink to="/" class="absolute bottom-8 left-4 right-4 pt-6 border-t-2 border-primary_light_gray flex items-center justify-center gap-2">
      <BaseImage src="assets/images/logo.png" alt="logo" />
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import clsx from 'clsx';
import { RouterLink } from 'vue-router';
import UsersIcon from '../icons/UsersIcon.vue';
import SideNavItem from './SideNavItem.vue';
import CheckupListIcon from '../icons/CheckupListIcon.vue';
import NotebookIcon from '../icons/NotebookIcon.vue';
import PhotoHeartIcon from '../icons/PhotoHeartIcon.vue';
import BaseImage from '../BaseImage.vue';
import { UserProps } from '@/types';

const props = defineProps<{
  isOpen?: boolean;
  users?: UserProps[];
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

const userId = ref('');
const userName = ref('');
const userEmail = ref('');
const userAvatar = ref('');


watch(() => route.params, (params) => {
  userId.value = params?.id as string;

  const user = props?.users?.find(user => String(user?.id) === userId?.value);
  if (user) {
    userName.value = user.name;
    userEmail.value = user.email;
    userAvatar.value = user.avatar
  }
}, { immediate: true, deep: true });
</script>