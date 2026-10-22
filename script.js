/* =========================================================================
   A LITTLE UNIVERSE MADE JUST FOR STUTI  —  script.js
   =========================================================================

   ╔═══════════════════════════════════════════════════════════════════════╗
   ║                      CUSTOMIZATION GUIDE                              ║
   ╠═══════════════════════════════════════════════════════════════════════╣
   ║ Everything personal lives in the "EDIT ME" area just below           ║
   ║ (Parts A to F). Change the text between the quotation marks "".      ║
   ║ You never need to touch anything under the line that says            ║
   ║ "END OF EDIT-ME AREA".                                                ║
   ║                                                                       ║
   ║  PART A  birthdayConfig  names, date, messages, letters, music name  ║
   ║  PART B  photos          the 8 gallery photos + their captions       ║
   ║  PART C  timeline        your love-story milestones                  ║
   ║  PART D  reasons         the "little things I love" cards            ║
   ║                                                                       ║
   ║ RULES FOR EDITING                                                     ║
   ║  • Keep the quotation marks "" and the commas , at the line ends.    ║
   ║  • To write a quote inside text use \"  (backslash + quote).         ║
   ║  • In long letters, a blank line between paragraphs is written as    ║
   ║    \n\n  (already done for you — just keep them).                    ║
   ║  • Photos: put the files in assets/images/ and keep the file names   ║
   ║    below (or change the path here if you use a different name /      ║
   ║    .png / .jpeg). File names are case-sensitive online.              ║
   ╚═══════════════════════════════════════════════════════════════════════╝
   ========================================================================= */


/* ═══════════════════════════════════════════════════════════════════════
   PART A — MAIN MESSAGES & SETTINGS         (edit the text in quotes)
   ═══════════════════════════════════════════════════════════════════════ */
const birthdayConfig = {

  /* --- Names & date ------------------------------------------------- */
  girlfriendName: "Stuti",
  birthdayDate:   "23 October",
  siteTitle:      "A Little Universe Made Just for Stuti",

  /* --- Intro screen ------------------------------------------------- */
  introLine: "The world became a little more beautiful the day you were born.",

  /* --- Hero section ------------------------------------------------- */
  heroPhoto:   "assets/images/hero.jpg",     // <-- REPLACE: your main photo
  heroMessage: "Today the universe celebrates the day it gave me you. I built this little corner of the internet with all my heart, so that every time you open it, you remember exactly how loved you are.",

  /* --- "Open when you miss me" letter -------------------------------
     Write your letter between the backticks ` `.  Leave one EMPTY LINE
     between paragraphs.  Use as many paragraphs as you like.
     (This is a warm starting draft that invents no memories - make it
     yours: add real details, inside jokes and the things only you two know.)
  --------------------------------------------------------------------- */
  loveLetter: `Mere motto,

Babe, yaad hai jab hum first time mile the? 😭😅 Mai shirt aur lower pehen ke aaya tha aur soch raha tha ki pata nahi mera first impression kaisa padega 😂💗 But kya karta, tumse first time mil raha tha na, toh bas jaldi se jaisa tha waisa hi chala aaya. Ek time tha jab tumse milne ke liye kya pehnu ye sochna padta tha, aur ab dekho, shorts mein bhi mil sakta hu 😂😁💗 Time ke saath bahut kuch change hua, but ek cheez jo change hone ke bajaye aur strong hui, woh hai humara bond. 🥹❤️ Pehle se bhi zyada close ho gaye hain hum, aur bas aise hi hamesha rehna hai, babe. Love you, my cutie! 😘🤍♾️

Always yours,
cotusa bacha`,

  /* --- Cake wish message (shown after "Make a Wish") ---------------- */
  wishMessage: "May every wish you've ever made in silence find its way to you. May this year be gentle with you, generous with you, and full of reasons to smile. I'll be right here, cheering for you, always.",

  /* --- Secret surprise ("One Last Surprise") ------------------------
     This is the full-screen message. Keep it as one paragraph.
  --------------------------------------------------------------------- */
  secretTitle:  "One last thing, Stuti…",
  finalMessage: `My kuchupuchuu😚💗
Muje kabhi nahi laga tha ki 11th class mein ek naye college mein, bina apne friends ke, jaha mai kisi ko bhi nahi jaanta tha, waha muje tum mil jaoge. Sach batau babe, uss time maine kabhi socha bhi nahi tha ki meri life mein koi aisa aayega jo mere liye itna special ban jayega. ❤️
Aaj bhi jab mai sochta hu ki 11th mein 15 August ko maine tumhe randomly ek first text kiya tha, toh believe nahi hota ki woh ek chota sa message meri life ki itni beautiful story ki starting ban jayega. 🥹❤️ Muje kya pata tha ki jis insaan ko mai bas randomly message kar raha hu, ek din wahi insaan meri life ka itna important part ban jayega.
Babe, I'm genuinely so blessed ki maine uss din tumhe message kiya, aur usse bhi zyada blessed hu ki tumne mujhe reply kiya. 😭❤️ Thank you babe, mere uss random se message ka reply dene ke liye. Shayad tumhe idea bhi nahi hai ki tumhara woh ek reply meri life mein kitni beautiful cheez ki starting ban gaya. Agar uss din maine message nahi kiya hota, toh shayad aaj humari ye beautiful story hi nahi hoti. Aur ye sochke hi lagta hai ki I'm so lucky to have you. 🫂❤️
Tumse milna meri life ki un cheezon mein se ek hai jiske liye mai hamesha grateful rahunga. ek baat mai dil se chahta hu ki hum hamesha aise hi ek dusre ke saath rahe, ek dusre ko samjhe, support kare aur chahe situation kaisi bhi ho, ek dusre ka saath kabhi na chhode. 🥹🫶🏻
Babe, hamesha aise hi mere saath rehna, meri khushi mein, mere difficult days mein, meri har situation mein. Jaise abhi hum ek dusre ke saath hain, bas aise hi hamesha rehna. Mai bhi hamesha tumhare saath rehna chahta hu, tumhe support karna chahta hu aur tumhari life ki har khushi ka part banna chahta hu. ❤️♾️
Agar mujhe 11th class mein wapas jaane ka chance mile na babe, toh mai phir se wahi college choose karunga, phir se 15 August ka wait karunga aur phir se tumhe wahi first message karunga… kyunki mujhe end mein phir se tum hi chahiye. 😭❤️🫂
Thank you for coming into my life, babe. Thank you for being you, for being a part of my life, aur mujhe itni saari beautiful memories dene ke liye.
I love you so, so much, babe. Hamesha aise hi mere saath rehna. Meri bas yahi wish hai ki humara saath aise hi bana rahe aur hum future mein bhi aaj ki tarah ek dusre ko choose karte rahe.
I love you for forever, babe. Aaj bhi, kal bhi, aur har uss din bhi jo hum saath spend karenge. You're my favourite part of this beautiful story, and I'm always going to be grateful that one random message brought me to you. ❤️♾️🫂💋`,

  /* --- Final screen ------------------------------------------------- */
  finalTitle:  "Happy 23rd October, Stuti ❤️",
  finalPhoto:  "assets/images/memory-8.jpg",  // <-- REPLACE: the photo shown at the end
  finalLetter: `Another year of you, and I'm still amazed that I get to be part of it.

Thank you for every laugh, every patient moment, every time you made a hard day lighter without even knowing. I hope today treats you the way you deserve, with love, with cake, and with a lot of joy.

I love you. Today, and long after the candles are gone.`,
  signature:   "Made with all my heart, just for you.",

  /* --- Music ---------------------------------------------------------
     Put your MP3 at  assets/music/our-song.mp3  and write its title here.
  --------------------------------------------------------------------- */
  musicTrackName:     "Our Song",
  musicMissingMessage: "There's no song here yet. (Add your MP3 as assets/music/our-song.mp3, then refresh.)"
};


/* ═══════════════════════════════════════════════════════════════════════
   PART B — PHOTO GALLERY (8 photos)
   ───────────────────────────────────────────────────────────────────────
   For each photo:
     src:     the image path.  <-- PUT YOUR IMAGE PATH HERE
     caption: the words under the photo (also shown in the big viewer)
   Add more photos by copying a whole { ... }, line. Remove one by deleting it.
   ═══════════════════════════════════════════════════════════════════════ */
const photos = [
  { src: "assets/images/memory-1.jpg", caption: "My favourite person, my favourite memories. ❤️" },
  { src: "assets/images/memory-2.jpg", caption: "Every moment with you is worth remembering." },
  { src: "assets/images/memory-3.jpg", caption: "My smile has a little something to do with you. 🥹" },
  { src: "assets/images/memory-4.jpg", caption: "If I could relive one moment, I'd choose more time with you." },
  { src: "assets/images/memory-5.jpg", caption: "You make ordinary days feel special." },
  { src: "assets/images/memory-6.jpg", caption: "My favourite memories always have you in them." },
  { src: "assets/images/memory-7.jpg", caption: "One girl, a thousand reasons to smile. 💗" },
  { src: "assets/images/memory-8.jpg", caption: "And after every memory, I'd still choose you." }
];


/* ═══════════════════════════════════════════════════════════════════════
   PART C — OUR LOVE STORY TIMELINE
   ───────────────────────────────────────────────────────────────────────
   date:  any text you like ("14 February 2024", "Spring 2023", "Someday")
   title: the heading
   text:  the description  (placeholders — write your real story here!)
   Add or remove milestones by copying / deleting a whole { ... }, block.
   ═══════════════════════════════════════════════════════════════════════ */
const timeline = [
  { date: "ADD THE DATE",   title: "The Beginning",         text: "Write about how your story began: where you were, what you felt, what you remember most." },
  { date: "ADD THE DATE",   title: "My Favourite Memory",   text: "Write about the moment you replay in your mind the most, and what made it so special." },
  { date: "ADD THE DATE",   title: "The Little Things",     text: "Write about the small, ordinary things she does that quietly mean the world to you." },
  { date: "ADD THE DATE",   title: "My Favourite Person",   text: "Write about who she is to you, and what she has changed in you." },
  { date: "ADD THE DATE",   title: "Our Future",            text: "Write about the days you are looking forward to, the places, the plans, the promises." }
];


/* ═══════════════════════════════════════════════════════════════════════
   PART D — LITTLE THINGS I LOVE ABOUT YOU (flip cards, 8 or more)
   ───────────────────────────────────────────────────────────────────────
   title: the short words on the FRONT of the card
   text:  the message on the BACK (shown when she taps the card)
   ═══════════════════════════════════════════════════════════════════════ */
const reasons = [
  { title: "Your Smile ❤️", text: "Your smile can make even my hardest days feel better." },
  { title: "Your Support 🫶", text: "Thank you for standing beside me, even when things aren't easy." },
  { title: "Your Voice 💗", text: "Hearing your voice is one of my favourite parts of the day." },
  { title: "Your Heart 🌷", text: "I love the person you are and the kindness you carry." },
  { title: "Our Memories 🥹", text: "Every little moment with you becomes something special to me." },
  { title: "Your Understanding 🤍", text: "Thank you for trying to understand me, even when I struggle to explain myself." },
  { title: "Being Yourself ✨", text: "You never need to be anyone else to be special to me." },
  { title: "Simply You 💌", text: "Beyond every reason I could write, I love you for being you." }
];

/* ═══════════════════════════════════════════════════════════════════════
   ▲▲▲  END OF EDIT-ME AREA  ▲▲▲
   Everything below is the engine that makes the website work.
   You do not need to change anything below this line.
   ═══════════════════════════════════════════════════════════════════════ */


(function () {
  'use strict';

  const cfg = birthdayConfig;
  const root = document.documentElement;
  const body = document.body;

  /* ---------------------------------------------------------------------
     0. Small helpers
     --------------------------------------------------------------------- */
  const $ = (sel, scope) => (scope || document).querySelector(sel);
  const $$ = (sel, scope) => Array.from((scope || document).querySelectorAll(sel));
  const reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isReduced = () => reduceMq.matches;
  const rand = (min, max) => Math.random() * (max - min) + min;
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  /** Draws a heart path. (x, y) is the top-centre, s is the width. */
  function heartPath(ctx, x, y, s) {
    ctx.beginPath();
    ctx.moveTo(x, y + s * 0.35);
    ctx.bezierCurveTo(x, y, x - s * 0.5, y, x - s * 0.5, y + s * 0.35);
    ctx.bezierCurveTo(x - s * 0.5, y + s * 0.65, x - s * 0.1, y + s * 0.8, x, y + s);
    ctx.bezierCurveTo(x + s * 0.1, y + s * 0.8, x + s * 0.5, y + s * 0.65, x + s * 0.5, y + s * 0.35);
    ctx.bezierCurveTo(x + s * 0.5, y, x, y, x, y + s * 0.35);
    ctx.closePath();
  }

  /* Scroll locking (several layers may ask for it at once) */
  let scrollLocks = 0;
  function lockScroll() { scrollLocks++; root.classList.add('no-scroll'); body.classList.add('no-scroll'); }
  function unlockScroll() {
    scrollLocks = Math.max(0, scrollLocks - 1);
    if (!scrollLocks) { root.classList.remove('no-scroll'); body.classList.remove('no-scroll'); }
  }
  function resetLocks() { scrollLocks = 0; root.classList.remove('no-scroll'); body.classList.remove('no-scroll'); }

  /* Show / hide overlay layers with a fade (works with the [hidden] attribute) */
  const layerTimers = new WeakMap();
  function showLayer(node) {
    clearTimeout(layerTimers.get(node));
    node.hidden = false;
    void node.offsetWidth;                 // force a reflow so the transition runs
    node.classList.add('is-open');
  }
  function hideLayer(node, ms) {
    node.classList.remove('is-open');
    clearTimeout(layerTimers.get(node));
    layerTimers.set(node, setTimeout(() => { node.hidden = true; }, isReduced() ? 0 : (ms || 500)));
  }

  /** Splits text into words that fade in one by one (add class "is-on" to start). */
  function setWords(container, text, stepMs, startMs) {
    container.textContent = '';
    container.classList.remove('is-on');
    container.classList.add('words');
    container.style.setProperty('--step', (stepMs || 60) + 'ms');
    container.style.setProperty('--start', (startMs || 0) + 'ms');
    const words = String(text).split(/\s+/).filter(Boolean);
    words.forEach((word, i) => {
      const span = el('span', 'w', word);
      span.style.setProperty('--i', i);
      container.appendChild(span);
      if (i < words.length - 1) container.appendChild(document.createTextNode(' '));
    });
  }

  function scrollToTopInstant() {
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    void root.offsetHeight;
    root.style.scrollBehavior = '';
  }

  /* ---------------------------------------------------------------------
     1. Missing-image handling (friendly placeholder instead of a broken icon)
     --------------------------------------------------------------------- */
  function placeholderFor(label) {
    const safe = String(label).replace(/[<>&"']/g, '');
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500" viewBox="0 0 400 500">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5a1428"/><stop offset="1" stop-color="#1a060d"/></linearGradient>' +
      '<radialGradient id="r" cx=".5" cy=".42" r=".55"><stop offset="0" stop-color="#e8b4c0" stop-opacity=".32"/><stop offset="1" stop-color="#e8b4c0" stop-opacity="0"/></radialGradient></defs>' +
      '<rect width="400" height="500" fill="url(#g)"/><rect width="400" height="500" fill="url(#r)"/>' +
      '<path d="M200 292 C128 238 122 168 166 164 C186 162 197 177 200 190 C203 177 214 162 234 164 C278 168 272 238 200 292 Z" fill="#f4c9d3" fill-opacity=".85"/>' +
      '<text x="200" y="352" text-anchor="middle" font-family="Georgia,serif" font-size="24" font-style="italic" fill="#f4c9d3">Your photo goes here</text>' +
      '<text x="200" y="386" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" letter-spacing="2" fill="#d9bf8c">' + safe + '</text>' +
      '</svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  /** If the picture can't be loaded, swap in a pretty placeholder (never a broken icon). */
  function guardImage(img) {
    const useFallback = () => {
      if (img.dataset.fallback) return;
      img.dataset.fallback = '1';
      const name = (img.getAttribute('src') || 'photo').split('/').pop();
      img.src = placeholderFor(name);
      const holder = img.closest('.polaroid__photo, .hero__frame, .final__photo');
      if (holder) holder.classList.add('is-placeholder');
    };
    img.addEventListener('error', useFallback);
    if (img.complete && img.naturalWidth === 0 && img.getAttribute('src')) useFallback();
  }

  /* ---------------------------------------------------------------------
     2. Starry sky: stars, dust and floating hearts (one fixed canvas)
     --------------------------------------------------------------------- */
  function createSky(canvas) {
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dpr = 1, raf = 0, last = 0, scrollY = 0;
    let stars = [], hearts = [], dust = [];
    const starColors = ['#ffffff', '#f4c9d3', '#d9bf8c'];
    const heartColors = ['#e0708f', '#b03a5b', '#f4c9d3', '#d9bf8c'];

    function seed() {
      const small = w < 600;
      const starCount = Math.min(small ? 90 : 150, Math.round((w * h) / 9000));
      stars = Array.from({ length: starCount }, () => ({
        x: rand(0, w), y: rand(0, h), r: rand(0.3, 1.4), a: rand(0.35, 1),
        tw: rand(0.0006, 0.002), ph: rand(0, 6.28), z: rand(0.2, 1),
        c: starColors[(Math.random() * starColors.length) | 0]
      }));
      hearts = Array.from({ length: small ? 8 : 14 }, () => newHeart(true));
      dust = Array.from({ length: small ? 18 : 32 }, () => ({
        x: rand(0, w), y: rand(0, h), r: rand(0.6, 1.8), vy: rand(4, 12), a: rand(0.12, 0.4), ph: rand(0, 6.28)
      }));
    }

    function newHeart(anywhere) {
      return {
        x: rand(0, w), y: anywhere ? rand(0, h) : h + rand(20, 120),
        s: rand(8, 22), vy: rand(14, 34), sway: rand(8, 26), ph: rand(0, 6.28),
        a: rand(0.1, 0.34), c: heartColors[(Math.random() * heartColors.length) | 0]
      };
    }

    function resize() {
      const nw = window.innerWidth, nh = window.innerHeight;
      // Phones fire "resize" when the address bar slides; ignore tiny height changes.
      if (w && nw === w && Math.abs(nh - h) < 140) return;
      dpr = Math.min(window.devicePixelRatio || 1, 1.75);
      w = nw; h = nh;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (!raf) draw(performance.now(), true);
    }

    function draw(t, still) {
      const dt = still ? 0 : Math.min(0.05, (t - last) / 1000 || 0.016);
      last = t;
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        const tw = still ? 0.8 : 0.55 + 0.45 * Math.sin(t * s.tw + s.ph);
        const y = (((s.y - scrollY * 0.05 * s.z) % h) + h) % h;
        ctx.globalAlpha = s.a * tw;
        ctx.fillStyle = s.c;
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, 6.2832);
        ctx.fill();
      }

      ctx.fillStyle = '#f4c9d3';
      for (const d of dust) {
        d.y -= d.vy * dt;
        if (d.y < -4) { d.y = h + 4; d.x = rand(0, w); }
        ctx.globalAlpha = d.a * (0.6 + 0.4 * Math.sin(t * 0.001 + d.ph));
        ctx.beginPath();
        ctx.arc(d.x + Math.sin(t * 0.0004 + d.ph) * 10, d.y, d.r, 0, 6.2832);
        ctx.fill();
      }

      for (let i = 0; i < hearts.length; i++) {
        const p = hearts[i];
        p.y -= p.vy * dt;
        if (p.y < -p.s * 2) hearts[i] = newHeart(false);
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.c;
        heartPath(ctx, p.x + Math.sin(t * 0.0006 + p.ph) * p.sway, p.y, p.s);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function frame(t) {
      draw(t, false);
      raf = requestAnimationFrame(frame);
    }
    function start() {
      if (raf) return;
      if (isReduced()) { draw(performance.now(), true); return; }
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }
    function stop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }

    resize();
    return { start, stop, resize, setScroll(y) { scrollY = y; } };
  }

  /* ---------------------------------------------------------------------
     3. Confetti + heart burst (lightweight, no libraries)
     --------------------------------------------------------------------- */
  function createConfetti(canvas) {
    const ctx = canvas.getContext('2d');
    const colors = ['#f4c9d3', '#d9bf8c', '#b03a5b', '#fbeee8', '#e8b4c0', '#8a1c3b', '#ffd9a0'];
    let w = 0, h = 0, dpr = 1, parts = [], raf = 0, last = 0;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function spawn(x, y, angle, spread, vMin, vMax, delay) {
      const a = angle + rand(-spread / 2, spread / 2);
      const v = rand(vMin, vMax);
      const r = Math.random();
      parts.push({
        x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v,
        rot: rand(0, 6.28), vr: rand(-7, 7), flip: rand(0, 6.28),
        w: rand(6, 11), h: rand(4, 8), c: colors[(Math.random() * colors.length) | 0],
        shape: r < 0.2 ? 'heart' : (r < 0.38 ? 'dot' : 'rect'),
        life: -(delay || 0), ttl: rand(2.4, 4)
      });
    }

    function kick() {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }

    /** Burst of confetti from (x, y). Options: count, angle, spread, min, max */
    function burst(x, y, opts) {
      if (isReduced()) return;
      const o = Object.assign({ count: 80, angle: -Math.PI / 2, spread: Math.PI * 0.9, min: 320, max: 760 }, opts || {});
      const count = Math.round(o.count * (w < 500 ? 0.7 : 1));
      for (let i = 0; i < count; i++) spawn(x, y, o.angle, o.spread, o.min, o.max, 0);
      if (parts.length > 320) parts.splice(0, parts.length - 320);
      kick();
    }

    /** Gentle confetti falling from the top of the screen. */
    function rain(count) {
      if (isReduced()) return;
      const n = Math.round(count * (w < 500 ? 0.6 : 1));
      for (let i = 0; i < n; i++) spawn(rand(0, w), -20, Math.PI / 2, 0.5, 80, 240, rand(0, 1.8));
      if (parts.length > 320) parts.splice(0, parts.length - 320);
      kick();
    }

    function frame(t) {
      const dt = Math.min(0.05, (t - last) / 1000 || 0.016);
      last = t;
      ctx.clearRect(0, 0, w, h);
      const drag = Math.exp(-1.5 * dt);

      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.life += dt;
        if (p.life < 0) continue;
        if (p.life > p.ttl || p.y > h + 30) { parts.splice(i, 1); continue; }
        p.vx *= drag; p.vy = p.vy * drag + 620 * dt;
        p.x += p.vx * dt; p.y += p.vy * dt;
        p.rot += p.vr * dt; p.flip += 6 * dt;

        ctx.globalAlpha = clamp((p.ttl - p.life) / 0.8, 0, 1);
        ctx.fillStyle = p.c;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        if (p.shape === 'rect') {
          ctx.scale(1, Math.cos(p.flip));
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        } else if (p.shape === 'dot') {
          ctx.beginPath(); ctx.arc(0, 0, p.h / 2, 0, 6.2832); ctx.fill();
        } else {
          heartPath(ctx, 0, -p.w * 0.5, p.w * 1.2); ctx.fill();
        }
        ctx.restore();
      }
      ctx.globalAlpha = 1;

      if (parts.length) raf = requestAnimationFrame(frame);
      else { raf = 0; ctx.clearRect(0, 0, w, h); }
    }

    resize();
    return { burst, rain, resize };
  }

  /* ---------------------------------------------------------------------
     4. Grab elements
     --------------------------------------------------------------------- */
  const sky = createSky($('#sky'));
  const confetti = createConfetti($('#confetti'));

  const intro = $('#intro');
  const enterBtn = $('#enterBtn');
  const app = $('#app');
  const progressBar = $('#progress');
  const heroPhoto = $('#heroPhoto');
  const menuBtn = $('#menuBtn');
  const menuPanel = $('#menuPanel');

  const state = { entered: false, wished: false, lastFocus: null };

  /* ---------------------------------------------------------------------
     5. Apply the text from birthdayConfig to the page
     --------------------------------------------------------------------- */
  function applyConfig() {
    document.title = cfg.siteTitle || document.title;

    $$('[data-cfg]').forEach((node) => {
      const value = cfg[node.dataset.cfg];
      if (typeof value === 'string' && value.trim()) node.textContent = value;
    });

    // Letter-by-letter name on the intro screen
    const nameBox = $('#introName');
    nameBox.textContent = '';
    nameBox.setAttribute('aria-label', cfg.girlfriendName);
    Array.from(String(cfg.girlfriendName).toUpperCase()).forEach((ch, i) => {
      const s = el('span', 'intro__letter', ch);
      s.style.setProperty('--i', i);
      s.setAttribute('aria-hidden', 'true');
      nameBox.appendChild(s);
    });

    // Photos set from the config
    const heroImg = $('.hero__frame img');
    if (cfg.heroPhoto && heroImg.getAttribute('src') !== cfg.heroPhoto) heroImg.setAttribute('src', cfg.heroPhoto);
    guardImage(heroImg);

    const finalImg = $('.final__photo img');
    if (cfg.finalPhoto && finalImg.getAttribute('src') !== cfg.finalPhoto) finalImg.setAttribute('src', cfg.finalPhoto);
    guardImage(finalImg);

    // Hero message (word by word) and secret message
    setWords($('#heroMessage'), cfg.heroMessage, 55, 1500);
    $('#surpriseTitle').textContent = cfg.secretTitle || 'One last thing…';
    $('#wishMessage').textContent = cfg.wishMessage;
    $('#trackName').textContent = cfg.musicTrackName || 'Our Song';

    // Final letter paragraphs
    const finalBox = $('#finalLetter');
    finalBox.textContent = '';
    String(cfg.finalLetter).split(/\n\s*\n/).forEach((para) => {
      if (para.trim()) finalBox.appendChild(el('p', '', para.trim()));
    });
  }

  /* ---------------------------------------------------------------------
     6. Build gallery, timeline, reason cards
     --------------------------------------------------------------------- */
  const tilts = [-3.2, 2.4, -1.6, 3.1, -2.4, 1.8, -3, 2.2];

  function renderGallery() {
    const list = $('#galleryGrid');
    list.textContent = '';
    photos.forEach((photo, i) => {
      const li = el('li', 'reveal');
      li.style.setProperty('--d', (i % 4) * 0.09 + 's');

      const btn = el('button', 'polaroid');
      btn.type = 'button';
      btn.dataset.index = i;
      btn.style.setProperty('--rot', tilts[i % tilts.length] + 'deg');
      btn.setAttribute('aria-label', 'Open photo ' + (i + 1) + ': ' + photo.caption);

      const frame = el('span', 'polaroid__photo');
      const img = new Image();
      img.alt = photo.caption;
      img.loading = 'lazy';
      img.decoding = 'async';
      img.src = photo.src;
      guardImage(img);
      frame.appendChild(img);

      btn.appendChild(frame);
      btn.appendChild(el('span', 'polaroid__cap', photo.caption));
      li.appendChild(btn);
      list.appendChild(li);
    });
  }

  function renderTimeline() {
    const list = $('#timeline');
    list.textContent = '';
    timeline.forEach((item, i) => {
      const li = el('li', 'timeline__item reveal' + (i % 2 ? ' is-right' : ''));
      li.appendChild(el('span', 'timeline__dot'));
      const card = el('div', 'timeline__card glass');
      card.appendChild(el('p', 'timeline__date', item.date));
      card.appendChild(el('h3', 'timeline__title', item.title));
      card.appendChild(el('p', 'timeline__text', item.text));
      li.appendChild(card);
      list.appendChild(li);
    });
  }

  function setFlip(card, flipped) {
    card.setAttribute('aria-pressed', String(flipped));
    $('.flip__front', card).setAttribute('aria-hidden', String(flipped));
    $('.flip__back', card).setAttribute('aria-hidden', String(!flipped));
  }

  function renderReasons() {
    const list = $('#reasonsGrid');
    list.textContent = '';
    reasons.forEach((r, i) => {
      const li = el('li', 'reveal');
      li.style.setProperty('--d', (i % 4) * 0.09 + 's');

      const card = el('div', 'flip');
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');

      const inner = el('span', 'flip__inner');
      inner.style.display = 'block';

      const front = el('span', 'flip__face flip__front');
      front.appendChild(el('span', 'flip__num', String(i + 1).padStart(2, '0')));
      front.appendChild(el('span', 'flip__title', r.title));
      front.appendChild(el('span', 'flip__tap', 'Tap to open'));

      const back = el('span', 'flip__face flip__back');
      back.appendChild(el('span', 'flip__text', r.text));

      inner.appendChild(front);
      inner.appendChild(back);
      card.appendChild(inner);
      setFlip(card, false);

      const toggle = () => setFlip(card, card.getAttribute('aria-pressed') !== 'true');
      card.addEventListener('click', toggle);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
      });

      li.appendChild(card);
      list.appendChild(li);
    });
  }

  function resetReasons() { $$('.flip').forEach((c) => setFlip(c, false)); }

  /* ---------------------------------------------------------------------
     7. Scroll reveal
     --------------------------------------------------------------------- */
  let revealObserver = null;
  function initReveal() {
    if (revealObserver) revealObserver.disconnect();
    const items = $$('.reveal');
    items.forEach((n) => n.classList.remove('in-view'));
    if (!('IntersectionObserver' in window) || isReduced()) {
      items.forEach((n) => n.classList.add('in-view'));
      return;
    }
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
    items.forEach((n) => revealObserver.observe(n));
  }

  /* ---------------------------------------------------------------------
     8. Scroll effects: progress bar, hero parallax, timeline line
     --------------------------------------------------------------------- */
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateScrollUI);
  }

  function updateScrollUI() {
    ticking = false;
    if (!state.entered) return;
    const y = window.pageYOffset || root.scrollTop || 0;
    const vh = window.innerHeight;
    sky.setScroll(y);

    const max = Math.max(1, root.scrollHeight - vh);
    progressBar.style.setProperty('--sp', clamp(y / max, 0, 1).toFixed(4));

    if (!isReduced() && y < vh * 1.4) {
      heroPhoto.style.setProperty('--py', (y * 0.1).toFixed(1) + 'px');
    }

    const tl = $('#timeline');
    const rect = tl.getBoundingClientRect();
    if (rect.top < vh && rect.bottom > 0) {
      tl.style.setProperty('--tl', clamp((vh * 0.65 - rect.top) / rect.height, 0, 1).toFixed(4));
    }
  }

  /* ---------------------------------------------------------------------
     9. Menu
     --------------------------------------------------------------------- */
  function openMenu() { menuBtn.setAttribute('aria-expanded', 'true'); showLayer(menuPanel); }
  function closeMenu() { menuBtn.setAttribute('aria-expanded', 'false'); hideLayer(menuPanel, 400); }
  function menuIsOpen() { return menuBtn.getAttribute('aria-expanded') === 'true'; }

  menuBtn.addEventListener('click', () => (menuIsOpen() ? closeMenu() : openMenu()));
  menuPanel.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('click', (e) => {
    if (menuIsOpen() && !e.target.closest('#menuPanel') && !e.target.closest('#menuBtn')) closeMenu();
  });

  /* ---------------------------------------------------------------------
     10. Lightbox
     --------------------------------------------------------------------- */
  const lb = {
    box: $('#lightbox'), img: $('#lbImg'), cap: $('#lbCap'), count: $('#lbCount'),
    close: $('#lbClose'), prev: $('#lbPrev'), next: $('#lbNext'), index: 0, opener: null
  };
  guardImage(lb.img);

  function showPhoto(i) {
    lb.index = (i + photos.length) % photos.length;
    const p = photos[lb.index];
    delete lb.img.dataset.fallback;
    lb.img.src = p.src;
    lb.img.alt = p.caption;
    lb.cap.textContent = p.caption;
    lb.count.textContent = (lb.index + 1) + ' / ' + photos.length;
  }
  function openLightbox(i, opener) {
    lb.opener = opener || null;
    showPhoto(i);
    lockScroll();
    showLayer(lb.box);
    lb.close.focus();
  }
  function closeLightbox() {
    if (lb.box.hidden) return;
    hideLayer(lb.box, 450);
    unlockScroll();
    if (lb.opener && document.contains(lb.opener)) lb.opener.focus({ preventScroll: true });
  }
  function lightboxOpen() { return !lb.box.hidden; }

  $('#galleryGrid').addEventListener('click', (e) => {
    const btn = e.target.closest('.polaroid');
    if (btn) openLightbox(Number(btn.dataset.index), btn);
  });
  lb.close.addEventListener('click', closeLightbox);
  lb.prev.addEventListener('click', () => showPhoto(lb.index - 1));
  lb.next.addEventListener('click', () => showPhoto(lb.index + 1));
  lb.box.addEventListener('click', (e) => { if (e.target === lb.box) closeLightbox(); });

  let touchX = null;
  lb.box.addEventListener('touchstart', (e) => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  lb.box.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 50) showPhoto(lb.index + (dx < 0 ? 1 : -1));
  }, { passive: true });

  /* Keep keyboard focus inside an open dialog */
  function trapTab(e, container) {
    if (e.key !== 'Tab') return;
    const items = $$('button, a[href], input, [tabindex]:not([tabindex="-1"])', container).filter((n) => !n.hidden && n.offsetParent !== null);
    if (!items.length) return;
    const first = items[0], lastItem = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); lastItem.focus(); }
    else if (!e.shiftKey && document.activeElement === lastItem) { e.preventDefault(); first.focus(); }
  }

  /* ---------------------------------------------------------------------
     11. Interactive letter (envelope + typing animation)
     --------------------------------------------------------------------- */
  const envelope = $('#envelope');
  const paper = $('#letterPaper');
  const letterBox = $('#letterText');
  const skipBtn = $('#skipLetter');
  const replayLetterBtn = $('#replayLetter');

  const letter = { paras: [], total: 0, raf: 0, start: 0, shown: -1, open: false };
  const CHAR_MS = 22;   // typing speed: smaller = faster

  function buildLetter() {
    letterBox.textContent = '';
    letter.paras = String(cfg.loveLetter).split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean).map((text) => {
      const p = el('p');
      const typed = el('span', 't');
      const caret = el('span', 'caret is-off');
      const rest = el('span', 'u', text);       // not-yet-typed text keeps the layout from jumping
      p.appendChild(typed); p.appendChild(caret); p.appendChild(rest);
      letterBox.appendChild(p);
      return { text, typed, caret, rest, last: -1 };
    });
    letter.total = letter.paras.reduce((n, p) => n + p.text.length, 0);
  }

  function paintLetter(count) {
    let remaining = count;
    let caretPlaced = false;
    letter.paras.forEach((p) => {
      const n = clamp(remaining, 0, p.text.length);
      remaining -= p.text.length;
      if (n !== p.last) {
        p.typed.textContent = p.text.slice(0, n);
        p.rest.textContent = p.text.slice(n);
        p.last = n;
      }
      // The blinking caret sits in the first paragraph that is not finished yet.
      const isActive = !caretPlaced && n < p.text.length && count < letter.total;
      p.caret.classList.toggle('is-off', !isActive);
      if (isActive) caretPlaced = true;
    });
  }

  function stopTyping() { if (letter.raf) { cancelAnimationFrame(letter.raf); letter.raf = 0; } }

  function finishLetter() {
    stopTyping();
    paintLetter(letter.total);
    letter.paras.forEach((p) => p.caret.classList.add('is-off'));
    skipBtn.hidden = true;
  }

  function startTyping() {
    stopTyping();
    buildLetter();
    skipBtn.hidden = false;
    if (isReduced()) { finishLetter(); return; }
    paintLetter(0);
    letter.start = performance.now() + 600;      // short pause before the first letter
    const step = (now) => {
      const count = Math.floor(Math.max(0, now - letter.start) / CHAR_MS);
      if (count >= letter.total) { finishLetter(); return; }
      paintLetter(count);
      letter.raf = requestAnimationFrame(step);
    };
    letter.raf = requestAnimationFrame(step);
  }

  function openEnvelope() {
    letter.open = true;
    envelope.classList.add('is-open');
    envelope.setAttribute('aria-expanded', 'true');
    envelope.setAttribute('aria-label', 'Close the letter');
    setTimeout(() => {
      if (!letter.open) return;
      paper.hidden = false;
      void paper.offsetWidth;
      paper.classList.add('is-open');
      startTyping();
      setTimeout(() => paper.scrollIntoView({ behavior: isReduced() ? 'auto' : 'smooth', block: 'start' }), 120);
    }, isReduced() ? 0 : 1100);
  }

  function closeEnvelope() {
    letter.open = false;
    stopTyping();
    paper.classList.remove('is-open');
    envelope.classList.remove('is-open');
    envelope.setAttribute('aria-expanded', 'false');
    envelope.setAttribute('aria-label', 'Open the letter');
    setTimeout(() => { if (!letter.open) paper.hidden = true; }, isReduced() ? 0 : 700);
  }

  function resetLetter() {
    letter.open = false;
    stopTyping();
    paper.classList.remove('is-open');
    paper.hidden = true;
    envelope.classList.remove('is-open');
    envelope.setAttribute('aria-expanded', 'false');
    envelope.setAttribute('aria-label', 'Open the letter');
  }

  envelope.addEventListener('click', () => (letter.open ? closeEnvelope() : openEnvelope()));
  skipBtn.addEventListener('click', finishLetter);
  replayLetterBtn.addEventListener('click', () => {
    startTyping();
    paper.scrollIntoView({ behavior: isReduced() ? 'auto' : 'smooth', block: 'start' });
  });

  /* ---------------------------------------------------------------------
     12. Birthday cake & wish
     --------------------------------------------------------------------- */
  const cakeSvg = $('#cakeSvg');
  const cakeStage = $('#cakeStage');
  const wishBtn = $('#wishBtn');
  const wishBox = $('#wishText');
  const secretBtn = $('#secretBtn');
  const secretLocked = $('#secretLocked');

  function setWishLabel(text) { $('span', wishBtn).textContent = text; }

  function makeWish() {
    state.wished = true;
    cakeSvg.classList.add('is-out');
    cakeStage.classList.add('is-out');
    setWishLabel('Light the candles again');
    cakeSvg.setAttribute('aria-label', 'A three-tier birthday cake with the candles blown out');

    const r = cakeSvg.getBoundingClientRect();
    confetti.burst(r.left + r.width / 2, r.top + r.height * 0.2, { count: 110, spread: Math.PI * 1.1 });
    setTimeout(() => confetti.burst(r.left + r.width * 0.25, r.top + r.height * 0.3, { count: 45, angle: -Math.PI * 0.65, spread: 0.8 }), 220);
    setTimeout(() => confetti.burst(r.left + r.width * 0.75, r.top + r.height * 0.3, { count: 45, angle: -Math.PI * 0.35, spread: 0.8 }), 340);
    setTimeout(() => confetti.rain(60), 500);

    wishBox.hidden = false;
    void wishBox.offsetWidth;
    wishBox.classList.add('is-on');

    unlockSecret();
  }

  function relightCandles() {
    cakeSvg.classList.remove('is-out');
    cakeStage.classList.remove('is-out');
    setWishLabel('Make a Wish');
    cakeSvg.setAttribute('aria-label', 'A three-tier birthday cake with five lit candles');
    wishBox.classList.remove('is-on');
    setTimeout(() => { if (!cakeSvg.classList.contains('is-out')) wishBox.hidden = true; }, isReduced() ? 0 : 600);
  }

  function resetCake() {
    cakeSvg.classList.remove('is-out');
    cakeStage.classList.remove('is-out');
    setWishLabel('Make a Wish');
    wishBox.classList.remove('is-on');
    wishBox.hidden = true;
    state.wished = false;
    secretBtn.hidden = true;
    secretLocked.hidden = false;
  }

  function unlockSecret() {
    secretLocked.hidden = true;
    secretBtn.hidden = false;
  }

  wishBtn.addEventListener('click', () => (cakeSvg.classList.contains('is-out') ? relightCandles() : makeWish()));

  /* ---------------------------------------------------------------------
     13. Secret surprise (full-screen message)
     --------------------------------------------------------------------- */
  const surprise = $('#surprise');
  const surpriseText = $('#surpriseText');
  const surpriseHearts = $('#surpriseHearts');
  const surpriseContinue = $('#surpriseContinue');
  const surpriseClose = $('#surpriseClose');

  function buildFloatingHearts() {
    surpriseHearts.textContent = '';
    const count = window.innerWidth < 600 ? 16 : 26;
    for (let i = 0; i < count; i++) {
      const h = el('span', 'fh', '♥');
      h.style.left = rand(2, 96).toFixed(1) + '%';
      h.style.fontSize = rand(14, 38).toFixed(0) + 'px';
      h.style.animationDuration = rand(7, 14).toFixed(1) + 's';
      h.style.animationDelay = (-rand(0, 12)).toFixed(1) + 's';
      h.style.setProperty('--dx', rand(-60, 60).toFixed(0) + 'px');
      surpriseHearts.appendChild(h);
    }
  }

  function openSurprise() {
    state.lastFocus = document.activeElement;
    lockScroll();
    buildFloatingHearts();
    setWords(surpriseText, cfg.finalMessage, 85, 900);
    showLayer(surprise);
    requestAnimationFrame(() => requestAnimationFrame(() => surpriseText.classList.add('is-on')));
    surpriseContinue.focus({ preventScroll: true });
    setTimeout(() => confetti.burst(window.innerWidth / 2, window.innerHeight * 0.75, { count: 70, spread: Math.PI * 0.8 }), 500);
  }

  function closeSurprise(silent) {
    if (surprise.hidden) return;
    hideLayer(surprise, 900);
    unlockScroll();
    surpriseText.classList.remove('is-on');
    setTimeout(() => { surpriseHearts.textContent = ''; }, isReduced() ? 0 : 950);
    if (!silent && state.lastFocus && document.contains(state.lastFocus)) state.lastFocus.focus({ preventScroll: true });
  }

  secretBtn.addEventListener('click', openSurprise);
  surpriseClose.addEventListener('click', () => closeSurprise(false));
  surpriseContinue.addEventListener('click', () => {
    closeSurprise(true);
    setTimeout(() => $('#final').scrollIntoView({ behavior: isReduced() ? 'auto' : 'smooth', block: 'start' }), 250);
  });

  /* ---------------------------------------------------------------------
     14. Music player
     --------------------------------------------------------------------- */
  const audio = $('#audio');
  const player = $('#player');
  const playBtn = $('#playBtn');
  const seek = $('#seek');
  const timeEl = $('#trackTime');
  const msgEl = $('#playerMsg');
  let msgTimer = 0;

  const fmt = (s) => {
    if (!isFinite(s)) return '0:00';
    const m = Math.floor(s / 60), sec = Math.floor(s % 60);
    return m + ':' + String(sec).padStart(2, '0');
  };
  function showMsg(text) {
    msgEl.textContent = text;
    msgEl.hidden = false;
    clearTimeout(msgTimer);
    msgTimer = setTimeout(() => { msgEl.hidden = true; }, 6000);
  }
  function audioMissing() {
    return !!audio.error || audio.networkState === 3;    // 3 = NETWORK_NO_SOURCE (file not found)
  }
  function setPlaying(on) {
    player.classList.toggle('is-playing', on);
    playBtn.setAttribute('aria-label', on ? 'Pause music' : 'Play music');
  }

  playBtn.addEventListener('click', () => {
    if (audioMissing()) { showMsg(cfg.musicMissingMessage); return; }
    if (audio.paused) {
      const attempt = audio.play();
      if (attempt && typeof attempt.catch === 'function') {
        attempt.catch(() => showMsg(cfg.musicMissingMessage));
      }
    } else {
      audio.pause();
    }
  });
  audio.addEventListener('play', () => { setPlaying(true); msgEl.hidden = true; });
  audio.addEventListener('pause', () => setPlaying(false));
  audio.addEventListener('error', () => setPlaying(false));
  audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    seek.value = pct;
    seek.style.setProperty('--p', pct + '%');
    timeEl.textContent = fmt(audio.currentTime);
  });
  audio.addEventListener('loadedmetadata', () => { timeEl.textContent = fmt(0); });
  seek.addEventListener('input', () => {
    if (audio.duration) audio.currentTime = (Number(seek.value) / 100) * audio.duration;
    seek.style.setProperty('--p', seek.value + '%');
  });

  /* ---------------------------------------------------------------------
     15. Enter the experience / replay it
     --------------------------------------------------------------------- */
  function playIntro() {
    intro.classList.remove('is-playing');
    void intro.offsetWidth;
    intro.classList.add('is-playing');
  }

  function enter() {
    if (state.entered) return;
    state.entered = true;
    enterBtn.disabled = true;

    const r = enterBtn.getBoundingClientRect();
    confetti.burst(r.left + r.width / 2, r.top + r.height / 2, { count: 60, spread: Math.PI * 1.2, min: 220, max: 560 });

    app.removeAttribute('inert');
    body.classList.add('is-entered');
    intro.classList.add('is-leaving');
    initReveal();
    setTimeout(() => $('#heroMessage').classList.add('is-on'), 60);

    setTimeout(() => {
      intro.hidden = true;
      unlockScroll();
      scrollToTopInstant();
      updateScrollUI();
      const title = $('#heroTitle');
      if (title) title.focus({ preventScroll: true });
    }, isReduced() ? 0 : 1250);
  }

  function replay() {
    closeSurprise(true);
    closeLightbox();
    closeMenu();
    resetLetter();
    resetCake();
    resetReasons();
    resetLocks();

    state.entered = false;
    app.setAttribute('inert', '');
    body.classList.remove('is-entered');
    $('#heroMessage').classList.remove('is-on');
    progressBar.style.setProperty('--sp', 0);
    $('#timeline').style.setProperty('--tl', 0);
    heroPhoto.style.setProperty('--py', '0px');
    $$('.reveal').forEach((n) => n.classList.remove('in-view'));

    scrollToTopInstant();
    lockScroll();
    enterBtn.disabled = false;
    intro.hidden = false;
    intro.classList.remove('is-leaving');
    playIntro();
    enterBtn.focus({ preventScroll: true });
  }

  enterBtn.addEventListener('click', enter);
  $('#replayBtn').addEventListener('click', replay);

  /* ---------------------------------------------------------------------
     16. Global events
     --------------------------------------------------------------------- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!surprise.hidden) closeSurprise(false);
      else if (lightboxOpen()) closeLightbox();
      else if (menuIsOpen()) { closeMenu(); menuBtn.focus(); }
      return;
    }
    if (lightboxOpen()) {
      if (e.key === 'ArrowLeft') showPhoto(lb.index - 1);
      else if (e.key === 'ArrowRight') showPhoto(lb.index + 1);
      else trapTab(e, lb.box);
    } else if (!surprise.hidden) {
      trapTab(e, surprise);
    }
  });

  window.addEventListener('scroll', onScroll, { passive: true });

  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { sky.resize(); confetti.resize(); onScroll(); }, 150);
  });

  document.addEventListener('visibilitychange', () => { if (document.hidden) sky.stop(); else sky.start(); });

  reduceMq.addEventListener
    ? reduceMq.addEventListener('change', () => { sky.stop(); sky.start(); })
    : (reduceMq.addListener && reduceMq.addListener(() => { sky.stop(); sky.start(); }));

  /* ---------------------------------------------------------------------
     17. Start
     --------------------------------------------------------------------- */
  lockScroll();                // the intro screen locks scrolling until she enters
  applyConfig();
  renderGallery();
  renderTimeline();
  renderReasons();
  if (audioMissing()) setPlaying(false);
  sky.start();
  requestAnimationFrame(playIntro);
})();
