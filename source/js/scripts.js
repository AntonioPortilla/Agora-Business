var home = (function () {


    var menu = function () {

        var _menuServicios = $('#menuServicios'),
        _menuContact = $('#menuContact'),
        _menuSedes = $('#menuSedes'),
        _menuHome = $('#menuHome');

        _menuHome.on('click', function () {
            //e.preventDefault();
            $('#menuContent li a').removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({
                scrollTop: $("#header").offset().top
            }, 500);
            return true;
        });

        _menuServicios.on('click', function () {
            //e.preventDefault();
            $('#menuContent li a').removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({
                scrollTop: $("#sectionServices").offset().top
            }, 500);
            return true;
        });

        _menuContact.on('click', function (e) {
            e.preventDefault();
            $('#menuContent li a').removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({
                scrollTop: $("#sectionContact").offset().top
            }, 500);
            return true;
        });

        _menuSedes.on('click', function (e) {
            e.preventDefault();
            $('#menuContent li a').removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({
                scrollTop: $("#sectionSedes").offset().top
            }, 500);
            return true;
        });

    }



    return {
        init: function () {
            menu();
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
