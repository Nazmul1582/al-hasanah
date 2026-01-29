<script setup>
import PlaceholderBlock from '../placeholders/PlaceholderBlock.vue'

defineEmits(['onCategory', 'onSubCategory', 'onSubSubCategory'])
</script>

<template>
  <aside class="panel">
    <PlaceholderBlock
      title="Sidebar"
      body="Categories and filters will live here."
    />
  </aside>
</template>
