<template>
  <div class="min-h-screen bg-[#020617] text-slate-50 selection:bg-cyan-500 selection:text-white font-sans pb-28 pt-20">

    <nav class="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <router-link to="/" class="text-2xl font-black tracking-tighter text-white">
          DIGITAL<span class="text-cyan-500">WORLD</span>
        </router-link>
        <div class="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <router-link to="/" class="hover:text-cyan-400 transition-colors">Home</router-link>
          <router-link to="/products" class="hover:text-cyan-400 transition-colors">Products</router-link>
          <router-link to="/contact" class="hover:text-cyan-400 transition-colors">Support</router-link>
        </div>
      </div>
    </nav>

    <router-view />

    <nav class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-white/10">
      <div class="container mx-auto px-4 py-3 flex items-center justify-center gap-2 text-sm font-medium text-slate-300">
        <router-link to="/" class="px-3 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 transition-colors">Home</router-link>
        <router-link to="/products" class="px-3 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 transition-colors">Products</router-link>
        <router-link to="/contact" class="px-3 py-2 rounded-full bg-slate-900/80 hover:bg-slate-800 transition-colors">Support</router-link>
      </div>
    </nav>

  </div>
</template>

<script setup>
// Vue Router is now properly configured
</script>

<style>
/* Smooth scrolling for the whole page */
html {
  scroll-behavior: smooth;
}

/* Custom modern scrollbar for Dark Mode */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #020617;
}

::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #334155;
}

/* Base transitions for page elements */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>