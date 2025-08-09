
document.addEventListener('DOMContentLoaded', function(){
  const links = document.querySelectorAll('nav a');
  links.forEach(a=>{
    if(window.location.pathname.endsWith(a.getAttribute('href')) || (a.getAttribute('href')==='index.html' && (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html')))){
      a.style.background='var(--navy)';
      a.style.color='white';
    }
  });
});
