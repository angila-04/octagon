/* =====================================================================
   HOW TO ADD YOUR REAL PHOTOS — READ THIS FIRST
   =====================================================================
   1. Put your image files in an "images" folder next to index.html, e.g.:
        images/logo.png
        images/arundhathy.jpg
        images/member2.jpg
        images/gallery-meeting.jpg
   2. For your TEAM LOGO: scroll down to the "LOGO" section below and
      set LOGO_IMAGE to the file path (e.g. "images/logo.png").
      Leave it as null to keep the built-in flame/octagon SVG mark.
   3. For MEMBER PHOTOS: in the MEMBERS array below, add a "photo"
      field with the image path to each person, e.g.:
        { name:"Arundhathy", role:"Team Leader", strength:"Leadership",
          quote:"...", leader:true, photo:"images/arundhathy.jpg" }
      Leave "photo" as null to keep the colored initials avatar for
      that person.
   4. For GALLERY PHOTOS: in the GALLERY array, add a "photo" field
      with the image path to each tile, same idea as above.
   ===================================================================== */

/* ============ EDIT YOUR TEAM DATA HERE ============ */
const MEMBERS = [
  // photo: "images/yourfile.jpg"  <-- add this to any member to use a real photo
  { name:"Arundhathy V Prakash", role:"Captain", strength:"Leadership", quote:"Together we rise, together we thrive.", leader:true, photo:"images/Arundhathy.jpeg" },
  { name:"Joseph Sojan",   role:"Vice Captain",    strength:"Web Developer", photo:"images/joseph.jpeg" },
  { name:"Abhishek",   role:"Member",    strength:"Athelete", photo:"images/abhishek.jpeg" },
  { name:"Leo C Philip",   role:"Member",    strength:"Football Player", photo:"images/leo.jpeg" },
  { name:"Athul Johnson",   role:"Member",    strength:"Martial Arts", photo:"images/athul.jpeg" },
  { name:"Angila Maria",   role:"Member",    strength:"Video Editor", photo:"images/angila.jpeg" },
  { name:"Navya Suresh",   role:"Member",    strength:"Crocheter", photo:"images/navya.jpeg" },
  { name:"Tissy Johnson",   role:"Member",    strength:"Dancer", photo:"images/tissy.jpeg" },
];

/* ============ LOGO ============
   Set this to your logo file path (e.g. "images/logo.png") to replace
   the built-in flame/octagon SVG mark in the navbar. Leave as null to
   keep the SVG mark. */
const LOGO_IMAGE = "images/logo.jpeg";

const GRADIENTS = [
  "linear-gradient(145deg,#E8B94D,#7C4CE8)",
  "linear-gradient(145deg,#7C4CE8,#3B2A8C)",
  "linear-gradient(145deg,#A87CF2,#0A0E27)",
  "linear-gradient(145deg,#E8B94D,#B9772F)",
  "linear-gradient(145deg,#4C6FE8,#7C4CE8)",
  "linear-gradient(145deg,#E86FA0,#7C4CE8)",
  "linear-gradient(145deg,#4CE8C7,#3B2A8C)",
  "linear-gradient(145deg,#E8B94D,#4C6FE8)"
];

const QUOTES = [
  "Alone we are talented.",
  "Together we are Octagon.",
  "Eight sides, one goal.",
  "Growth is a team sport.",
  "Small steps, together.",
  "Unity is our strength."
];

const VALUES = [
  {icon:"⭐", title:"Leadership", text:"Guiding with clarity and owning outcomes."},
  {icon:"🤝", title:"Teamwork", text:"Every win is shared, every setback too."},
  {icon:"💬", title:"Communication", text:"Honest, open, and always two-way."},
  {icon:"🚀", title:"Growth", text:"We chase progress over perfection."},
  {icon:"🎨", title:"Creativity", text:"Different minds, better ideas."},
  {icon:"❤️", title:"Respect", text:"Every voice in Octagon matters."},
];

const JOURNEY = [
  {tag:"01", title:"Team Formation", text:"Eight strangers became one team, Octagon."},
  {tag:"02", title:"Ice-breaking Activities", text:"Breaking barriers, building the first bonds of trust."},
  {tag:"03", title:"Group Discussions", text:"Finding our voice — and learning to really listen."},
  {tag:"04", title:"Presentations", text:"Standing up, speaking up, and backing each other."},
  {tag:"05", title:"Persona Enhancement Sessions", text:"Sharpening who we are, individually and together."},
  {tag:"06", title:"Final Showcase", text:"Bringing every lesson together on the big stage."},
];

/* Gallery tiles — add a "photo" field (e.g. "images/meeting1.jpg") to any
   tile below to show a real picture instead of the colored placeholder. */
const GALLERY = [
  {label:"Team Meeting", grad:"linear-gradient(145deg,#0A0E27,#7C4CE8)", photo:null},
  {label:"Workshop", grad:"linear-gradient(145deg,#7C4CE8,#E8B94D)", photo:"images/group.jpeg"},
  {label:"Fun Moment", grad:"linear-gradient(145deg,#E8B94D,#0A0E27)", photo:null},
  {label:"Activity", grad:"linear-gradient(145deg,#3B2A8C,#A87CF2)", photo:null},
  {label:"Group Discussion", grad:"linear-gradient(145deg,#0A0E27,#4C6FE8)", photo:null},
  {label:"Presentation Day", grad:"linear-gradient(145deg,#B9772F,#E8B94D)", photo:null},
  {label:"Ice-breaker", grad:"linear-gradient(145deg,#7C4CE8,#0A0E27)", photo:null},
  {label:"Celebration", grad:"linear-gradient(145deg,#E8B94D,#7C4CE8)", photo:null},
];

const ACHIEVEMENTS = [
  {icon:"🏅", title:"Best Team Activities"},
  {icon:"🎤", title:"Presentations"},
  {icon:"📜", title:"Formal Wears"},
  {icon:"✨", title:"Special Moments"},
];

const STATS = [
  {num:8, suffix:"", label:"Team Members"},
  // {num:6, suffix:"", label:"Sessions Completed"},
  {num:100, suffix:"%", label:"Team Spirit"},
  {num:1, suffix:"", label:"Shared Goal"},
];

/* ============ RENDER ============ */
function initials(name){
  return name.split(" ").map(w=>w[0]).join("").slice(0,2).toUpperCase();
}

/* ---- Logo: swap in a real image if LOGO_IMAGE is set ---- */
const logoSlot = document.getElementById("logoSlot");
if (LOGO_IMAGE) {
  logoSlot.innerHTML = `<img src="${LOGO_IMAGE}" alt="Team Octagon logo">`;
}
/* otherwise the SVG mark already in index.html stays as-is */

const teamGrid = document.getElementById("teamGrid");
MEMBERS.forEach((m,i)=>{
  const card = document.createElement("div");
  card.className = "member-card reveal" + (m.leader ? " leader" : "");
  // Use the uploaded photo if provided, otherwise fall back to initials avatar
  const avatarInner = m.photo
    ? `<img src="${m.photo}" alt="${m.name}">`
    : initials(m.name);
  const avatarBg = m.photo ? "none" : GRADIENTS[i % GRADIENTS.length];
  card.innerHTML = `
    ${m.leader ? '<div class="crown">👑</div>' : ''}
    <div class="avatar" style="background:${avatarBg}">${avatarInner}</div>
    <h3>${m.name}</h3>
    <div class="member-role">${m.role}</div>
    <div class="member-strength">${m.strength}</div>
    
  `;
  teamGrid.appendChild(card);
});

const valuesGrid = document.getElementById("valuesGrid");
VALUES.forEach(v=>{
  const el = document.createElement("div");
  el.className = "value-card reveal";
  el.innerHTML = `<div class="vi">${v.icon}</div><h3>${v.title}</h3><p>${v.text}</p>`;
  valuesGrid.appendChild(el);
});

const timeline = document.getElementById("timeline");
JOURNEY.forEach((j,i)=>{
  const item = document.createElement("div");
  item.className = "t-item reveal";
  item.innerHTML = `
    ${i % 2 === 0 ? `
      <div class="t-card"><div class="step-tag">${j.tag}</div><h3>${j.title}</h3><div class="t-desc">${j.text}</div></div>
      <div class="t-node"></div>
      <div class="filler"></div>
    ` : `
      <div class="filler"></div>
      <div class="t-node"></div>
      <div class="t-card"><div class="step-tag">${j.tag}</div><h3>${j.title}</h3><div class="t-desc">${j.text}</div></div>
    `}
  `;
  item.addEventListener("click", ()=> item.classList.toggle("open"));
  timeline.appendChild(item);
});

const galleryGrid = document.getElementById("galleryGrid");
GALLERY.forEach(g=>{
  const el = document.createElement("div");
  el.className = "g-item reveal" + (g.photo ? " has-photo" : "");
  el.style.background = g.grad;
  el.innerHTML = (g.photo ? `<img src="${g.photo}" alt="${g.label}">` : "") + `<span>${g.label}</span>`;
  galleryGrid.appendChild(el);
});

const achGrid = document.getElementById("achGrid");
ACHIEVEMENTS.forEach(a=>{
  const el = document.createElement("div");
  el.className = "ach-card reveal";
  el.innerHTML = `<div class="ach-badge">${a.icon}</div><h3>${a.title}</h3>`;
  achGrid.appendChild(el);
});

const statsGrid = document.getElementById("statsGrid");
STATS.forEach(s=>{
  const el = document.createElement("div");
  el.className = "stat reveal";
  el.innerHTML = `<div class="num" data-target="${s.num}" data-suffix="${s.suffix}">0${s.suffix}</div><div class="lbl">${s.label}</div>`;
  statsGrid.appendChild(el);
});

/* QR placeholder pattern */
// const qr = document.getElementById("qr");
// for(let i=0;i<49;i++){
//   const cell = document.createElement("div");
//   if (Math.random() > 0.42) cell.style.opacity = 1; else cell.style.opacity = 0;
//   qr.appendChild(cell);
// }
const qr = document.getElementById("qr");

const instaLink = "https://www.instagram.com/octagon_8.O/";

const img = document.createElement("img");
img.src = `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${encodeURIComponent(instaLink)}`;
img.alt = "Instagram QR Code";

qr.appendChild(img);
// make entire QR clickable
qr.style.cursor = "pointer";
qr.addEventListener("click", () => {
  window.open(instaLink, "_blank");
});

/* ============ HERO SVG CONSTELLATION ============ */
const svg = document.getElementById("hero-svg");
const cx=200, cy=200, r=150;
const pts = [];
for(let i=0;i<8;i++){
  const ang = (-90 + i*45) * Math.PI/180;
  pts.push([cx + r*Math.cos(ang), cy + r*Math.sin(ang)]);
}
let svgHTML = "";
pts.forEach((p,i)=>{
  const n = pts[(i+1)%8];
  svgHTML += `<line x1="${p[0]}" y1="${p[1]}" x2="${n[0]}" y2="${n[1]}"/>`;
});
pts.forEach((p,i)=>{
  svgHTML += `<circle class="node" cx="${p[0]}" cy="${p[1]}" r="5" style="animation-delay:${i*0.2}s"/>`;
});
svg.innerHTML = svgHTML;

/* ============ NAV SCROLL STATE ============ */
const nav = document.getElementById("nav");
window.addEventListener("scroll", ()=>{
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

/* ============ THEME TOGGLE ============ */
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", ()=>{
  const html = document.documentElement;
  const isLight = html.getAttribute("data-theme") === "light";
  html.setAttribute("data-theme", isLight ? "dark" : "light");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
});

/* ============ FLOATING QUOTES ============ */
function spawnQuote(){
  const q = document.createElement("div");
  q.className = "floating-quote";
  q.textContent = QUOTES[Math.floor(Math.random()*QUOTES.length)];
  q.style.left = (5 + Math.random()*80) + "vw";
  q.style.bottom = "0px";
  document.body.appendChild(q);
  setTimeout(()=> q.remove(), 9000);
}
setInterval(spawnQuote, 4500);
setTimeout(spawnQuote, 2500);

/* ============ SCROLL REVEAL ============ */
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add("in"); }
  });
}, {threshold:0.15});
revealEls.forEach(el=> io.observe(el));

/* ============ ANIMATED STAT COUNTERS ============ */
const statEls = document.querySelectorAll(".stat .num");
const statIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el = e.target;
      const target = parseInt(el.dataset.target,10);
      const suffix = el.dataset.suffix || "";
      let cur = 0;
      const step = Math.max(1, Math.round(target/40));
      const tick = ()=>{
        cur = Math.min(target, cur+step);
        el.textContent = cur + suffix;
        if(cur < target) requestAnimationFrame(tick);
      };
      tick();
      statIO.unobserve(el);
    }
  });
}, {threshold:0.5});
statEls.forEach(el=> statIO.observe(el));

/* ============ CONFETTI ON LOAD ============ */
function fireConfetti(){
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ["#E8B94D","#7C4CE8","#A87CF2","#F4D68A","#ECEAF9"];
  const pieces = Array.from({length:140}, ()=>({
    x: Math.random()*canvas.width,
    y: -20 - Math.random()*canvas.height*0.5,
    r: 4 + Math.random()*5,
    c: colors[Math.floor(Math.random()*colors.length)],
    vy: 2 + Math.random()*3,
    vx: -1.5 + Math.random()*3,
    rot: Math.random()*360,
    vr: -6 + Math.random()*12
  }));
  let frame = 0;
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p=>{
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x,p.y);
      ctx.rotate(p.rot*Math.PI/180);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r*0.6);
      ctx.restore();
    });
    frame++;
    if(frame < 160){ requestAnimationFrame(draw); }
    else { ctx.clearRect(0,0,canvas.width,canvas.height); }
  }
  draw();
}

/* ============ GENERATIVE AMBIENT MUSIC (no external files) ============ */
let audioCtx, musicOn = false, oscillators = [];
const musicToggle = document.getElementById("musicToggle");
function startMusic(){
  audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
  const notes = [220, 277.18, 329.63, 392]; // A3 chord-ish, calm pad
  const master = audioCtx.createGain();
  master.gain.value = 0.035;
  master.connect(audioCtx.destination);
  oscillators = notes.map((f,i)=>{
    const osc = audioCtx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = f;
    const g = audioCtx.createGain();
    g.gain.value = 0.6/(i+1);
    osc.connect(g); g.connect(master);
    osc.start();
    return osc;
  });
  musicToggle._master = master;
}
function stopMusic(){
  oscillators.forEach(o=> o.stop());
  oscillators = [];
}
musicToggle.addEventListener("click", ()=>{
  musicOn = !musicOn;
  musicToggle.textContent = musicOn ? "🔊" : "🔈";
  if(musicOn) startMusic(); else stopMusic();
});

/* ============ INIT ============ */
window.addEventListener("load", ()=>{
  setTimeout(()=>{
    document.getElementById("loader").classList.add("hide");
    fireConfetti();
  }, 1400);
});
