
$(document).ready(function(){
    
     //ANIMATION
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }


    $(window).scroll(function () {
        animation();
    });
    animation();
    
    //member-slider
    if(('.member-slider').length > 0){
        $(".member-slider").owlCarousel({
            items: 1,
            margin: 20,
            autoplay: true,
            smartSpeed: 1000,
            loop: true
       });
    }
  
});