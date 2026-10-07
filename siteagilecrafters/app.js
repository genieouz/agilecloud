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
  const io = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); io.unobserve(entry.target); }
  }), { threshold: .16 });
  els.forEach(el => io.observe(el));
}

function setupNetwork() {
  const canvas = document.querySelector("#network-canvas");
  if (!canvas || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  let points = [], pointer = { x: .5, y: .5 }, raf;
  const resize = () => {
    const dpr = Math.min(devicePixelRatio, 2), rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr; canvas.height = rect.height * dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
    points = Array.from({length: 38}, () => ({ x: Math.random()*rect.width, y: Math.random()*rect.height, vx:(Math.random()-.5)*.18, vy:(Math.random()-.5)*.18, r:Math.random()*1.3+.4 }));
  };
  const draw = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight; ctx.clearRect(0,0,w,h);
    for (const p of points) { p.x += p.vx; p.y += p.vy; if(p.x<0||p.x>w)p.vx*=-1; if(p.y<0||p.y>h)p.vy*=-1; }
    for(let i=0;i<points.length;i++) for(let j=i+1;j<points.length;j++) { const a=points[i],b=points[j], d=Math.hypot(a.x-b.x,a.y-b.y); if(d<115){ ctx.strokeStyle=`rgba(90,164,235,${(1-d/115)*.13})`; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); } }
    for(const p of points){ ctx.fillStyle="rgba(106,213,255,.42)"; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); }
    raf=requestAnimationFrame(draw);
  };
  resize(); draw(); addEventListener("resize", resize);
  canvas.closest(".network")?.addEventListener("pointermove", e => { const r=canvas.getBoundingClientRect(); pointer={x:(e.clientX-r.left)/r.width,y:(e.clientY-r.top)/r.height}; canvas.closest(".network").querySelector(".network-core").style.transform=`translate(calc(-50% + ${(pointer.x-.5)*12}px),calc(-50% + ${(pointer.y-.5)*12}px))`; });
  document.addEventListener("visibilitychange",()=>{ if(document.hidden)cancelAnimationFrame(raf); else draw(); });
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

mountChrome(); setupReveal(); setupNetwork(); setupBuilder(); setupContact();
