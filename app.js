
window.addEventListener("load", () => {
    document.querySelector("body").classList.add("loaded"); 
   });

$(function(){  // $(document).ready shorthand
    $('.monster').fadeIn('slow');
  });
  
  $(document).ready(function() {
      
      $(window).scroll( function(){
      

          $('.hideme').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight()/3;
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},800);
                      
              }
              
          }); 
      
      });
      
  });



const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("nav-links")[0]


toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("visible")
})


