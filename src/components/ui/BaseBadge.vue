<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <span class="badge">
    <slot>{{ label }}</slot>
  </span>
</template>
