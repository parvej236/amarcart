<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-3xl font-bold text-white mb-8 text-center">Our Premium Products</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
      <ProductCard v-for="item in products" :key="item.id" :product="item" />
    </div>
    
    <div class="mt-16 text-center py-8 bg-slate-900/50 rounded-xl border border-dashed border-slate-700">
      <p class="text-cyan-400 font-mono text-lg uppercase tracking-widest">100% Authentic Products</p>
    </div>
  </div>
</template>

<script setup>
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard.vue';
</script>