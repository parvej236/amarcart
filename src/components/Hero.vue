<template>
  <section class="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-20">
    <div ref="experience" class="absolute inset-0 z-0 touch-none"></div>

    <div class="container mx-auto px-4 md:px-6 relative z-10">
      <div class="flex flex-col items-center text-center">
        
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] md:text-xs font-bold mb-8 animate-fade-in shadow-lg shadow-cyan-500/5">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Trusted Digital Partner
        </div>

        <h1 class="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter mb-6 leading-[0.85] select-none">
          Digital<br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
            PRoduct
          </span>
        </h1>

        <p class="text-slate-400 text-xs md:text-lg max-w-lg md:max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-4">
          আপনার পছন্দের প্রিমিয়াম সাবস্ক্রিপশন এবং ডিজিটাল টুলস কিনুন অবিশ্বাস্য দামে। 
          ১০০% অথেন্টিক এবং সুপার ফাস্ট ডেলিভারি।
        </p>

        <div class="w-full max-w-xl px-4 md:px-0 relative group mb-12">
          <div class="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-focus-within:opacity-50 transition duration-500"></div>
          <div class="relative flex items-center">
            <SearchIcon class="absolute left-4 md:left-6 w-5 h-5 text-slate-400" />
            <input 
              v-model="searchQuery"
              type="text" 
              placeholder="Search products..." 
              class="w-full bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-2xl py-4 md:py-5 pl-12 md:pl-16 pr-6 text-sm md:text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 transition-all shadow-2xl"
            />
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4">
          <button @click="scrollToShop" class="w-full sm:w-auto px-10 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl md:rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/20">
            SHOP NOW
          </button>
          
          <button class="w-full sm:w-auto px-10 py-4 bg-slate-800/40 backdrop-blur-md border border-white/10 text-white font-bold rounded-xl md:rounded-2xl hover:bg-slate-700 transition-all active:scale-95">
            CONTACT US
          </button>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020617] to-transparent z-[1]"></div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { SearchIcon } from 'lucide-vue-next';
import * as THREE from 'three';

const experience = ref(null);
const searchQuery = ref('');

let renderer, scene, camera, mesh, geometry;

const initThree = () => {
  scene = new THREE.Scene();
  
  // Dynamic FOV based on screen width
  const isMobile = window.innerWidth < 768;
  camera = new THREE.PerspectiveCamera(isMobile ? 90 : 75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = isMobile ? 6 : 5;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  experience.value.appendChild(renderer.domElement);

  // Responsive Geometry: Lower segments on mobile for performance
  geometry = new THREE.PlaneGeometry(
    isMobile ? 12 : 20, 
    isMobile ? 12 : 15, 
    isMobile ? 30 : 60, 
    isMobile ? 30 : 60
  );
  
  const material = new THREE.MeshStandardMaterial({
    color: 0x0ea5e9,
    wireframe: true,
    transparent: true,
    opacity: 0.15,
  });

  mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x = -1.0;
  scene.add(mesh);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0x06b6d4, 5);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  const animate = () => {
    const time = Date.now() * 0.0008;
    const positions = geometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      positions[i + 2] = Math.sin(x * 0.3 + time) * Math.cos(y * 0.3 + time) * 0.8;
    }
    geometry.attributes.position.needsUpdate = true;
    
    mesh.rotation.z = time * 0.05;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();
};

const handleResize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};

onMounted(() => {
  initThree();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  renderer.dispose();
  geometry.dispose();
});

const scrollToShop = () => {
  document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1.2s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Fix for mobile text stroke/clipping */
h1 {
  -webkit-text-size-adjust: 100%;
}
</style>