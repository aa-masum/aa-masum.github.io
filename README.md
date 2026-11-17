# Portfolio (Next.js + Tailwind)

## লোকালি চালানো
1. Node.js 20+ ইনস্টল করুন (nodejs.org)
2. টার্মিনালে এই ফোল্ডারে গিয়ে:
   npm install
   npm run dev
3. ব্রাউজারে http://localhost:3000 খুলুন

## কনটেন্ট বদলানো
শুধু `data/content.js` এডিট করুন (নাম, প্রজেক্ট, পাবলিকেশন, টাইমলাইন)।
ছোট লুপ ভিডিও `public/videos/` এ রাখুন, তারপর প্রজেক্টে `video: '/videos/নাম.mp4'` দিন।
লম্বা ভিডিও YouTube-এ আপলোড করে `youtube: 'VIDEO_ID'` দিন।

## GitHub Pages-এ লাইভ করা
1. GitHub-এ `yourusername.github.io` নামে রিপো বানান (yourusername = আপনার GitHub ইউজারনেম)
2. এই ফোল্ডারের সব ফাইল সেই রিপোতে `main` ব্রাঞ্চে পুশ করুন
3. রিপোর Settings → Pages → Source: **GitHub Actions** সিলেক্ট করুন
4. ২-৩ মিনিট পর সাইট লাইভ: https://yourusername.github.io

## ছবি, GIF ও ভিডিও যোগ করা
- ফাইল রাখার জায়গা: ছবি/GIF → `public/images/`, ভিডিও → `public/videos/`
- `data/content.js` এর উপরে `heroImage` (প্রথম পেজের ডান অর্ধেক) ও `aboutImage` (About ব্যাকগ্রাউন্ড) এ পথ লিখুন।
- নিচের `gallery` তালিকায় লাইন যোগ করলে "In motion" সেকশন চালু হবে।
- সাইজ: হিরো ছবি ~1600px চওড়া, ৫০০KB এর নিচে; ভিডিও ৫MB এর নিচে (mp4); বড় GIF এর বদলে mp4 ব্যবহার করুন।
