
$('header nav a[href^="#"]').on('click',function (e) {
  var target = this.hash,
      $target = $(target);

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 500, 'swing', function () {
    window.location.hash = target;
  });



});



$('.banner-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    nav:true,
    autoplay:true,
    smartSpeed:450,
    autoplayHoverPause:true,
    animateOut: 'animate__fadeOut',
    animateIn: 'animate__fadeIn',
})

$('.dog-care .owl-carousel').owlCarousel({
    loop:true,
    margin:66,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
        },
        1234:{  
            items:3,
            margin:30,
        },
        1134:{
            items:2,
            margin:20,
        }
    }

})
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
