export const products = [
  { 
    id: 1, 
    name: 'ChatGPT Plus', 
    price: 2500, 
    color: 'from-emerald-500 to-green-600', 
    desc: 'Shared/Private high-speed access', 
    longDesc: '• GPT-4 ও GPT-4o এর পূর্ণ অ্যাক্সেস\n• DALL-E 3 দিয়ে ইমেজ জেনারেট করার সুবিধা\n• পিক টাইমেও দ্রুত রেসপন্স টাইম\n• নতুন সব এআই ফিচার সবার আগে ব্যবহারের সুযোগ',
    image: 'https://placehold.co/400x300/064e3b/fff?text=ChatGPT' 
  },
  { 
    id: 2, 
    name: 'Gemini Advanced', 
    price: 2200, 
    color: 'from-blue-500 to-purple-600', 
    desc: 'Google’s most capable AI model', 
    longDesc: '• গুগলের সবচেয়ে শক্তিশালী এআই মডেল ১.৫ প্রো\n• ২ টেরাবাইট গুগল ড্রাইভ স্টোরেজ ফ্রি\n• ডক্স এবং জিমেইলে এআই রাইটিং অ্যাসিস্ট্যান্ট\n• জটিল কোডিং ও ডাটা অ্যানালাইসিসে পারদর্শী',
    image: 'https://placehold.co/400x300/1e3a8a/fff?text=Gemini' 
  },
  { 
    id: 3, 
    name: 'Claude 3 Opus', 
    price: 2800, 
    color: 'from-orange-400 to-amber-700', 
    desc: 'Superior coding & reasoning', 
    longDesc: '• হিউম্যান-লাইক টেক্সট জেনারেশন সুবিধা\n• বড় ফাইল এবং লং-কন্টেন্ট সামারাইজ করার ক্ষমতা\n• কোডিং এবং লজিক্যাল ম্যাথ সমাধানে সেরা\n• ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিংয়ে অত্যন্ত নির্ভুল',
    image: 'https://placehold.co/400x300/7c2d12/fff?text=Claude' 
  },
  { 
    id: 4, 
    name: 'Canva Pro', 
    price: 500, 
    color: 'from-purple-500 to-pink-600', 
    desc: 'Full design toolkit for 1 year', 
    longDesc: '• ১ কোটি+ প্রিমিয়াম স্টক ফটো ও ভিডিও\n• ব্যাকগ্রাউন্ড রিমুভার এবং ম্যাজিক এডিট সুবিধা\n• কাস্টম ব্র্যান্ড কিট ও ফন্ট আপলোড\n• হাই-কোয়ালিটি এসভিজি (SVG) ফরম্যাটে ডাউনলোড',
    image: 'https://placehold.co/400x300/4c1d95/fff?text=Canva' 
  },
  { 
    id: 5, 
    name: 'Spotify Premium', 
    price: 150, 
    color: 'from-green-400 to-emerald-600', 
    desc: 'Individual/Family plans available', 
    longDesc: '• সম্পূর্ণ অ্যাড-ফ্রি মিউজিক এক্সপেরিয়েন্স\n• অফলাইনে শোনার জন্য আনলিমিটেড ডাউনলোড\n• হাই-ফিডেলিটি (Hi-Fi) অডিও কোয়ালিটি\n• যেকোনো গান আনলিমিটেড স্কিপ করার সুবিধা',
    image: 'https://placehold.co/400x300/064e3b/fff?text=Spotify' 
  },
  { 
    id: 6, 
    name: 'YouTube Premium', 
    price: 200, 
    color: 'from-red-500 to-orange-600', 
    desc: 'Ad-free & Background play', 
    longDesc: '• ভিডিওর শুরুতে বা মাঝে কোনো বিজ্ঞাপন নেই\n• ব্যাকগ্রাউন্ড প্লে (স্ক্রিন বন্ধ রেখেও শোনা যাবে)\n• ইউটিউব মিউজিক প্রিমিয়াম সম্পূর্ণ ফ্রি\n• অফলাইন স্মার্ট ডাউনলোড সুবিধা',
    image: 'https://placehold.co/400x300/7f1d1d/fff?text=YouTube' 
  },
  { 
    id: 7, 
    name: 'Netflix UHD', 
    price: 400, 
    color: 'from-red-600 to-black', 
    desc: '4K Screen sharing account', 
    longDesc: '• আল্ট্রা এইচডি (4K) এবং HDR ভিডিও কোয়ালিটি\n• একাউন্টে নিজস্ব প্রোফাইল ও পিন লক সুবিধা\n• যেকোনো ডিভাইসে লগইন করার ক্ষমতা\n• নিরবচ্ছিন্ন মুভি ও ওয়েব সিরিজ স্ট্রিমিং',
    image: 'https://placehold.co/400x300/450a0a/fff?text=Netflix' 
  },
  { 
    id: 8, 
    name: 'Adobe Creative Cloud', 
    price: 3500, 
    color: 'from-red-500 to-indigo-700', 
    desc: 'All apps, 100GB Cloud', 
    longDesc: '• ফটোশপ, ইলাস্ট্রেটর সহ ২০+ প্রিমিয়াম অ্যাপ\n• ১০০ জিবি অ্যাডোবি ক্লাউড স্টোরেজ\n• জেনারেটিভ ফিল (Generative Fill) এআই সুবিধা\n• সম্পূর্ণ অফিসিয়াল জেনুইন সাবস্ক্রিপশন',
    image: 'https://placehold.co/400x300/312e81/fff?text=Adobe' 
  },
  { 
    id: 9, 
    name: 'Microsoft 365', 
    price: 800, 
    color: 'from-blue-400 to-blue-700', 
    desc: 'Office apps + 1TB OneDrive', 
    longDesc: '• লেটেস্ট ওয়ার্ড, এক্সেল এবং পাওয়ারপয়েন্ট\n• ১ টেরাবাইট নিরাপদ ওয়ান-ড্রাইভ স্টোরেজ\n• ৫টি ডিভাইসে একসাথে ব্যবহারের সুবিধা\n• অ্যাডভান্সড সিকিউরিটি এবং র্যানসমওয়্যার প্রোটেকশন',
    image: 'https://placehold.co/400x300/172554/fff?text=Office' 
  },
  { 
    id: 10, 
    name: 'Grammarly Premium', 
    price: 600, 
    color: 'from-emerald-400 to-cyan-600', 
    desc: 'Expert writing assistance', 
    longDesc: '• অ্যাডভান্সড গ্রামার এবং স্পেলিং চেক\n• লেখার টোন এবং ক্লারিটি ইমপ্রুভমেন্ট\n• প্লাজিয়ারিজম (Plagiarism) ডিটেক্টর সুবিধা\n• প্রফেশনাল এবং একাডেমিক রাইটিং এর জন্য সেরা',
    image: 'https://placehold.co/400x300/064e3b/fff?text=Grammarly' 
  },
];