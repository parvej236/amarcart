<template>
  <div class="relative group">
    <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
    
    <div class="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full">
      
      <div class="relative h-40 overflow-hidden">
        <img :src="product.image" :alt="product.name" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <span class="absolute top-3 right-3 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/50 text-cyan-400 text-[10px] uppercase font-bold px-2 py-1 rounded-md">
          Premium
        </span>
      </div>

      <div class="p-4 flex flex-col flex-grow">
        <h3 class="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
          {{ product.name }}
        </h3>
        
        <p class="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">
          {{ product.desc }}
        </p>

        <div class="mt-auto pt-5 flex items-center justify-between">
          <div class="flex flex-col">
            <span class="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">Price</span>
            <span class="text-xl font-black text-white">
              {{ product.price }}<span class="text-cyan-500 ml-1">৳</span>
            </span>
          </div>

          <button 
            @click="buyOnDiscord"
            class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-800"
          >
            <span class="relative px-3 py-2 transition-all ease-in duration-75 bg-slate-900 rounded-md group-hover:bg-opacity-0">
              Buy Now
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['product']);

const buyOnDiscord = () => {
  // Add your Discord user ID or Server Link here
  const discordLink = "https://discord.gg/your-link"; 
  const message = `I want to buy: ${props.product.name} (${props.product.price} BDT)`;
  
  // This opens Discord with a pre-filled prompt (optional logic)
  window.open(`${discordLink}?message=${encodeURIComponent(message)}`, '_blank');
};
</script>

<style scoped>
/* Clamp text to 2 lines to keep cards uniform height */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>