<template>
  <div class="min-h-screen font-poppins">
    <SideNav :active-menu="activeMenu" />
    <HamburgerMenu :active-menu="activeMenu" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SideNav from './components/SideNav.vue';
import HamburgerMenu from './components/HamburgerMenu.vue';

const activeMenu = ref('users');
</script>