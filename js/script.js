$(document).ready (function(){
    $('.collabor_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      centerMode: true,
      centerPadding: '0',
    //   prevArrow: '.left_angle',
    //   nextArrow: '.right_angle',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    });
    $('.customers_slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500,
      arrows: false,
      dots: true,
      infinite: true,
    //   centerMode: true,
    //   centerPadding: '0',
    //   prevArrow: '.left_angle',
    //   nextArrow: '.right_angle',
    });
    



    $('.top_bottom').on("click",function(){
      $("html,body").animate({scrollTop: 0}, 2000)
    })
    $(window).scroll (function(){
      var scroll =$(this).scrollTop();
      if (scroll > 350){
        $('.top_bottom').fadeIn (350);
      }
      else {
        $('.top_bottom').fadeOut (350);
      }
    })



    $(window).scroll (function(){
      if($(window).scrollTop()> 100){
        $('.navbar_scroll').addClass('menu');
      }
      else {
        $('.navbar_scroll').removeClass('menu');
      }
    })



    $('.cross').on ("click", function(){
      $('.sidebar').css ('left', '-100%')
      $('.sidebar').css ("visibility", 'visible')
      $('.sidebar').css ("width", '100%')
    })
    
    $('.show').on ("click", function(){
      $('.sidebar').css ('left', '0')
      $('.sidebar').css ("visibility", 'visible')
      $('.sidebar').css ("width", '100%')
    })


    $('.switch').click (function(){
      $('.color_switcher').toggleClass ("slides");
    })

    $(".green").click (function(){
      $(".style").attr ("href", "css/green.css")
    })
    $(".DarkCyan").click (function(){
      $(".style").attr ("href", "css/DarkCyan.css")
    })
    $(".CornflowerBlue").click (function(){
      $(".style").attr ("href", "css/CornflowerBlue.css")
    })

});
new WOW().init();