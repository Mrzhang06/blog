!function(f,h){void 0!==f.IntersectionObserver&&h.querySelectorAll("#toc").forEach(function(t){const s=new Set,o=new Map,n=Array.from(t.querySelectorAll(".menu-list > li > a"));for(const i of n){var e=i.getAttribute("href").trim().slice(1),e=h.getElementById(e);e&&o.set(e,i)}const a=Array.from(o.keys());var r=new IntersectionObserver(e=>{for(const t of e)t.isIntersecting?s.add(t.target):s.delete(t.target);let r;if(s.size?r=[...s].sort((t,e)=>t.offsetTop-e.offsetTop)[0]:a.length&&(r=a.filter(t=>t.offsetTop<f.scrollY).sort((t,e)=>e.offsetTop-t.offsetTop)[0]),r&&o.has(r)){n.forEach(t=>t.classList.remove("is-active"));e=o.get(r);e.classList.add("is-active");let t=e.parentElement.parentElement;for(;t.classList.contains("menu-list")&&"li"===t.parentElement.tagName.toLowerCase();)t.parentElement.children[0].classList.add("is-active"),t=t.parentElement.parentElement}},{threshold:0});for(const l of a)if(r.observe(l),o.has(l)){const c=o.get(l);c.setAttribute("data-href",c.getAttribute("href")),c.setAttribute("href","javascript:;"),c.addEventListener("click",()=>{"function"==typeof l.scrollIntoView&&l.scrollIntoView({behavior:"smooth"});var t=c.getAttribute("data-href");history.pushState?history.pushState(null,null,t):location.hash=t}),l.style.scrollMargin="1em"}})}(window,document);