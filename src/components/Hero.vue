<template>
  <section class="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950">
    <div ref="canvasContainer" class="absolute inset-0 opacity-50"></div>
    
    <div class="relative z-10 text-center px-4">
      <h1 class="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-4">
        Upgrade You with Digital World
      </h1>
      <p class="text-xl text-gray-300 mb-8 italic">"Make your life more easy"</p>
      
      <div class="max-w-md mx-auto">
        <input type="text" placeholder="Search premium products..." 
          class="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-cyan-500" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as THREE from 'three';

const canvasContainer = ref(null);

onMounted(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  canvasContainer.value.appendChild(renderer.domElement);

  const geometry = new THREE.IcosahedronGeometry(2, 2);
  const material = new THREE.MeshStandardMaterial({ color: 0x00f3ff, wireframe: true });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(5, 5, 5);
  scene.add(light);
  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.005;
    sphere.rotation.x += 0.002;
    renderer.render(scene, camera);
  };
  animate();
});
</script>