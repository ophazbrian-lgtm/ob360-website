(function () {
  const A = "https://ophaz.com/assets/";
  const cases = {
    beavaro: {
      title: "Beavaro", category: "Brand identity", number: "01",
      color: "#e9482e", soft: "#fff3ee",
      lead: "Naming and a complete visual system, built to make a new name feel fully formed from day one.",
      challenge: "A brand system has to do more than make a first impression. It needs rules, range and enough personality to keep every future touchpoint recognisably related.",
      scope: ["Naming direction", "Visual identity", "Colour & typography", "Brand guidelines", "Business & social applications"],
      hero: A+"guide-1.webp",
      images: ["guide-1.webp","guide-2.webp","guide-6.webp","guide-10.webp","guide-11.webp","guide-16.webp","guide-18.webp","guide-20.webp","guide-21.webp","mockup-23.webp","mockup-24.webp","mockup-26.webp"],
      captions: ["The brand begins with a clear promise.","A system, not just a logo.","Logo formats designed for real-world use.","A palette with purpose.","The hero colour in detail.","Type as part of the identity.","A visual language with range.","Texture and pattern rules.","Photography direction.","Business cards in four colourways.","Stationery that carries the system.","Social touchpoints, built to move."]
    },
    "lucky-core": {
      title: "Lucky Core Industries", category: "Campaign design", number: "02",
      color: "#263b82", soft: "#eef1ff",
      lead: "Healthcare campaigns where clarity carries as much weight as attention.",
      challenge: "Across Xenecor, OVAZA and patient education, the work needed a repeatable campaign language that made complex information easier to take in.",
      scope: ["Campaign art direction", "Information hierarchy", "Digital campaign assets", "Patient education", "Print collateral"],
      hero: A+"xenecor-poster-1.webp",
      images: ["xenecor-poster-1.webp","lci/ovaza-literature-1.jpg","xenecor-poster-1.webp","lci/ovaza-literature-1.jpg"],
      captions: ["Xenecor launch artwork.","OVAZA literature, made for a closer read.","A message with a strong visual entry point.","A practical, patient-facing format."]
    },
    "ora-marella": {
      title: "Ora Marella", category: "Fashion campaign", number: "03",
      color: "#d83e72", soft: "#fff0f5",
      lead: "AI-led image direction, advertising and banners for a confident swimwear campaign.",
      challenge: "The campaign needed a recognisable mood across high-impact ads, promotional banners and mobile moments—without the work feeling repetitive.",
      scope: ["Creative direction", "AI image direction", "Campaign advertising", "Web banners", "Promotional design"],
      hero: A+"ora-marella/swimsuit-04.jpg",
      images: ["ora-marella/swimsuit-01.jpg","ora-marella/swimsuit-02.jpg","ora-marella/swimsuit-03.jpg","ora-marella/swimsuit-04.jpg","ora-marella/static-05.jpg","ora-marella/static-06.jpg","ora-marella/banner-01.jpg","ora-marella/banner-02.jpg","ora-marella/popup-01.jpg","ora-marella/popup-02.jpg"],
      captions: ["One swimsuit. Endless confidence.","A luxury-led campaign frame.","Built for impact at a glance.","A bolder editorial moment.","Resortwear, sharpened for social.","Urgency without losing the mood.","A website offer banner.","A second banner variation.","A mobile-first campaign interruption.","A second promotional popup."]
    },
    "little-lavender": {
      title: "Little Lavender", category: "Brand launch", number: "04",
      color: "#8766a6", soft: "#f5eff9",
      lead: "Packaging, product imagery and launch touchpoints for a gentle skincare world.",
      challenge: "Every surface—from a product label to a brochure—had to feel considered, calm and credible enough to earn trust.",
      scope: ["Brand-launch direction", "Packaging design", "Product presentation", "Website direction", "Print collateral"],
      hero: A+"little-lavender/luminous-cream.jpg",
      images: ["little-lavender/luminous-cream.jpg","little-lavender/hibiscus-jar.jpg","little-lavender/hibiscus-open.jpg","little-lavender/wonder-works.jpg","little-lavender/pain-relief-oil.jpg","little-lavender/after-glow-label.png","little-lavender/business-card-1.png","little-lavender/business-card-2.png","little-lavender/brochure-inside.jpg"],
      captions: ["A hero product image that makes the world feel tangible.","Hibiscus Pink Cream.","Packaging, seen from every angle.","Wonder Works, with its own personality.","Pain Relief Oil packaging.","Label artwork with shelf presence.","Business-card front.","Business-card back.","A full brochure spread."]
    },
    "selected-campaigns": {
      title: "Selected Campaigns", category: "Campaign design", number: "05",
      color: "#0d8d72", soft: "#e8faf5",
      lead: "High-impact communications across automotive, healthcare and editorial work.",
      challenge: "Different audiences, different formats, one standard: make the message impossible to miss and easy to understand.",
      scope: ["Campaign concepts", "Digital ad creative", "Editorial email", "Information design", "Print-ready artwork"],
      hero: A+"selected-campaigns/lubech-shield.png",
      images: ["selected-campaigns/lubech-shield.png","selected-campaigns/lubech-mechanics.jpg","selected-campaigns/lubech-shifts.jpg","selected-campaigns/medical-innovation.jpg","selected-campaigns/medical-pyramid.jpg","selected-campaigns/medical-carousel-1.jpg","selected-campaigns/medical-carousel-2.jpg","selected-campaigns/medical-carousel-3.jpg","selected-campaigns/medical-carousel-4.jpg","selected-campaigns/medical-carousel-5.jpg","selected-campaigns/kionda-newsletter-1.jpg"],
      captions: ["Protection you can see.","Trust, made visual.","A performance message for social.","Medical innovation, edited for clarity.","An infographic with hierarchy.","The opening of a healthcare carousel.","The problem, distilled.","The consequence.","A useful way forward.","A human closing thought.","Long-form editorial email."]
    },
    dosti: {
      title: "Dosti", category: "Packaging & product", number: "06",
      color: "#222222", soft: "#f1f1ee",
      lead: "Bilingual conversation cards and packaging designed to invite a real response.",
      challenge: "Create a tactile product that could feel playful, thoughtful and coherent across languages, themes and physical packaging.",
      scope: ["Product concept direction", "Bilingual card design", "Packaging design", "Art direction", "Production-ready artwork"],
      hero: A+"dosti/back.webp",
      images: ["dosti/back.webp","dosti/celebration.webp","dosti/gossip.webp","dosti/humor.webp","dosti/complaining.webp","dosti/teasing.webp","dosti/listening.webp","dosti/happiness.webp","dosti/love.webp","dosti/family.webp","dosti/respect.webp","dosti/packaging-art-2.png","dosti/packaging-art-1.png"],
      captions: ["The card back, where the visual language starts.","Celebration.","Gossip.","Humour.","Complaining.","Teasing.","Listening.","Happiness.","Love.","Family.","Respect.","The front and side of the box.","The back and side of the box."]
    }
  };
  const project = cases[new URLSearchParams(location.search).get("project")] || cases.beavaro;
  document.title = project.title + " — Case Study | OB360";
  const imageMarkup = project.images.map((src,i) => '<figure class="case-image case-image--'+(i%6===0?"wide":"")+'"><img src="'+A+src+'" alt="'+project.title+": "+project.captions[i]+'" loading="'+(i < 3 ? "eager" : "lazy")+'"><figcaption>'+project.captions[i]+'</figcaption></figure>').join("");
  document.querySelector("[data-case-study]").innerHTML = `
    <style>
      .case-hero{background:${project.soft};padding:clamp(72px,11vw,150px) 0 64px;overflow:hidden}.case-hero .wrap{position:relative}.case-kicker{font-size:.75rem;letter-spacing:.13em;text-transform:uppercase;color:${project.color};font-weight:800}.case-title{font-size:clamp(3.5rem,10vw,9rem);line-height:.82;letter-spacing:-.075em;margin:22px 0;max-width:900px}.case-lead{font-size:clamp(1.15rem,2.1vw,1.65rem);line-height:1.4;max-width:680px;margin:0}.case-hero-art{width:min(65vw,720px);margin:clamp(32px,7vw,90px) 0 0 auto;display:block;max-height:68vh;object-fit:contain;filter:drop-shadow(0 26px 35px rgba(0,0,0,.12))}.case-intro{padding:clamp(60px,10vw,130px) 0}.case-intro-grid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(260px,.75fr);gap:clamp(35px,8vw,120px)}.case-intro h2{font-size:clamp(2rem,4vw,4rem);letter-spacing:-.05em;line-height:.96;margin:0}.case-intro p{font-size:1.12rem;line-height:1.6;margin:0}.case-scope{padding:60px 0;background:#171719;color:#fff}.case-scope .eyebrow{color:#bfbfba}.case-scope-list{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:#444;margin-top:28px}.case-scope-list span{padding:20px;background:#171719;font-weight:650;line-height:1.25}.case-gallery{padding:clamp(52px,8vw,112px) 0}.case-gallery-head{display:flex;align-items:end;justify-content:space-between;gap:25px;margin-bottom:36px}.case-gallery h2{font-size:clamp(2.4rem,6vw,6rem);letter-spacing:-.065em;line-height:.85;margin:0}.case-gallery-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(12px,2vw,28px)}.case-image{margin:0;min-width:0;align-self:start}.case-image--wide{grid-column:1/-1}.case-image img{display:block;width:100%;height:auto;background:#eee}.case-image figcaption{font-size:.78rem;line-height:1.3;margin-top:9px;color:#686862}.case-next{border-top:1px solid #ddd;padding:55px 0 90px}.case-next a{display:inline-flex;font-size:clamp(2.2rem,5vw,5.7rem);line-height:.9;letter-spacing:-.065em;color:inherit;text-decoration:none}.case-next a:hover{color:${project.color}}@media(max-width:720px){.case-hero{padding-top:72px}.case-hero-art{width:100%;max-height:none}.case-intro-grid{grid-template-columns:1fr}.case-scope-list{grid-template-columns:1fr 1fr}.case-gallery-grid{grid-template-columns:1fr}.case-image--wide{grid-column:auto}.case-gallery-head{display:block}.case-gallery-head p{margin-top:14px}}
    </style>
    <header class="case-hero"><div class="wrap"><p class="case-kicker">${project.number} / ${project.category}</p><h1 class="case-title">${project.title}</h1><p class="case-lead">${project.lead}</p><img class="case-hero-art" src="${project.hero}" alt="${project.title} featured project artwork"></div></header>
    <section class="case-intro"><div class="wrap case-intro-grid"><h2>Designed to hold together, wherever it shows up.</h2><p>${project.challenge}</p></div></section>
    <section class="case-scope"><div class="wrap"><p class="eyebrow">What we made</p><div class="case-scope-list">${project.scope.map((item,i)=>'<span>0'+(i+1)+' — '+item+'</span>').join("")}</div></div></section>
    <section class="case-gallery"><div class="wrap"><div class="case-gallery-head"><h2>The work.</h2><p>${project.images.length} project details and applications.</p></div><div class="case-gallery-grid">${imageMarkup}</div></div></section>
    <nav class="case-next"><div class="wrap"><p class="eyebrow">Keep exploring</p><a href="/work.html">View all projects <span aria-hidden="true">↗</span></a></div></nav>`;
})();