// Lynx — script.js (small interactions & scroll reveal)
document.addEventListener('DOMContentLoaded', function(){
  // Year update
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    if(nav.classList.contains('open')){
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.right = '20px';
      nav.style.top = '64px';
      nav.style.background = 'rgba(11,11,11,0.95)';
      nav.style.padding = '12px';
      nav.style.borderRadius = '12px';
    } else {
      nav.style.display = '';
      nav.style.position = '';
    }
  });

  // Small scroll reveal
  const revealEls = document.querySelectorAll('.section-title, .card, .about-list li, .contact-card');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.style.transform = 'translateY(0px)';
        entry.target.style.opacity = 1;
        entry.target.style.transition = 'all 600ms cubic-bezier(.2,.9,.2,1)';
        io.unobserve(entry.target);
      }
    })
  }, {threshold:0.12});

  revealEls.forEach(el=>{
    el.style.transform = 'translateY(18px)';
    el.style.opacity = 0;
    io.observe(el);
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        window.scrollTo({top: target.offsetTop - 70, behavior: 'smooth'});
        // close menu on mobile
        if(nav.classList.contains('open')){
          nav.classList.remove('open');
          nav.style.display = '';
        }
      }
    });
  });
});
