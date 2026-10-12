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
        <a class="brand" href="index.html" aria-label="AgileCrafters home"><span class="brand-mark" aria-hidden="true"></span><span class="brand-name">AgileCrafters</span><span class="brand-strap">Technologies<br>Human progress</span></a>
        <div class="nav-links" id="nav-links">${navItems.map(([href, label]) => `<a href="${href}" ${page === href ? 'aria-current="page"' : ""}>${label}</a>`).join("")}<div class="locale-switch" role="group" aria-label="Language"><button type="button" data-locale="en" aria-label="English">EN</button><span aria-hidden="true">/</span><button type="button" data-locale="fr" aria-label="Français">FR</button></div><a class="nav-cta" href="contact.html" ${page === "contact.html" ? 'aria-current="page"' : ""}>Start a project ${arrow}</a></div>
        <button class="menu-btn" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="nav-links"><span></span><span></span></button>
      </div></nav>`;
    const nav = header.querySelector(".site-nav");
    const menu = header.querySelector(".menu-btn");
    const links = header.querySelector(".nav-links");
    const syncNav = () => nav.classList.toggle("scrolled", scrollY > 20);
    syncNav(); addEventListener("scroll", syncNav, { passive: true });
    menu.addEventListener("click", () => { const open = links.classList.toggle("open"); menu.setAttribute("aria-expanded", open); });
  }
  if (!document.querySelector(".scroll-signal")) {
    document.body.insertAdjacentHTML("beforeend", `<div class="scroll-signal" aria-hidden="true"><div class="rail-numbers"><span class="active">01</span><span>02</span><span>03</span><span>04</span><span>05</span></div><i></i><b>Ideas<br>into<br>impact</b><small>01</small></div>`);
  }
  if (footer) footer.innerHTML = `<footer><div class="container"><div class="footer-grid">
    <div class="footer-brand"><a class="brand" href="index.html"><span class="brand-mark"></span><span>AgileCrafters</span></a><p>Technology company & software publisher. We engineer digital systems and build software products for organizations shaping what comes next.</p></div>
    <div class="footer-col"><h4>Explore</h4><a href="expertise.html">Expertise</a><a href="products.html">Products</a><a href="industries.html">Industries</a><a href="work.html">Work</a></div>
    <div class="footer-col"><h4>Company</h4><a href="labs.html">Labs</a><a href="culture.html">Culture</a><a href="contact.html">Contact</a></div>
    <div class="footer-col"><h4>Products</h4><a href="products.html#agilecloud">AgileCloud</a><a href="products.html#processable">Processable</a><a href="products.html#agileai">AgileAI</a><a href="products.html#agilex">AgileX</a><a href="products.html#agileagro">AgileAgro</a></div>
  </div><div class="footer-bottom"><span>© ${new Date().getFullYear()} AgileCrafters. <span>All rights reserved.</span></span><span>Technology, crafted with intent.</span></div></div></footer>`;
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
  let points = [], pointer = { x: .5, y: .5 }, raf;
  const resize = () => {
    const dpr = Math.min(devicePixelRatio, 2), rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr; canvas.height = rect.height * dpr; ctx.setTransform(dpr,0,0,dpr,0,0);
    points = Array.from({length: 28}, () => ({ x: Math.random()*rect.width, y: Math.random()*rect.height, vx:(Math.random()-.5)*.14, vy:(Math.random()-.5)*.14, r:Math.random()*1.5+.4 }));
  };
  const draw = () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    ctx.clearRect(0,0,w,h);
    for (const p of points) { p.x += p.vx; p.y += p.vy; if(p.x<0||p.x>w)p.vx*=-1; if(p.y<0||p.y>h)p.vy*=-1; }
    for(const p of points){ ctx.fillStyle="rgba(73,102,216,.12)"; ctx.fillRect(p.x,p.y,Math.max(1,p.r),Math.max(1,p.r)); }
    raf=requestAnimationFrame(draw);
  };
  resize(); draw(); addEventListener("resize", resize);
  network.addEventListener("pointermove", e => { const r=canvas.getBoundingClientRect(); pointer={x:(e.clientX-r.left)/r.width,y:(e.clientY-r.top)/r.height}; core.style.setProperty("--core-x",`${(pointer.x-.5)*16}px`); core.style.setProperty("--core-y",`${(pointer.y-.5)*16}px`); network.style.transform=`rotateX(${(.5-pointer.y)*3}deg) rotateY(${(pointer.x-.5)*4}deg)`; });
  network.addEventListener("pointerleave",()=>{ core.style.setProperty("--core-x","0px"); core.style.setProperty("--core-y","0px"); network.style.transform=""; });
  document.addEventListener("visibilitychange",()=>{ if(document.hidden)cancelAnimationFrame(raf); else draw(); });
}

function setupProductExplorer() {
  const tabs = [...document.querySelectorAll("[data-product-tab]")];
  const panels = [...document.querySelectorAll("[data-product-panel]")];
  if (!tabs.length || !panels.length) return;
  const indexLabel = document.querySelector("[data-product-index]");

  const activate = (key, updateUrl = true) => {
    const panel = panels.find(item => item.dataset.productPanel === key) || panels[0];
    const activeKey = panel.dataset.productPanel;
    tabs.forEach(tab => {
      const active = tab.dataset.productTab === activeKey;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    panels.forEach(item => {
      const active = item === panel;
      item.hidden = !active;
      item.classList.toggle("is-active", active);
    });
    if (indexLabel) indexLabel.textContent = String(panels.indexOf(panel) + 1).padStart(2, "0");
    if (updateUrl) {
      const url = new URL(location.href);
      url.hash = activeKey;
      history.replaceState(null, "", url);
    }
    window.AgileI18n?.apply(panel);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activate(tab.dataset.productTab));
    tab.addEventListener("keydown", event => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      tabs[next].focus();
      activate(tabs[next].dataset.productTab);
    });
  });

  document.querySelectorAll("[data-architecture-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      const scene = button.closest(".product-panel")?.querySelector(".architecture-scene");
      if (!scene) return;
      const expanded = scene.classList.toggle("is-expanded");
      button.setAttribute("aria-pressed", String(expanded));
    });
  });

  const requested = location.hash.slice(1).toLowerCase();
  activate(panels.some(panel => panel.dataset.productPanel === requested) ? requested : panels[0].dataset.productPanel, false);
}

function setupExperience() {
  requestAnimationFrame(() => document.body.classList.add("is-ready"));
  const scrollSignal = document.querySelector(".scroll-signal");
  const syncScrollSignal = () => {
    if (!scrollSignal) return;
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const progress = Math.min(1, Math.max(0, scrollY / max));
    scrollSignal.style.setProperty("--progress", progress);
    const counter = scrollSignal.querySelector("small");
    if (counter) counter.textContent = String(Math.round(progress * 99)).padStart(2, "0");
  };
  syncScrollSignal();
  addEventListener("scroll", syncScrollSignal, { passive: true });
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
    e.preventDefault(); document.body.classList.add("is-leaving"); setTimeout(() => location.href = url.href, 360);
  });
}

function setupBuilder() {
  const stage = document.querySelector(".builder-stage");
  if (!stage) return;
  const score = document.querySelector(".score-panel");
  const palette = document.querySelectorAll(".component");
  const help = stage.querySelector("[data-builder-help]");
  const clearLinks = stage.querySelector("[data-clear-links]");
  const svgNS = "http://www.w3.org/2000/svg";
  const linksLayer = document.createElementNS(svgNS, "svg");
  linksLayer.classList.add("builder-links");
  linksLayer.setAttribute("aria-hidden", "true");
  linksLayer.innerHTML = `<defs><marker id="builder-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z"/></marker></defs>`;
  stage.prepend(linksLayer);
  let count = 0, serial = 0, connectFrom = null;
  let connections = [];

  const translate = value => window.AgileI18n?.t(value) || value;
  const setHelp = key => { if (help) help.textContent = translate(key); };
  const resetConnection = () => {
    connectFrom?.classList.remove("is-link-source");
    connectFrom = null;
    stage.classList.remove("is-connecting");
    setHelp("Click a connection point, then another component.");
  };
  const anchors = (from, to) => {
    const stageRect = stage.getBoundingClientRect(), a = from.getBoundingClientRect(), b = to.getBoundingClientRect();
    const forward = a.left + a.width / 2 <= b.left + b.width / 2;
    return {
      x1: (forward ? a.right : a.left) - stageRect.left,
      y1: a.top + a.height / 2 - stageRect.top,
      x2: (forward ? b.left : b.right) - stageRect.left,
      y2: b.top + b.height / 2 - stageRect.top,
      direction: forward ? 1 : -1
    };
  };
  const renderConnections = () => {
    linksLayer.querySelectorAll(".builder-link-group").forEach(group => group.remove());
    connections.forEach(connection => {
      const { x1, y1, x2, y2, direction } = anchors(connection.from, connection.to);
      const bend = Math.max(55, Math.abs(x2 - x1) * .42);
      const d = `M ${x1} ${y1} C ${x1 + bend * direction} ${y1}, ${x2 - bend * direction} ${y2}, ${x2} ${y2}`;
      const group = document.createElementNS(svgNS, "g");
      group.classList.add("builder-link-group");
      const path = document.createElementNS(svgNS, "path");
      path.classList.add("builder-link");
      path.setAttribute("d", d);
      path.setAttribute("marker-end", "url(#builder-arrow)");
      const hit = document.createElementNS(svgNS, "path");
      hit.classList.add("builder-link-hit");
      hit.setAttribute("d", d);
      hit.addEventListener("click", () => {
        connections = connections.filter(item => item !== connection);
        renderConnections();
      });
      group.append(path, hit);
      linksLayer.append(group);
    });
    if (clearLinks) clearLinks.disabled = connections.length === 0;
  };
  const chooseConnection = node => {
    if (!connectFrom) {
      connectFrom = node;
      node.classList.add("is-link-source");
      stage.classList.add("is-connecting");
      setHelp("Choose a second component.");
      return;
    }
    if (connectFrom === node) { resetConnection(); return; }
    const exists = connections.some(connection => connection.from === connectFrom && connection.to === node || connection.from === node && connection.to === connectFrom);
    if (!exists) connections.push({ from: connectFrom, to: node });
    resetConnection();
    renderConnections();
  };
  clearLinks?.addEventListener("click", () => { connections = []; resetConnection(); renderConnections(); });

  function addNode(name, x, y) {
    if ([...stage.querySelectorAll(".builder-node")].some(n => n.dataset.name === name)) return;
    const node = document.createElement("div");
    node.className="builder-node";
    node.dataset.name=name;
    node.id=`builder-node-${++serial}`;
    node.innerHTML=`<button class="node-port port-in" type="button" aria-label="${translate("Connect")} ${translate(name)}"></button><span class="builder-node-label">${translate(name)}</span><button class="node-port port-out" type="button" aria-label="${translate("Connect")} ${translate(name)}"></button>`;
    node.style.left=`${Math.max(10,Math.min(x,stage.clientWidth-160))}px`; node.style.top=`${Math.max(10,Math.min(y,stage.clientHeight-60))}px`; stage.append(node); count++;
    node.querySelectorAll(".node-port").forEach(port => port.addEventListener("click", event => { event.stopPropagation(); chooseConnection(node); }));
    let drag=null;
    node.addEventListener("pointerdown",e=>{if(e.target.closest(".node-port"))return;drag={x:e.clientX-parseFloat(node.style.left),y:e.clientY-parseFloat(node.style.top)};node.setPointerCapture(e.pointerId)});
    node.addEventListener("pointermove",e=>{if(!drag)return;node.style.left=`${Math.max(5,Math.min(e.clientX-drag.x,stage.clientWidth-node.offsetWidth-5))}px`;node.style.top=`${Math.max(5,Math.min(e.clientY-drag.y,stage.clientHeight-node.offsetHeight-5))}px`;renderConnections()});
    const stopDrag=()=>drag=null;
    node.addEventListener("pointerup",stopDrag); node.addEventListener("pointercancel",stopDrag);
    if(count>=5) score.classList.add("show");
  }
  palette.forEach(el=>{ el.draggable=true; el.addEventListener("dragstart",e=>e.dataTransfer.setData("text/plain",el.dataset.component)); el.addEventListener("click",()=>{const columns=Math.max(1,Math.floor((stage.clientWidth-80)/180));addNode(el.dataset.component,50+(count%columns)*180,90+Math.floor(count/columns)*105)}); });
  stage.addEventListener("dragover",e=>e.preventDefault());
  stage.addEventListener("drop",e=>{e.preventDefault();const r=stage.getBoundingClientRect();addNode(e.dataTransfer.getData("text/plain"),e.clientX-r.left-65,e.clientY-r.top-20)});
  addEventListener("resize", renderConnections);
  document.addEventListener("localechange",()=>{
    stage.querySelectorAll(".builder-node").forEach(node=>{
      node.querySelector(".builder-node-label").textContent=translate(node.dataset.name);
      node.querySelectorAll(".node-port").forEach(port=>port.setAttribute("aria-label",`${translate("Connect")} ${translate(node.dataset.name)}`));
    });
    setHelp(connectFrom ? "Choose a second component." : "Click a connection point, then another component.");
  });
}

function setupContact() {
  const form = document.querySelector("#contact-form"); if (!form) return;
  form.addEventListener("submit", e => { e.preventDefault(); const fd=new FormData(form); const french=window.AgileI18n?.locale==="fr"; const subject=encodeURIComponent(`${french?"Demande de projet :":"Project enquiry:"} ${fd.get("organization")||fd.get("name")}`); const body=encodeURIComponent(`${french?"Nom":"Name"}: ${fd.get("name")}\n${french?"Organisation":"Organization"}: ${fd.get("organization")}\n${french?"E-mail":"Email"}: ${fd.get("email")}\n\n${fd.get("message")}`); location.href=`mailto:contact@agilecrafters.net?subject=${subject}&body=${body}`; });
}

mountChrome(); window.AgileI18n?.init(); setupExperience(); setupReveal(); setupNetwork(); setupProductExplorer(); setupBuilder(); setupContact();
