<template>
  <div class="min-h-screen bg-[#020617] text-slate-50 selection:bg-cyan-500 selection:text-white font-sans pb-28 pt-20">

    <nav class="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <router-link to="/" class="text-2xl font-black tracking-tighter text-white">
          DIGITAL<span class="text-cyan-500">WORLD</span>
        </router-link>
        <div class="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
          <router-link to="/" class="hover:text-cyan-400 transition-colors">Home</router-link>
          <router-link to="/products" class="hover:text-cyan-400 transition-colors">Shop</router-link>
          <router-link to="/contact" class="hover:text-cyan-400 transition-colors">Contact</router-link>
        </div>
      </div>
    </nav>

    <router-view />

    <nav class="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50">
      <div class="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-3 flex items-center justify-between shadow-2xl shadow-cyan-900/20">
        
        <router-link to="/" class="flex flex-col items-center gap-1 group transition-all duration-300" active-class="active-link">
          <HomeIcon class="w-6 h-6 text-slate-400 group-[.active-link]:text-cyan-400 group-[.active-link]:scale-110 transition-transform" />
          <span class="text-[10px] font-semibold text-slate-500 group-[.active-link]:text-cyan-400 uppercase tracking-widest">Home</span>
        </router-link>

        <router-link to="/products" class="flex flex-col items-center gap-1 group transition-all duration-300" active-class="active-link">
          <ShoppingBagIcon class="w-6 h-6 text-slate-400 group-[.active-link]:text-cyan-400 group-[.active-link]:scale-110 transition-transform" />
          <span class="text-[10px] font-semibold text-slate-500 group-[.active-link]:text-cyan-400 uppercase tracking-widest">Shop</span>
        </router-link>

        <router-link to="/contact" class="flex flex-col items-center gap-1 group transition-all duration-300" active-class="active-link">
          <MailIcon class="w-6 h-6 text-slate-400 group-[.active-link]:text-cyan-400 group-[.active-link]:scale-110 transition-transform" />
          <span class="text-[10px] font-semibold text-slate-500 group-[.active-link]:text-cyan-400 uppercase tracking-widest">Contact</span>
        </router-link>

      </div>
    </nav>

  </div>
</template>

<script setup>
import { HomeIcon, ShoppingBagIcon, MailIcon } from 'lucide-vue-next';
</script>

<style>
/* Keeping only standard CSS here to avoid Tailwind v4 build errors */
html {
  scroll-behavior: smooth;
}

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
</style>