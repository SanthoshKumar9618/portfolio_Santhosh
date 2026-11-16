/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show');
      });
  }
};
showMenu('nav-toggle','nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
      
      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
          sectionsClass && sectionsClass.classList.add('active-link');
      } else {
          sectionsClass && sectionsClass.classList.remove('active-link');
      }
  });
};
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
  });
  sr.reveal('.home__data, .about__img',{});
  sr.reveal('.home__img, .about__subtitle, .about__text',{delay: 400});
  sr.reveal('.home__social-icon',{ interval: 200});
  sr.reveal('.skills__group, .experience__card, .project__card, .contact__input',{interval: 200});
}

/*===== FOOTER YEAR =====*/
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/*===== EMAILJS CONTACT FORM =====*/
document.addEventListener('DOMContentLoaded', function () {
  if (typeof emailjs === 'undefined') return;
  emailjs.init("DDgEs4wbvUZIH3wE5"); // replace with your EmailJS Public Key

  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    

emailjs.sendForm('service_07q9bmu', 'template_hzcaiy4', this)

      .then(() => {
        alert('✅ Message sent successfully!');
        this.reset();
      }, (error) => {
        alert('❌ Message failed to send. Please try again.');
        console.error('EmailJS Error:', error);
      });
  });
});
