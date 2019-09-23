


document.addEventListener("DOMContentLoaded", function(event) { 
    
    let name = document.querySelector(".navbar-brand");
    let nav = document.querySelector("nav");
   let navLinks = document.querySelectorAll(".nav li"); 

   navLinks.forEach(function(navItem){
     navItem.addEventListener('click', function(){
      navLinks.forEach(function(navItem){
        navItem.classList.remove("active-menu-item")
      })
      this.classList.add("active-menu-item")
       
     })
   })
    
  window.onscroll = () => {
    var y = window.scrollY; 
   
 
    if (y <= 40){
    name.textContent = 'Rene van Dijk'
    name.classList.remove("scroll-active");
    name.classList.add("brand-regular")
 
    }else{
        name.classList.add("scroll-active")
        name.classList.remove("brand-regular");
        name.textContent = 'R.'
      
    }
   
   
    if (y <= 850){
      nav.classList.remove("bg-light")
      nav.classList.remove("shadow")
      nav.classList.add('grey')
      nav.classList.remove('dark-orange')
      }else{
          nav.classList.add('bg-light')
          nav.classList.add('shadow')
          nav.classList.add('dark-orange')
         
      }

  };

  ScrollReveal({ distance: '60px' });

  ScrollReveal().reveal('.timeline-panel', {  interval: 700, origin: 'left', scale: 0.85 });

  ScrollReveal().reveal('.bigTextBlack', { delay: 200, origin: 'left', scale: 0.85, duration: 1000 });
  
  // red text
  ScrollReveal().reveal('.animation-one', { delay: 1000,  origin: 'left', scale: 0.85, duration: 1000 });
  ScrollReveal().reveal('.animation-two', { delay: 1500,  origin: 'left', scale: 0.85, duration: 1000 });
  ScrollReveal().reveal('.animation-three', { delay: 2000,  origin: 'left', scale: 0.85, duration: 1000 });
// image header
  ScrollReveal().reveal('.header-img', { delay: 600,  origin: 'right', scale: 0.85, duration: 1000 });

  // portfolio animations
  // ScrollReveal().reveal('.portfolio-image-big', { interval: 700, origin: 'right', scale: 0.85, duration: 900 });
  ScrollReveal().reveal('.project-preview-img', {  interval: 700, origin: 'right', scale: 0.85, duration: 900 });
  ScrollReveal().reveal('.huge-img', { delay: 400 ,opacity: 0, duration: 1000 });
  ScrollReveal().reveal('.summary-container', {  origin: 'right', scale: 0.85, duration: 900  });
  ScrollReveal().reveal('.subText-Container', {   interval: 700, origin: 'right', scale: 0.85, duration: 900 });



  // portfolio header 
 

  ScrollReveal().reveal('.project-title', { delay: 500, origin: 'right', scale: 0.65, duration: 900 });
  ScrollReveal().reveal('.project-subtitle', { delay: 1000, origin: 'right', scale: 0.65, duration: 900 });
  
  });

