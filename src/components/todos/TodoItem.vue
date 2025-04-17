<template>
    <div class="flex items-center gap-4">
        <div class="w-6 h-6 border-2 rounded cursor-pointer flex items-center justify-center flex-shrink-0"
            :class="{ 'bg-primary_purple border-primary_purple': todo.completed, 'border-gray-500': !todo.completed }"
            @click="$emit('toggle')">
            <CheckIcon v-if="todo.completed" class="text-white w-4 h-4" />
        </div>
        <p class="text-sm text-gray-700" :class="{ 'line-through': todo.completed }">
            {{ todo.text }}
        </p>
    </div>
</template>

<script setup lang="ts">
import CheckIcon from '../icons/CheckIcon.vue';

defineProps<{
    todo: {
        text: string;
        completed: boolean;
    };
}>();

defineEmits(['toggle']);
</script>