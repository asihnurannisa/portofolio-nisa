
document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const links=document.querySelector('.nav-links');
  if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Tutup':'Menu';});}
  const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a').forEach(a=>{const href=(a.getAttribute('href')||'').split('/').pop().toLowerCase();if(href===current||(current==='index.html'&&href==='about.html'))a.classList.add('active');});
  const revealEls=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08});revealEls.forEach(el=>io.observe(el));}else revealEls.forEach(el=>el.classList.add('visible'));
  const filterBtns=document.querySelectorAll('[data-filter]');
  const projects=document.querySelectorAll('[data-category]');
  filterBtns.forEach(btn=>btn.addEventListener('click',()=>{filterBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;projects.forEach(card=>{card.hidden=!(f==='all'||card.dataset.category.split(' ').includes(f));});}));
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
});
