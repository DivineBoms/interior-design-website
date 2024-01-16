(function ($) {
    "use strict";
     // Spinner
     var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
   
    $(function(){
        var navbar = $('.header-inner');
    
        $(window).scroll(function(){
          if($(window).scrollTop() <= 40){
            navbar.removeClass('navbar-scroll');
    
          }else{
            navbar.addClass('navbar-scroll');
          }
        });
      });
      let burger = document.getElementById("burger-button");
    
      burger.addEventListener("click", (e) =>{
        e.preventDefault();
        document.body.classList.toggle("open");
        burger.classList.toggle("open");
      });
      $(document).ready(function(){
        $('.navbar-toggler,.overlay').on("click",function(){
          $(".mobile-menu,.overlay").toggleClass('open');
        });
      });
    

     // Header carousel
     $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

 

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
});


   
    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').click(function () {
      $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
      return false;
  });





  

// Portfolio isotope and filter
var portfolioIsotope = $('.portfolio-container').isotope({
  itemSelector: '.portfolio-item',
  layoutMode: 'fitRows'
});

$('#portfolio-flters li').on('click', function () {
  $("#portfolio-flters li").removeClass('filter-active');
  $(this).addClass('filter-active');

  portfolioIsotope.isotope({filter: $(this).data('filter')});
});

$("#testimonial-slider").owlCarousel({
  loop:true,
  center:true,
  margin:0,
  autoplay:true,
  responsiveClass:true,
  nav: false,
  responsive:{
    0: {
      items: 1
    },
    680: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

$(document).on('click', '.owl-item>div', function(){
  var $speed = 1000;
  $owl.trigger('to.owl.carousel',[$(this).data('position'), $speed]);
});
})(jQuery);
