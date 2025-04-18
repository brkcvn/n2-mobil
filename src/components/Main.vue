<template>
    <div class="min-h-screen font-poppins">
        <SideNav :users=mockUsers />
        <HamburgerMenu :users=mockUsers />
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import SideNav from '../components/side-nav/SideNav.vue';
import HamburgerMenu from '../components/side-nav/HamburgerMenu.vue';
import { User } from '../types';

const mockUsers: User[] = [
    {
        id: '1',
        name: 'Jane Doe',
        email: 'jane@lorem.com',
        phone: '+90 555 678 12 23',
        avatar: 'user-first.png',
        location: 'Timko sokak no:2\nYeni Mahalle / Ankara',
        company: 'Timko sokak no:2\nYeni Mahalle / Ankara',
        website: 'jane.doe.com',
    },
    {
        id: '2',
        name: 'John Doe',
        email: 'john@lorem.com',
        phone: '+90 555 678 12 23',
        avatar: 'user-second.png',
        location: 'Timko sokak no:2\nYeni Mahalle / Ankara',
        company: 'Timko sokak no:2\nYeni Mahalle / Ankara',
        website: 'john.doe.com'
    },
    {
        id: '3',
        name: 'Nazlı UYSAL',
        email: 'nazli.uysal@lorem.com',
        phone: '+90 555 678 12 23',
        avatar: 'user-third.png',
        location: 'Timko sokak no:2\nYeni Mahalle / Ankara',
        company: 'Timko sokak no:2\nYeni Mahalle / Ankara',
        website: 'nazli.uysal.com'
    },
    {
        id: '1',
        name: 'Jane Doe',
        email: 'jane@lorem.com',
        phone: '+90 555 678 12 23',
        avatar: 'user-first.png',
        location: 'Timko sokak no:2\nYeni Mahalle / Ankara',
        company: 'Timko sokak no:2\nYeni Mahalle / Ankara',
        website: 'jane.doe.com'
    },
    {
        id: '2',
        name: 'John Doe',
        email: 'john@lorem.com',
        phone: '+90 555 678 12 23',
        avatar: 'user-second.png',
        location: 'Timko sokak no:2\nYeni Mahalle / Ankara',
        company: 'Timko sokak no:2\nYeni Mahalle / Ankara',
        website: 'john.doe.com'
    },
    {
        id: '3',
        name: 'Nazlı UYSAL',
        email: 'nazli.uysal@lorem.com',
        phone: '+90 555 678 12 23',
        avatar: 'user-third.png',
        location: 'Timko sokak no:2\nYeni Mahalle / Ankara',
        company: 'Timko sokak no:2\nYeni Mahalle / Ankara',
        website: 'nazli.uysal.com'
    }
];
</script>