// CURSOR
const cursor = document.getElementById("cursor"),
  cursorRing = document.getElementById("cursorRing");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;
document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx - 5 + "px";
  cursor.style.top = my - 5 + "px";
});
function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.left = rx - 17 + "px";
  cursorRing.style.top = ry - 17 + "px";
  requestAnimationFrame(animRing);
}
animRing();
document
  .querySelectorAll("a,button,.service-card,.project-card")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(2)";
      cursorRing.style.transform = "scale(1.5)";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)";
      cursorRing.style.transform = "scale(1)";
    });
  });

// PARTICLES
const canvas = document.getElementById("particles"),
  ctx = canvas.getContext("2d");
let W2,
  H2,
  pts = [];
function rz() {
  W2 = canvas.width = window.innerWidth;
  H2 = canvas.height = window.innerHeight;
}
rz();
window.addEventListener("resize", rz);
class P {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * W2;
    this.y = Math.random() * H2;
    this.r = Math.random() * 1.4 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.38;
    this.vy = (Math.random() - 0.5) * 0.38;
    this.a = Math.random() * 0.45 + 0.1;
    this.c = Math.random() > 0.5 ? "0,212,255" : "245,200,66";
  }
  up() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > W2 || this.y < 0 || this.y > H2) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.c},${this.a})`;
    ctx.fill();
  }
}
for (let i = 0; i < 110; i++) pts.push(new P());
function frame() {
  ctx.clearRect(0, 0, W2, H2);
  pts.forEach((p) => {
    p.up();
    p.draw();
  });
  for (let i = 0; i < pts.length; i++)
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x,
        dy = pts[i].y - pts[j].y,
        d = Math.sqrt(dx * dx + dy * dy);
      if (d < 95) {
        ctx.beginPath();
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(pts[j].x, pts[j].y);
        ctx.strokeStyle = `rgba(0,212,255,${0.13 * (1 - d / 95)})`;
        ctx.lineWidth = 0.35;
        ctx.stroke();
      }
    }
  requestAnimationFrame(frame);
}
frame();

// TYPED
const words = [
  "Angular Developer",
  "Frontend Engineer",
  "UI Craftsman",
  "TypeScript Expert",
  "SPA Specialist",
];
let wi = 0,
  ci = 0,
  del = false;
const typedEl = document.getElementById("typed");
function type() {
  const w = words[wi];
  if (!del) {
    typedEl.textContent = w.slice(0, ++ci);
    if (ci === w.length) {
      del = true;
      setTimeout(type, 1700);
      return;
    }
  } else {
    typedEl.textContent = w.slice(0, --ci);
    if (ci === 0) {
      del = false;
      wi = (wi + 1) % words.length;
    }
  }
  setTimeout(type, del ? 55 : 95);
}
type();

// NAV SCROLL
window.addEventListener("scroll", () => {
  document
    .querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
  document
    .getElementById("scrollTop")
    .classList.toggle("show", window.scrollY > 300);
  const secs = ["hero", "about", "services", "projects", "contact"];
  let cur = "hero";
  secs.forEach((id) => {
    const s = document.getElementById(id);
    if (s && window.scrollY >= s.offsetTop - 120) cur = id;
  });
  document
    .querySelectorAll(".nav-link")
    .forEach((l) =>
      l.classList.toggle("active", l.getAttribute("href") === "#" + cur),
    );
});

// REVEAL
const obs = new IntersectionObserver(
  (es) => {
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
document
  .querySelectorAll(".reveal,.reveal-left,.reveal-right")
  .forEach((el) => obs.observe(el));

// SKILL BARS
const bObs = new IntersectionObserver(
  (es) => {
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target
          .querySelectorAll(".skill-bar-fill")
          .forEach((b) => (b.style.width = b.dataset.width + "%"));
        bObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.3 },
);
document.querySelectorAll(".about-card").forEach((c) => bObs.observe(c));

// COUNTERS
function animCount(el, target) {
  let n = 0;
  const step = Math.ceil(target / 60);
  const t = setInterval(() => {
    n = Math.min(n + step, target);
    el.textContent = n + (target > 10 ? "+" : "");
    if (n >= target) clearInterval(t);
  }, 28);
}
const cObs = new IntersectionObserver(
  (es) => {
    es.forEach((e) => {
      if (e.isIntersecting) {
        animCount(document.getElementById("cnt1"), 42);
        animCount(document.getElementById("cnt2"), 30);
        animCount(document.getElementById("cnt3"), 5);
        cObs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.5 },
);
cObs.observe(document.querySelector(".hero-stats"));

// PHOTO UPLOAD
document.getElementById("photoInput").addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    document.getElementById("photoPlaceholder").innerHTML =
      `<img src="${e.target.result}" alt="Mohamed Nabil"/>`;
  };
  reader.readAsDataURL(file);
});

// SEND MSG
function sendMsg(btn) {
  btn.innerHTML = '<i class="fas fa-check ms-1"></i> Sent Successfully!';
  btn.style.background = "linear-gradient(135deg,#27ae60,#2ecc71)";
  setTimeout(() => {
    btn.innerHTML = 'Send Message <i class="fas fa-paper-plane ms-1"></i>';
    btn.style.background = "";
  }, 3000);
}

// SMOOTH NAV
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const t = document.querySelector(a.getAttribute("href"));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: "smooth" });
    }
  });
});
