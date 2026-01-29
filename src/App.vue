<template>
  <div class="app">
    <header class="site-header">
      <RouterLink class="brand" to="/">Al-Hasanah</RouterLink>
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </header>
    <main class="site-main">
      <RouterView />
    </main>
    <footer class="site-footer">
      <p>Learning build. Step-by-step documentation in docs/.</p>
    </footer>
  </div>
</template>
