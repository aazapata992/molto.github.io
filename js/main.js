var swiper = new Swiper(".swiper-banner-home", {
    spaceBetween: 0,
    effect: "fade",
    autoplay: {
      delay: 9000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".pagination-banner",      
      clickable: true,
    },
    navigation: {
      nextEl: ".next-banner",
      prevEl: ".prev-banner",
    },    
});

var swiper = new Swiper(".swiper-preparations", {
    spaceBetween: 30,
    effect: "fade",
    autoHeight: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".pagination-preparations",
      clickable: true,      
    },
    navigation: {
      nextEl: ".next-preparations",
      prevEl: ".prev-preparations",
    },    
});

// Menú hamburguesa
if( jQuery('#nav-toogle').length > 0 ) {
    jQuery('#nav-toogle').click(function() {        
        jQuery(this).toggleClass('open');        
        jQuery('body').toggleClass('open-nav-xs');
    });
};

jQuery(".anchor").click(function( e ) {
    e.preventDefault();
    e.stopPropagation();
    $target = $(this);
    jQuery('html, body').animate({
        scrollTop: jQuery($target.attr('href')).offset().top
    }, 1000);
});


if( jQuery('header nav li a').length > 0 ) {
    jQuery('header nav li a').click(function() {  
        jQuery('body').removeClass('open-nav-xs');      
        jQuery('#nav-toogle').removeClass('open');
    });
};

AOS.init();

if(window.matchMedia("(max-width: 640px)").matches) {
    
  }
  else{    
    jQuery(window).scroll(function(){
        var scroll = 50;
        if( jQuery(window).scrollTop() > scroll ){
            jQuery('header').addClass('fixed-top');              
        }else{
            jQuery('header').removeClass('fixed-top');            
        }          
    });
  }
