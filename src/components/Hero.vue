<template>
  <section class="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-12 md:pt-20">
    <div ref="experience" class="absolute inset-0 z-0 touch-none"></div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="flex flex-col items-center text-center">
        
        <h1 class="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter mb-4 md:mb-6 leading-[0.85] select-none">
          DIGITAL<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
            WORLD
          </span>
        </h1>

        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] md:text-xs font-bold mb-6 animate-fade-in">
          <span class="relative flex h-1.5 w-1.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-500"></span>
          </span>
          Trusted Digital Partner
        </div>

        <p class="hidden md:block text-slate-400 text-sm md:text-lg max-w-lg md:max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
          আপনার পছন্দের প্রিমিয়াম সাবস্ক্রিপশন কিনুন অবিশ্বাস্য দামে। 
        </p>

        <div class="w-full max-w-md md:max-w-xl relative group mb-8 md:mb-12">
          <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-10 group-focus-within:opacity-40 transition duration-500"></div>
          <div class="relative flex items-center">
            <SearchIcon class="absolute left-4 w-4 h-4 text-slate-500" />
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search products..." 
              class="w-full bg-slate-900/60 backdrop-blur-2xl border border-white/5 rounded-xl py-3.5 md:py-5 pl-10 md:pl-16 pr-4 text-xs md:text-base text-white focus:outline-none focus:border-cyan-500/40 transition-all"
            />
          </div>
        </div>

        <div class="flex flex-row items-center justify-center gap-3 w-full sm:w-auto px-2">
          <button @click="scrollToShop" class="flex-1 sm:flex-none px-6 md:px-10 py-3.5 md:py-4 bg-cyan-500 text-slate-950 text-xs md:text-sm font-black rounded-xl transition-all active:scale-95 shadow-lg shadow-cyan-500/20">
            SHOP NOW
          </button>
          
          <button class="flex-1 sm:flex-none px-6 md:px-10 py-3.5 md:py-4 bg-slate-800/60 backdrop-blur-md border border-white/10 text-white text-xs md:text-sm font-bold rounded-xl hover:bg-slate-700 transition-all active:scale-95">
            CONTACT
          </button>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#020617] to-transparent z-[1]"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { SearchIcon } from 'lucide-vue-next';
import * as THREE from 'three';

const experience = ref(null);
const searchQuery = ref('');

// Three.js logic stays same but with refined camera height
let renderer, scene, camera, mesh, geometry;

const initThree = () => {
  scene = new THREE.Scene();
  const isMobile = window.innerWidth < 768;
  
  // Adjusted camera to show more grid at the bottom
  camera = new THREE.PerspectiveCamera(isMobile ? 100 : 75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, isMobile ? 7 : 5);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  experience.value.appendChild(renderer.domElement);

  geometry = new THREE.PlaneGeometry(25, 20, isMobile ? 35 : 65, isMobile ? 35 : 65);
  const material = new THREE.MeshStandardMaterial({
    color: 0x0ea5e9,
    wireframe: true,
    transparent: true,
    opacity: 0.12,
  });

  mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -1.2; // Tilted more to save vertical space
  scene.add(mesh);

  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const animate = () => {
    const time = Date.now() * 0.0006;
    const positions = geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      positions[i + 2] = Math.sin(x * 0.4 + time) * Math.cos(y * 0.4 + time) * 0.6;
    }
    geometry.attributes.position.needsUpdate = true;
    mesh.rotation.z = time * 0.03;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
};

const handleResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onMounted(() => {
  initThree();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const scrollToShop = () => {
  document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>