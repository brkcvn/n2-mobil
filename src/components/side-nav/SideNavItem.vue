<template>
    <div class="flex items-center mt-6 cursor-pointer" :class="{ 'bg-white': route.path.includes(url) }"
        @click="navigateToUserPage(url)">
        <div class="w-1.5 h-10 bg-primary_purple ltr:rounded-r-md rtl:rounded-l-md" v-if="route.path.includes(url)">
        </div>
        <div class="w-1.5 h-10 bg-transparent ltr:rounded-r-md rtl:rounded-l-md" v-else></div>
        <div class="py-1 ltr:pl-9 rtl:pr-9 flex items-center gap-3">
            <component :is="icon" :class="route.path.includes(url) ? 'text-primary_purple' : 'text-primary_gray'" />
            <span class="lg:text-lg"
                :class="{ 'text-primary_purple': route.path.includes(url), 'text-gray-500': !route.path.includes(url) }">
                {{ url.charAt(0).toUpperCase() + url.slice(1) }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

defineProps<{
    url: string;
    icon: any; 
}>();

const route = useRoute();
const router = useRouter();

const navigateToUserPage = (page: string) => {
    const userId = route.params.id;
    if (userId) {
        router.push(`/users/${userId}/${page}`);
    }
};
</script>