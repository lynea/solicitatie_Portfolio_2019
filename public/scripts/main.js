


document.addEventListener("DOMContentLoaded", function(event) { 
    
    let name = document.querySelector(".navbar-brand");
    let nav = document.querySelector("nav");
   

    
  window.onscroll = () => {
    var y = window.scrollY; 
   
 
    if (y <= 40){
    name.textContent = 'Rene van Dijk'
    name.classList.remove("scroll-active");
 
    }else{
        name.classList.add("scroll-active")
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
  ScrollReveal().reveal('.timeline-panel', { delay: 600, interval: 700, origin: 'left', scale: 0.85 });
  
  ScrollReveal().reveal('.portfolio-image-big', { delay: 600 });
  ScrollReveal().reveal('.project-preview-img', { delay: 600 });
  ScrollReveal().reveal('.summary-container', { delay: 600 });
  ScrollReveal().reveal('.subText-Container', { delay: 1100 });

  });

