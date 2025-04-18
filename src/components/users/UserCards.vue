<template>
  <div
    class="bg-white border border-primary_light_gray rounded-xl py-5 px-6 w-full hover:shadow-2xl transition-shadow duration-300">
    <div class="flex flex-col gap-8">
      <div class="flex gap-4">
        <div class="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
          <BaseImage :src="user.avatar || ''" :alt="user.name" class="w-full h-full object-cover" />
        </div>
        <div class="flex flex-col">
          <h3 class="lg:text-lg font-medium text-primary_black">{{ user.name }}</h3>
          <p class="text-sm text-primary_gray">{{ user.email }}</p>
          <p class="text-sm text-primary_gray">{{ user.phone }}</p>
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-x-4">
            <MapHeartIcon />

            <span class="text-sm font-medium text-primary_black">Location</span>
          </div>
          <p class="text-sm text-primary_gray whitespace-pre-line font-light">{{ user.location }}</p>
        </div>

        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-x-4">
            <BuildingSkycrapperIcon />
            <span class="text-sm font-medium text-primary_black">Company</span>
          </div>
          <p class="text-sm text-primary_gray whitespace-pre-line font-light">{{ user.company }}</p>
        </div>

        <div class="flex flex-col gap-1">
          <div class="flex items-center gap-x-4">
            <WorldShareIcon />
            <span class="text-sm font-medium text-primary_black">Website</span>
          </div>
          <p class="text-sm text-primary_gray font-light">{{ user.website }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from '../../types';
import BuildingSkycrapperIcon from '../icons/BuildingSkycrapperIcon.vue';
import MapHeartIcon from '../icons/MapHeartIcon.vue';
import WorldShareIcon from '../icons/WorldShareIcon.vue';
import BaseImage from '../BaseImage.vue';

defineProps<{
  user: User;
}>();
</script>