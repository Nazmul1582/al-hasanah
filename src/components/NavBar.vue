<template>
  <header class="border-b border-[#e4dccf] bg-white">
    <div class="mx-auto flex max-w-[1280px] items-center justify-between gap-5 px-6 py-4">
      <RouterLink class="text-[1.1rem] font-bold tracking-[0.02em]" to="/">
        Al-Hasanah
      </RouterLink>
      <nav class="flex items-center gap-4 font-medium">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/products/">Products</RouterLink>
        <RouterLink to="/categories/">Categories</RouterLink>
        <RouterLink to="/brands/">Brands</RouterLink>
        <RouterLink to="/shops/">Shops</RouterLink>
        <RouterLink to="/login/">Login</RouterLink>
      </nav>
    </div>
  </header>
</template>
