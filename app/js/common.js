$(function() {


	$(".toggle-menu").click(function() {
  	$(".sandwich").toggleClass("active");
  	if($(".top-menu").is(":visible")) {
  		$(".top-menu").fadeOut(600);
  		$(".top-menu li").removeClass("wow fadeInUp animated");
  	} else {
  		$(".top-menu").fadeIn(600);
  		$(".top-menu li").addClass("wow fadeInUp animated");
  	}
	});

	$(".top-menu li a").click(function() {
		$(".top-menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
	});

	$('.top-menu li a').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1200); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });


		$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.delay(1800).fadeOut();
    $preloader.delay(2000).fadeOut('slow');
   	});
 
});
