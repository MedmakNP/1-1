$(document).ready(function(){
    let owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        
    });
    $('.next').click(() => owl.trigger('next.owl.carousel'))

    $('.prev').click(() => owl.trigger('prev.owl.carousel'))
    
  });
  