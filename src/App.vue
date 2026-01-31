<template>
  <div class="min-h-screen bg-[#f5f5f5] text-black">
    <NavBar />
    <main class="min-h-[calc(100vh-120px)]">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>
