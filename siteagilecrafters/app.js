const navItems = [
  ["expertise.html", "Expertise"], ["products.html", "Products"],
  ["industries.html", "Industries"], ["work.html", "Work"],
  ["labs.html", "Labs"], ["culture.html", "Culture"]
];

const arrow = `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" stroke-width="1.5"/></svg>`;

function mountChrome() {
  const page = location.pathname.split("/").pop() || "index.html";
  const header = document.querySelector("[data-site-header]");
  const footer = document.querySelector("[data-site-footer]");
  if (header) {
    header.innerHTML = `<a class="skip-link" href="#main">Skip to content</a>
      <nav class="site-nav" aria-label="Primary"><div class="nav-inner">
        <a class="brand" href="index.html" aria-label="AgileCrafters home"><span class="brand-mark" aria-hidden="true"></span><span>AgileCrafters</span></a>
        <div class="nav-links" id="nav-links">${navItems.map(([href, label]) => `<a href="${href}" ${page === href ? 'aria-current="page"' : ""}>${label}</a>`).join("")}<a class="nav-cta" href="contact.html" ${page === "contact.html" ? 'aria-current="page"' : ""}>Start a project</a></div>
        <button class="menu-btn" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="nav-links"><span></span><span></span></button>
      </div></nav>`;
    const nav = header.querySelector(".site-nav");
    const menu = header.querySelector(".menu-btn");
    const links = header.querySelector(".nav-links");
    const syncNav = () => nav.classList.toggle("scrolled", scrollY > 20);
    syncNav(); addEventListener("scroll", syncNav, { passive: true });
    menu.addEventListener("click", () => { const open = links.classList.toggle("open"); menu.setAttribute("aria-expanded", open); });
  }
  if (footer) footer.innerHTML = `<footer><div class="container"><div class="footer-grid">
    <div class="footer-brand"><a class="brand" href="index.html"><span class="brand-mark"></span><span>AgileCrafters</span></a><p>Technology company & software publisher. We engineer digital systems and build software products for organizations shaping what comes next.</p></div>
    <div class="footer-col"><h4>Explore</h4><a href="expertise.html">Expertise</a><a href="products.html">Products</a><a href="industries.html">Industries</a><a href="work.html">Work</a></div>
    <div class="footer-col"><h4>Company</h4><a href="labs.html">Labs</a><a href="culture.html">Culture</a><a href="contact.html">Contact</a></div>
    <div class="footer-col"><h4>Products</h4><a href="products.html#agilecloud">AgileCloud</a><a href="products.html#processable">Processable</a><a href="products.html#agileai">AgileAI</a><a href="products.html#agilex">AgileX</a><a href="products.html#agileagro">AgileAgro</a></div>
  </div><div class="footer-bottom"><span>© ${new Date().getFullYear()} AgileCrafters. All rights reserved.</span><span>Technology, crafted with intent.</span></div></div></footer>`;
}

function setupReveal() {
  const els = document.querySelectorAll(".reveal, .process-step");
  if (!els.length) return;
  els.forEach((el, index) => el.style.setProperty("--delay", `${(index % 5) * 55}ms`));
  const io = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); io.unobserve(entry.target); }
  }), { threshold: .16 });
  els.forEach(el => io.observe(el));
}

function setupNetwork() {
  const canvas = document.querySelector("#network-canvas");
  if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  const network = canvas.closest(".network");
  const core = network.querySelector(".network-core");
  const nodes = [...network.querySelectorAll(".network-node")];
  let points = [], pointer = { x: .5, y: .5 }, raf, time = 0;
  const resize = () => {
    const dpr = Math.min(devicePixelRatio, 2), rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr; canvas.height = rect.height * dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
    points = Array.from({length: 28}, () => ({ x: Math.random()*rect.width, y: Math.random()*rect.height, vx:(Math.random()-.5)*.14, vy:(Math.random()-.5)*.14, r:Math.random()*1.5+.4 }));
  };
  const draw = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight, root = network.getBoundingClientRect();
    time += .012; ctx.clearRect(0,0,w,h);
    const center = { x: w / 2, y: h / 2 };
    nodes.forEach((node, index) => {
      const rect = node.getBoundingClientRect();
      const end = { x: rect.left - root.left + rect.width / 2, y: rect.top - root.top + rect.height / 2 };
      const dx = end.x - center.x, dy = end.y - center.y;
      const control = { x: center.x + dx * .48 - dy * .08, y: center.y + dy * .48 + dx * .08 };
      const gradient = ctx.createLinearGradient(center.x, center.y, end.x, end.y);
      gradient.addColorStop(0, "rgba(52,120,246,.55)"); gradient.addColorStop(1, "rgba(81,217,239,.16)");
      ctx.strokeStyle = gradient; ctx.lineWidth = 1.15; ctx.beginPath(); ctx.moveTo(center.x, center.y); ctx.quadraticCurveTo(control.x, control.y, end.x, end.y); ctx.stroke();
      const t = (time + index / nodes.length) % 1;
      const mt = 1 - t, x = mt*mt*center.x + 2*mt*t*control.x + t*t*end.x, y = mt*mt*center.y + 2*mt*t*control.y + t*t*end.y;
      ctx.fillStyle = "rgba(81,217,239,.92)"; ctx.shadowColor = "rgba(52,120,246,.75)"; ctx.shadowBlur = 12; ctx.beginPath(); ctx.arc(x,y,2.2,0,Math.PI*2); ctx.fill(); ctx.shadowBlur = 0;
    });
    for (const p of points) { p.x += p.vx; p.y += p.vy; if(p.x<0||p.x>w)p.vx*=-1; if(p.y<0||p.y>h)p.vy*=-1; }
    for(const p of points){ ctx.fillStyle="rgba(52,120,246,.22)"; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); }
    raf=requestAnimationFrame(draw);
  };
  resize(); draw(); addEventListener("resize", resize);
  network.addEventListener("pointermove", e => { const r=canvas.getBoundingClientRect(); pointer={x:(e.clientX-r.left)/r.width,y:(e.clientY-r.top)/r.height}; core.style.setProperty("--core-x",`${(pointer.x-.5)*16}px`); core.style.setProperty("--core-y",`${(pointer.y-.5)*16}px`); network.style.transform=`rotateX(${(.5-pointer.y)*3}deg) rotateY(${(pointer.x-.5)*4}deg)`; });
  network.addEventListener("pointerleave",()=>{ core.style.setProperty("--core-x","0px"); core.style.setProperty("--core-y","0px"); network.style.transform=""; });
  document.addEventListener("visibilitychange",()=>{ if(document.hidden)cancelAnimationFrame(raf); else draw(); });
}

function setupExperience() {
  requestAnimationFrame(() => document.body.classList.add("is-ready"));
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const tiltCards = document.querySelectorAll(".engine, .product-card");
  tiltCards.forEach(card => {
    card.addEventListener("pointermove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--rx", `${((e.clientY-r.top)/r.height-.5)*-3}deg`);
      card.style.setProperty("--ry", `${((e.clientX-r.left)/r.width-.5)*4}deg`);
    });
    card.addEventListener("pointerleave", () => { card.style.setProperty("--rx", "0deg"); card.style.setProperty("--ry", "0deg"); });
  });

  let scheduled = false;
  const parallax = () => {
    const y = scrollY;
    document.querySelector(".hero")?.style.setProperty("--parallax-y", `${Math.min(y * .12, 70)}px`);
    document.querySelectorAll(".product-visual").forEach(visual => {
      const r = visual.getBoundingClientRect();
      visual.style.setProperty("--visual-y", `${Math.max(-18, Math.min(18, (innerHeight/2-r.top-r.height/2)*.035))}px`);
    });
    scheduled = false;
  };
  addEventListener("scroll", () => { if (!scheduled) { scheduled = true; requestAnimationFrame(parallax); } }, { passive: true });
  parallax();

  document.addEventListener("click", e => {
    const link = e.target.closest("a[href]");
    if (!link || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || url.hash || link.target || url.protocol !== "http:" && url.protocol !== "https:") return;
    e.preventDefault(); document.body.classList.add("is-leaving"); setTimeout(() => location.href = url.href, 260);
  });
}

function setupBuilder() {
  const stage = document.querySelector(".builder-stage");
  if (!stage) return;
  const score = document.querySelector(".score-panel");
  const palette = document.querySelectorAll(".component");
  let count = 0;
  function addNode(name, x, y) {
    if ([...stage.querySelectorAll(".builder-node")].some(n => n.dataset.name === name)) return;
    const node = document.createElement("div"); node.className="builder-node"; node.dataset.name=name; node.textContent=name;
    node.style.left=`${Math.max(10,Math.min(x,stage.clientWidth-160))}px`; node.style.top=`${Math.max(10,Math.min(y,stage.clientHeight-60))}px`; stage.append(node); count++;
    let drag=null; node.addEventListener("pointerdown",e=>{drag={x:e.clientX-parseFloat(node.style.left),y:e.clientY-parseFloat(node.style.top)};node.setPointerCapture(e.pointerId)});
    node.addEventListener("pointermove",e=>{if(!drag)return;node.style.left=`${Math.max(5,Math.min(e.clientX-drag.x,stage.clientWidth-150))}px`;node.style.top=`${Math.max(5,Math.min(e.clientY-drag.y,stage.clientHeight-50))}px`});
    node.addEventListener("pointerup",()=>drag=null); if(count>=5) score.classList.add("show");
  }
  palette.forEach((el,i)=>{ el.draggable=true; el.addEventListener("dragstart",e=>e.dataTransfer.setData("text/plain",el.dataset.component)); el.addEventListener("click",()=>addNode(el.dataset.component,50+(count%3)*160,60+Math.floor(count/3)*90)); });
  stage.addEventListener("dragover",e=>e.preventDefault());
  stage.addEventListener("drop",e=>{e.preventDefault();const r=stage.getBoundingClientRect();addNode(e.dataTransfer.getData("text/plain"),e.clientX-r.left-65,e.clientY-r.top-20)});
}

function setupContact() {
  const form = document.querySelector("#contact-form"); if (!form) return;
  form.addEventListener("submit", e => { e.preventDefault(); const fd=new FormData(form); const subject=encodeURIComponent(`Project enquiry — ${fd.get("organization")||fd.get("name")}`); const body=encodeURIComponent(`Name: ${fd.get("name")}\nOrganization: ${fd.get("organization")}\nEmail: ${fd.get("email")}\n\n${fd.get("message")}`); location.href=`mailto:contact@agilecrafters.net?subject=${subject}&body=${body}`; });
}

mountChrome(); setupExperience(); setupReveal(); setupNetwork(); setupBuilder(); setupContact();
