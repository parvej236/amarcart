<template>
  <div class="min-h-screen bg-slate-950 text-white py-16 relative overflow-hidden flex items-center justify-center font-sans">
    <div class="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px]"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-2xl mx-auto">
        
        <div class="text-center mb-10">
          <h2 class="text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            Contact Support
          </h2>
          <p class="text-slate-400 text-lg">
            Choose your preferred platform to start a conversation.
          </p>
        </div>

        <div class="bg-slate-900/40 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl">
          
          <div class="flex justify-center mb-10">
            <div class="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/5 shadow-inner">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span class="text-xs font-bold text-slate-300 uppercase tracking-[0.15em]">Support Live</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="https://discord.gg/9ABp3AycC" target="_blank" class="group relative flex flex-col items-center p-8 rounded-3xl bg-slate-800/40 border border-transparent hover:border-[#5865F2]/50 transition-all duration-500">
              <div class="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(88,101,242,0.4)]">
                <svg class="w-12 h-12" viewBox="0 0 127.14 96.36" xmlns="http://www.w3.org/2000/svg">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.06,72.06,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.78,56.63.51,80.21a105.73,105.73,0,0,0,32.29,16.15,77.7,77.7,0,0,0,7.37-12,67.65,67.65,0,0,1-11.9-5.69c.91-.66,1.8-1.34,2.66-2a75.6,75.6,0,0,0,65.23,0c.87.71,1.76,1.39,2.66,2a67.88,67.88,0,0,1-11.9,5.69,77,77,0,0,0,7.37,12,105.27,105.27,0,0,0,32.33-16.14C130.49,52.25,119.82,28.53,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5.07-12.73,11.41-12.73S54,46,53.89,53,48.81,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5.07-12.73,11.44-12.73S96.23,46,96.12,53,91.06,65.69,84.69,65.69Z" fill="#5865F2"/>
                </svg>
              </div>
              <span class="font-bold text-slate-200 tracking-wide">Discord</span>
            </a>

            <a href="#" class="group relative flex flex-col items-center p-8 rounded-3xl bg-slate-800/40 border border-transparent hover:border-[#25D366]/50 transition-all duration-500">
              <div class="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(37,211,102,0.4)]">
                <svg class="w-12 h-12" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.5-.3-8.5 2.4-11.2 2.5-2.6 5.5-6.5 8.3-9.8 2.8-3.2 3.7-5.5 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" fill="#25D366"/>
                </svg>
              </div>
              <span class="font-bold text-slate-200 tracking-wide">WhatsApp</span>
            </a>

            <a href="#" class="group relative flex flex-col items-center p-8 rounded-3xl bg-slate-800/40 border border-transparent hover:border-[#00B2FF]/50 transition-all duration-500">
              <div class="w-16 h-16 flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,178,255,0.4)]">
                <svg class="w-12 h-12" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.61-22.7C105.41 430.13 512 430.13 512 248.57 512 110.34 396.58 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.08 43.46a15 15 0 0 0 18 0l78.37-59.44c10.46-7.93 24.16 4.6 17.11 15.67z" fill="url(#messenger-grad)"/>
                  <defs>
                    <linearGradient id="messenger-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" style="stop-color:#00B2FF;stop-opacity:1" />
                      <stop offset="100%" style="stop-color:#006AFF;stop-opacity:1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span class="font-bold text-slate-200 tracking-wide">Messenger</span>
            </a>
          </div>

          <div class="mt-12 flex flex-col items-center gap-4">
            <div class="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <div class="flex items-center gap-3 text-slate-400 text-sm">
              <div class="p-2 rounded-full bg-slate-800/80">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span>Average response time: <strong class="text-white">~15 minutes</strong></span>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <p class="text-slate-600 text-[13px] tracking-[0.2em] uppercase font-medium">
            &copy; 2026 Digital World.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>