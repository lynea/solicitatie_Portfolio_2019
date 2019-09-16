


document.addEventListener("DOMContentLoaded", function(event) { 
    
    let name = document.querySelector(".navbar-brand");

    
  window.onscroll = () => {
    var y = window.scrollY; 
   
 
    if (y <= 40){
    name.textContent = 'Rene van Dijk'
    name.classList.remove("scroll-active");
    }else{
        name.classList.add("scroll-active")
        name.textContent = 'R.'
    }
   
  };
  });