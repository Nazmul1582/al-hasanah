<script setup>
import PlaceholderBlock from '../placeholders/PlaceholderBlock.vue'

defineProps({
  plainSearch: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="panel">
    <PlaceholderBlock
      title="Product List"
      body="Products will render here using GraphQL data."
    />
  </div>
</template>
