<template>
  <nav :class="clsx(
    isOpen ? 'w-full' : 'ltr:-left-[250px] rtl:-right-[250px] ltr:lg:left-0 rtl:lg:rtl:right-0',
    'fixed lg:w-[250px] bg-[#F5F5F5] border h-screen',
    'top-0 h-screen'
  )">
    <div class="flex items-center mt-8" :class="{
      'bg-white': activeMenu === 'users',
    }">
      <div class="w-1.5 h-10 bg-primary_purple ltr:rounded-r-md rtl:rounded-l-md"></div>
      <div class="py-1 ltr:pl-9 rtl:pr-9 flex items-center gap-3">
        <UsersIcon class="text-primary_purple" />
        <span class="text-lg"
          :class="{ 'text-white': activeMenu !== 'users', 'text-primary_purple': activeMenu === 'users' }">
          Users
        </span>
      </div>
    </div>
    <RouterLink to="/" class="absolute bottom-8 left-0 right-0 border-t border-ligt-primary_light_gray pt-6 px-4">
      <img src="../assets/images/logo.png" alt="logo" />
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import clsx from 'clsx';
import UsersIcon from './icons/UsersIcon.vue';
import { RouterLink } from 'vue-router'

defineProps<{
  activeMenu: string;
  isOpen?: boolean;
}>();
</script>
