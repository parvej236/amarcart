<template>
  <div class="relative group h-full">
    <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-10 group-hover:opacity-60 transition duration-500"></div>
    
    <div class="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full">
      
      <div class="relative h-32 md:h-40 overflow-hidden">
        <img :src="product.image" :alt="product.name" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <span class="absolute top-2 right-2 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/50 text-cyan-400 text-[8px] md:text-[10px] uppercase font-bold px-2 py-1 rounded-md">
          Premium
        </span>
      </div>

      <div class="p-3 md:p-4 flex flex-col flex-grow">
        <h3 class="text-sm md:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-1">
          {{ product.name }}
        </h3>
        
        <p class="text-slate-400 text-[10px] md:text-xs mt-1 md:mt-2 line-clamp-2 leading-relaxed">
          {{ product.desc }}
        </p>

        <div class="mt-auto pt-3 md:pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div class="flex flex-col">
            <span class="text-[8px] md:text-[10px] text-slate-500 uppercase font-semibold tracking-wider">Price</span>
            <span class="text-lg md:text-xl font-black text-white">
              {{ product.price }}<span class="text-cyan-500 ml-0.5">৳</span>
            </span>
          </div>

          <button 
            @click="buyOnDiscord"
            class="relative w-full sm:w-auto inline-flex items-center justify-center p-0.5 overflow-hidden text-xs md:text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 hover:text-white focus:ring-2 focus:outline-none focus:ring-cyan-800 transition-all duration-300 active:scale-95"
          >
            <span class="relative w-full px-4 py-1.5 md:px-5 md:py-2 transition-all ease-in duration-75 bg-slate-900 rounded-md group-hover:bg-opacity-0">
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
  const discordInvite = "https://discord.gg/9ABp3AycC";
  const message = `Hello! I would like to purchase: ${props.product.name} for ${props.product.price} BDT.`;

  // Copy order info to clipboard so the user can easily paste it in Discord
  navigator.clipboard.writeText(message).then(() => {
    alert("Order details copied to clipboard! Paste it in the Discord server.");
    window.open(discordInvite, '_blank');
  }).catch(() => {
    // Fallback if clipboard fails
    window.open(discordInvite, '_blank');
  });
};
</script>

<style scoped>
/* Tailwind handles most of this, but keeping your logic for line-clamping */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>