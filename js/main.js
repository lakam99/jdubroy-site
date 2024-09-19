
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 900);
            return false;
          }
        }
      });


    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
		
}());


}
main();

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      const faqAnswer = faqItem.querySelector('.faq-answer');
      
      if (faqItem.classList.contains('active')) {
          faqItem.classList.remove('active');
      } else {
          document.querySelectorAll('.faq-item.active').forEach(activeItem => {
              activeItem.classList.remove('active');
          });
          faqItem.classList.add('active');
      }
  });
});












  function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.classList.contains('show')) {
      content.classList.remove('show');
    } else {
      var allContents = document.querySelectorAll('.more-content');
      allContents.forEach(function(c) {
        c.classList.remove('show');
      });
      content.classList.add('show');
    }
  }





