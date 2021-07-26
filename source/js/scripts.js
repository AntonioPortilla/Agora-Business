var home = (function () {


    var menu = function () {

    }

    var sliderHome = function() {

        /*$('#contentSlider').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 5,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
            ]
          });*/
    }

    return {
        init: function () {
            menu();
            sliderHome();
        },
    }
})()

$(document).ready(function () {
    home.init()
})
/*
$(window).load(function() {
    $('#contentSlider').EasySlides({
      'show': 5,
      'vertical':'middle',
      'touchevents': false,
    })
  });
*/
$(window).on('load', function () {
    $('#contentSlider').EasySlides({
        'show': 11,
        'vertical':'middle',
        'touchevents': false,
      })
});
