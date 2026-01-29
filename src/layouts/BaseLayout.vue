<template>
  <div class="app">
    <header class="site-header">
      <RouterLink class="brand" to="/">Al-Hasanah</RouterLink>
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products/">Products</RouterLink>
        <RouterLink to="/categories/">Categories</RouterLink>
        <RouterLink to="/brands/">Brands</RouterLink>
        <RouterLink to="/shops/">Shops</RouterLink>
        <RouterLink to="/login/">Login</RouterLink>
      </nav>
    </header>
    <main class="site-main">
      <slot />
    </main>
    <footer class="site-footer">
      <p>Learning build. Step-by-step documentation in docs/.</p>
    </footer>
  </div>
</template>
