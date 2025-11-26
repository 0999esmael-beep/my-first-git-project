// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
navToggle.addEventListener('click', ()=>{
  siteNav.classList.toggle('show');
});

// Smooth scrolling for nav links
document.querySelectorAll('.site-nav a').forEach(link =>{
  link.addEventListener('click', e =>{
    const href = link.getAttribute('href');
    if(href && href.startsWith('#')){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      siteNav.classList.remove('show');
    }
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple contact form handling (no real server)
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){
    formMessage.textContent = 'Please fill out all fields.';
    return;
  }
  // Fake submit: show success and clear
  formMessage.textContent = 'Thanks! Your message was sent (locally).';
  form.reset();
  setTimeout(()=> formMessage.textContent='', 4000);
});

// --- Theme toggle (persist in localStorage)
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;
function applyTheme(theme){
  if(theme === 'light'){
    root.setAttribute('data-theme','light');
    themeToggle.textContent = '☀️';
  } else {
    root.removeAttribute('data-theme');
    themeToggle.textContent = '🌙';
  }
}
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);
themeToggle.addEventListener('click', ()=>{
  const current = localStorage.getItem('theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

// --- Project modal / lightbox
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.getElementById('modalClose');
function openModal(imgSrc, caption){
  modalImg.src = imgSrc;
  modalCaption.textContent = caption || '';
  modal.setAttribute('aria-hidden','false');
}
function closeModal(){
  modal.setAttribute('aria-hidden','true');
  modalImg.src = '';
}
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal(); });
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeModal(); });

document.querySelectorAll('.card img, .card h3').forEach(el=>{
  el.style.cursor = 'pointer';
  el.addEventListener('click', (e)=>{
    const card = el.closest('.card');
    const img = card.querySelector('img');
    const title = card.querySelector('h3')?.textContent || '';
    if(img) openModal(img.src, title);
  });
});

// --- Copy email button
const copyEmail = document.getElementById('copyEmail');
const emailText = document.getElementById('emailText');
if(copyEmail && emailText){
  copyEmail.addEventListener('click', async ()=>{
    const text = emailText.textContent.trim();
    try{
      await navigator.clipboard.writeText(text);
      copyEmail.textContent = 'Copied';
      setTimeout(()=> copyEmail.textContent = 'Copy', 2000);
    }catch(err){
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text; document.body.appendChild(ta); ta.select();
      try{ document.execCommand('copy'); copyEmail.textContent = 'Copied'; }
      catch(e){ alert('Copy not supported'); }
      ta.remove(); setTimeout(()=> copyEmail.textContent = 'Copy', 2000);
    }
  });
}