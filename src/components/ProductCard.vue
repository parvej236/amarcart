<template>
  <div class="relative group h-full">
    <div class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
    
    <div class="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full">
      
      <div class="relative h-32 md:h-40 overflow-hidden">
        <img :src="product.image" :alt="product.name" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        
        <div class="absolute top-2 left-2 right-2 flex justify-between items-start">
          <span class="bg-cyan-500/20 backdrop-blur-md border border-cyan-500/50 text-cyan-400 text-[8px] md:text-[10px] uppercase font-bold px-2 py-1 rounded-md">
            Premium
          </span>
          
          <button @click.stop="shareProduct" class="p-2 bg-slate-800/80 border border-white/10 rounded-full text-slate-300 hover:text-cyan-400 transition-colors">
            <Share2Icon class="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div class="p-3 md:p-4 flex flex-col flex-grow">
        <h3 class="text-sm md:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
          {{ product.name }}
        </h3>
        
        <p class="text-slate-400 text-[10px] md:text-xs mt-1 line-clamp-1 italic">
          {{ product.desc }}
        </p>

        <div class="mt-3">
          <button 
            @click="isExpanded = !isExpanded"
            class="text-[10px] md:text-xs text-cyan-500 font-bold flex items-center gap-1 hover:text-cyan-400 transition-colors"
          >
            {{ isExpanded ? 'বন্ধ করুন' : 'বিস্তারিত দেখুন' }}
            <ChevronDownIcon :class="{'rotate-180': isExpanded}" class="w-3.5 h-3.5 transition-transform duration-300" />
          </button>
          
          <div 
            v-if="isExpanded" 
            class="mt-2 text-slate-300 text-[11px] md:text-sm leading-relaxed font-light animate-slide-down whitespace-pre-line border-l-2 border-cyan-500/30 pl-3"
          >
            {{ product.longDesc }}
          </div>
        </div>

        <div class="mt-auto pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div class="flex flex-col">
            <span class="text-[8px] text-slate-500 uppercase font-semibold tracking-wider">Price</span>
            <span class="text-lg font-black text-white">
              {{ product.price }}<span class="text-cyan-500 ml-0.5">৳</span>
            </span>
          </div>

          <button @click="buyOnDiscord" class="bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-[10px] md:text-xs font-bold px-4 py-2 rounded-lg active:scale-95 transition-all shadow-lg shadow-cyan-900/20">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Share2Icon, ChevronDownIcon } from 'lucide-vue-next';

const props = defineProps(['product']);
const isExpanded = ref(false);

const shareProduct = async () => {
  const shareData = {
    title: `Digital World - ${props.product.name}`,
    text: props.product.longDesc,
    url: window.location.href
  };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(`${shareData.text}\nBuy here: ${shareData.url}`);
      alert('প্রোডাক্ট ডিটেইলস কপি করা হয়েছে!');
    }
  } catch (err) { console.log('Share failed', err) }
};

const buyOnDiscord = () => {
  const discordInvite = "https://discord.gg/9ABp3AycC";
  const message = `হ্যালো! আমি এই প্রোডাক্টটি কিনতে চাই:\n📦 নাম: ${props.product.name}\n💰 দাম: ${props.product.price} BDT`;
  
  navigator.clipboard.writeText(message).then(() => {
    alert("অর্ডার ডিটেইলস কপি করা হয়েছে! ডিসকর্ড সার্ভারে পেস্ট করুন।");
    window.open(discordInvite, '_blank');
  });
};
</script>

<style scoped>
/* Improved Animation for Mobile */
.animate-slide-down {
  animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideDown {
  from { 
    opacity: 0; 
    transform: translateY(-10px); 
    max-height: 0;
  }
  to { 
    opacity: 1; 
    transform: translateY(0);
    max-height: 500px;
  }
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>```