const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
if(menuButton&&navLinks){menuButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));}
document.querySelectorAll('.bib-toggle').forEach(button=>button.addEventListener('click',()=>{const bib=button.closest('.pub-body').querySelector('.bibtex');const open=bib.hidden;bib.hidden=!open;button.setAttribute('aria-expanded',String(open));button.textContent=open?'Hide BibTeX':'BibTeX';}));
document.getElementById('year').textContent=new Date().getFullYear();
