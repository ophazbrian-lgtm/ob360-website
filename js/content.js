/* Fetches /content/*.json (editable via the CMS) and renders into the page */
(function () {
  async function fetchJSON(path) {
    const res = await fetch(path);
    if (!res.ok) throw new Error("Failed to load " + path);
    return res.json();
  }
  function serviceCard(s, index) {
    const bullets = (s.bullets || []).map((b) => "<li>"+b+"</li>").join("");
    return '<article class="service-card reveal" id="'+s.id+'"><div class="service-num">'+String(index+1).padStart(2,"0")+'</div><h3>'+s.title+'</h3><p>'+s.summary+'</p><ul class="service-list">'+bullets+'</ul><a href="/contact.html?service='+encodeURIComponent(s.title)+'" class="quote-link">Get a quote</a></article>';
  }
  function portfolioCard(p) {
    return '<a href="'+p.link+'" class="port-card reveal" aria-label="Read the '+p.title+' case study"><img src="'+p.image+'" alt="'+p.title+'" loading="lazy"><div class="port-overlay"><span class="tag">'+p.category+'</span><h3>'+p.title+'</h3><span style="display:block;margin-top:8px;font-size:.76rem;">'+(p.summary||"Read case study")+' →</span></div></a>';
  }
  async function renderServices(selector, opts) {
    const el=document.querySelector(selector); if(!el)return;
    try { const data=await fetchJSON("/content/services.json"); const list=opts&&opts.limit?data.items.slice(0,opts.limit):data.items; el.innerHTML='<div class="grid-services">'+list.map(serviceCard).join("")+"</div>"; if(window.OB360)window.OB360.wireRevealOnScroll(); }
    catch(e){el.innerHTML="<p>Could not load services right now.</p>";}
  }
  async function renderPortfolio(selector, opts) {
    const el=document.querySelector(selector); if(!el)return;
    try { const data=await fetchJSON("/content/portfolio.json"); const list=opts&&opts.limit?data.items.slice(0,opts.limit):data.items; el.innerHTML='<div class="grid-portfolio">'+list.map(portfolioCard).join("")+"</div>"; if(window.OB360)window.OB360.wireRevealOnScroll(); }
    catch(e){el.innerHTML="<p>Could not load case studies right now.</p>";}
  }
  window.OB360Content={fetchJSON,renderServices,renderPortfolio};
})();