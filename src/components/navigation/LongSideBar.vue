<script setup>
import PlaceholderBlock from '../placeholders/PlaceholderBlock.vue'

defineEmits(['onCategory', 'onSubCategory', 'onSubSubCategory'])
</script>

<template>
  <aside class="sidebar-panel">
    <PlaceholderBlock
      title="Long Sidebar"
      body="Expanded category and filter navigation."
    />
  </aside>
</template>
