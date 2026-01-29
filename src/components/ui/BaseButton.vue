<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'primary',
  },
})
</script>

<template>
  <button :class="['btn', variant]">
    <slot>{{ label }}</slot>
  </button>
</template>
