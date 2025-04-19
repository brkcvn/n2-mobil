<template>
    <div class="min-h-screen font-poppins">
        <SideNav :users="users" />
        <HamburgerMenu :users="users" />
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import SideNav from '../components/side-nav/SideNav.vue';
import HamburgerMenu from '../components/side-nav/HamburgerMenu.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const users = computed(() => store.getters['user/getUsers']);
</script>