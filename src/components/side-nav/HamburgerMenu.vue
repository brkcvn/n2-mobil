<template>
  <div>
    <button @click="toggleMenu"
      class="lg:hidden fixed top-2 ltr:right-4 rtl:left-4 z-50 bg-white p-2 rounded-md shadow-md focus:outline-none"
      aria-label="Toggle menu">
      <div class="w-6 h-5 flex flex-col justify-between">
        <span class="w-full h-0.5 bg-primary_black block transition-all duration-300"
          :class="{ 'rotate-45 mt-[7px]': isOpen }"></span>
        <span class="w-full h-0.5 bg-primary_black block transition-all duration-300"
          :class="{ 'opacity-0': isOpen }"></span>
        <span class="w-full h-0.5 bg-primary_black block transition-all duration-300"
          :class="{ '-rotate-45 mb-[10px]': isOpen }"></span>
      </div>
    </button>

    <div v-if="isOpen" @click="closeMenu"
      class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"></div>

    <div
      class="lg:hidden fixed top-0 ltr:left-0 rtl:right-0 h-full w-[250px] bg-white shadow-lg transform transition-transform duration-300 z-40"
      :class="{ 'ltr:-translate-x-full rtl:translate-x-full': !isOpen, 'translate-x-0': isOpen }">
      <SideNav :is-open="isOpen" :users />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SideNav from './SideNav.vue';
import { User } from '@/types';

const isOpen = ref(false);

defineProps<{
  users?: User[];
}>();

const toggleMenu = () => {
  isOpen.value = !isOpen.value;

  if (isOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  isOpen.value = false;
  document.body.style.overflow = '';
};
</script>