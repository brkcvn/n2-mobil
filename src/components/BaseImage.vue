<!-- BaseImage.vue -->
<template>
    <div :class="[
        wrapperClass,
        { 'animate-pulse bg-gray-200': isLoading || hasError }
    ]">
        <img v-if="!hasError" :src="formattedSrc" :alt="alt" :class="imageClass" @load="handleImageLoaded"
            @error="handleImageError" v-bind="$attrs" />
        <div v-if="hasError && showFallback" :class="[
            'flex items-center justify-center w-full h-full',
            imageClass
        ]">
            <slot name="error">
                <div class="flex flex-col items-center justify-center p-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span class="text-sm">Image not load</span>
                </div>
            </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface Props {
    src: string;
    alt?: string;
    wrapperClass?: string;
    imageClass?: string;
    showFallback?: boolean;
    fallbackSrc?: string;
}

const props = withDefaults(defineProps<Props>(), {
    alt: '',
    wrapperClass: '',
    imageClass: 'w-full h-full object-cover',
    showFallback: true,
    fallbackSrc: ''
});

const emit = defineEmits(['load', 'error']);

const isLoading = ref(true);
const hasError = ref(false);

const formattedSrc = computed(() => {
    if (!props.src || props.src.startsWith('http') || props.src.startsWith('data:') || props.src.startsWith('/')) {
        return props.src;
    }

    return `/${props.src}`;
});

const useFallbackIfAvailable = computed(() => {
    if (props.fallbackSrc && hasError.value) {
        return props.fallbackSrc.startsWith('/') || props.fallbackSrc.startsWith('http')
            ? props.fallbackSrc
            : `/${props.fallbackSrc}`;
    }
    return null;
});

const handleImageLoaded = () => {
    isLoading.value = false;
    hasError.value = false;
    emit('load');
};

const handleImageError = () => {
    isLoading.value = false;
    hasError.value = true;
    emit('error');

    if (props.fallbackSrc && !props.src.includes(props.fallbackSrc)) {
        props.src = props.fallbackSrc;
    }
};
</script>