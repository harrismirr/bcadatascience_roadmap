/* ===================== 3D Floating Particles Background ===================== */
(function () {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);
  let particles = [];

  function reset() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    particles = [];
    const count = Math.floor(Math.max(60, Math.min(140, w / 10)));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2.5 + 0.8,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    // subtle background glow
    const g = ctx.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, "rgba(2,6,23,0.1)");
    g.addColorStop(1, "rgba(8,18,30,0.05)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);

    // draw particles
    for (let p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,212,255,0.85)";
      ctx.shadowBlur = 12;
      ctx.shadowColor = "#00d4ff";
      ctx.fill();

      p.x += p.dx;
      p.y += p.dy;

      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;
    }

    // connect lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = "rgba(0,212,255," + (0.12 - dist / 1000) + ")";
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => {
    reset();
  });

  reset();
  draw();
})();

/* ===================== Typing animation (hero) ===================== */
(function () {
  const typingEl = document.getElementById("typing");
  const roles = ["Data Science Enthusiast", "Machine Learning Learner", "Data Visualizer", "Problem Solver"];
  if (!typingEl) return;
  let rI = 0,
    cI = 0,
    deleting = false;

  function loop() {
    const role = roles[rI];
    if (!deleting) {
      cI++;
      typingEl.textContent = role.substring(0, cI);
      if (cI === role.length) {
        deleting = true;
        setTimeout(loop, 900);
        return;
      }
    } else {
      cI--;
      typingEl.textContent = role.substring(0, cI);
      if (cI === 0) {
        deleting = false;
        rI = (rI + 1) % roles.length;
      }
    }
    setTimeout(loop, deleting ? 60 : 120);
  }
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(loop, 400);
  });
})();

/* ===================== Header scroll effect & smooth nav ===================== */
(function () {
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) header.classList.add("active");
    else header.classList.remove("active");
  });

  document.querySelectorAll("nav a").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      const id = a.getAttribute("href");
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();

/* ===================== Skill bars animation ===================== */
(function () {
  function animateSkillBars() {
    document.querySelectorAll(".fill").forEach(function (el) {
      const percent = el.getAttribute("data-percent") || "0";
      el.style.width = percent + "%";
    });
  }
  window.addEventListener("load", animateSkillBars);
})();

/* ===================== Sample Mini Chart (SVG bars) ===================== */
(function () {
  function drawMiniChart() {
    const svg = document.getElementById("miniChart");
    if (!svg) return;
    const data = [20, 45, 35, 65, 55, 80, 70, 95];
    const w = 600,
      h = 160,
      pad = 20;
    const barW = ((w - pad * 2) / data.length) * 0.6;
    svg.setAttribute("viewBox", "0 0 " + w + " " + h);
    svg.innerHTML = "";
    const max = Math.max.apply(null, data);
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    svg.appendChild(defs);

    data.forEach(function (v, i) {
      const x = pad + i * ((w - pad * 2) / data.length) + ((w - pad * 2) / data.length - barW) / 2;
      const barH = (v / max) * (h - pad * 2);
      const y = h - pad - barH;

      const grad = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
      grad.setAttribute("id", "g" + i);
      grad.setAttribute("x1", "0");
      grad.setAttribute("x2", "0");
      grad.setAttribute("y1", "0");
      grad.setAttribute("y2", "1");

      const s1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      s1.setAttribute("offset", "0%");
      s1.setAttribute("stop-color", "#00d4ff");
      const s2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      s2.setAttribute("offset", "100%");
      s2.setAttribute("stop-color", "#8b5cf6");
      grad.appendChild(s1);
      grad.appendChild(s2);
      defs.appendChild(grad);

      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", x);
      rect.setAttribute("y", y);
      rect.setAttribute("width", barW);
      rect.setAttribute("height", barH);
      rect.setAttribute("rx", 6);
      rect.setAttribute("fill", "url(#g" + i + ")");
      svg.appendChild(rect);
    });
  }
  window.addEventListener("load", drawMiniChart);
})();

/* ===================== Project card effects ===================== */
(function () {
  document.querySelectorAll(".project-card").forEach(function (c) {
    c.addEventListener("mouseenter", function () {
      c.style.transform = "translateY(-8px) scale(1.02)";
    });
    c.addEventListener("mouseleave", function () {
      c.style.transform = "none";
    });
  });
})();

/* ===================== Contact form validation & save note ===================== */
(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields before submitting.");
      return;
    }
    var emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Thank you " + name + "! Your message has been submitted successfully.");
    form.reset();
  });

  const saveBtn = document.getElementById("saveNote");
  if (saveBtn) {
    saveBtn.addEventListener("click", function () {
      const name = document.getElementById("name").value.trim();
      const message = document.getElementById("message").value.trim();
      if (!message) {
        alert("Type a quick note in the message box to save.");
        return;
      }
      const notes = JSON.parse(localStorage.getItem("quickNotes") || "[]");
      notes.push({ name: name, message: message, time: new Date().toLocaleString() });
      localStorage.setItem("quickNotes", JSON.stringify(notes));
      alert("Note saved locally!");
    });
  }
})();

/* ===================== Theme toggle ===================== */
(function () {
  const themeBtn = document.getElementById("themeBtn");
  if (!themeBtn) return;
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");
    themeBtn.innerHTML = document.body.classList.contains("light-theme") ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  });
})();