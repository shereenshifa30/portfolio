<<<<<<< HEAD

const ham = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
ham?.addEventListener('click', () => {
  const open = drawer.style.display === 'block';
  drawer.style.display = open ? 'none' : 'block';
  ham.setAttribute('aria-expanded', (!open).toString());
});


drawer?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => drawer.style.display = 'none')
);


const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  

  if(!data.name || !data.email || !data.message){
    statusEl.textContent = 'Please fill in all required fields.';
    statusEl.style.color = '#f59e0b';
    return;
  }
  statusEl.textContent = 'Message sent (demo). Replace with your backend/email service.';
  statusEl.style.color = '#22c55e';
  form.reset();
});
=======

const ham = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
ham?.addEventListener('click', () => {
  const open = drawer.style.display === 'block';
  drawer.style.display = open ? 'none' : 'block';
  ham.setAttribute('aria-expanded', (!open).toString());
});


drawer?.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => drawer.style.display = 'none')
);


const form = document.getElementById('contactForm');
const statusEl = document.getElementById('formStatus');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  

  if(!data.name || !data.email || !data.message){
    statusEl.textContent = 'Please fill in all required fields.';
    statusEl.style.color = '#f59e0b';
    return;
  }
  statusEl.textContent = 'Message sent (demo). Replace with your backend/email service.';
  statusEl.style.color = '#22c55e';
  form.reset();
});
>>>>>>> c50da27c4e759e6f9240e5743abff7252981044e
