(function($){'use strict';var browserWindow=$(window);browserWindow.on('load',function(){$('.preloader').fadeOut('slow',function(){$(this).remove();});});if($.fn.classyNav){$('#musicaNav').classyNav();}
if($.fn.owlCarousel){var welcomeSlide=$('.hero-slides');var featured_shows=$('.featured-shows-slides');var music_player=$('.music-player-slides');var discography=$('.discography-slides');welcomeSlide.owlCarousel({items:1,margin:0,loop:true,nav:false,dots:false,autoplay:true,autoplayTimeout:7000,smartSpeed:1000,animateIn:'fadeIn',animateOut:'fadeOut'});welcomeSlide.on('translate.owl.carousel',function(){var slideLayer=$("[data-animation]");slideLayer.each(function(){var anim_name=$(this).data('animation');$(this).removeClass('animated '+anim_name).css('opacity','0');});});welcomeSlide.on('translated.owl.carousel',function(){var slideLayer=welcomeSlide.find('.owl-item.active').find("[data-animation]");slideLayer.each(function(){var anim_name=$(this).data('animation');$(this).addClass('animated '+anim_name).css('opacity','1');});});$("[data-delay]").each(function(){var anim_del=$(this).data('delay');$(this).css('animation-delay',anim_del);});$("[data-duration]").each(function(){var anim_dur=$(this).data('duration');$(this).css('animation-duration',anim_dur);});featured_shows.owlCarousel({items:3,margin:30,loop:true,nav:true,navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],dots:false,autoplay:true,autoplayTimeout:5000,smartSpeed:600,responsive:{0:{items:1},768:{items:2},992:{items:3}}});music_player.owlCarousel({items:3,margin:45,loop:true,nav:false,dots:false,autoplay:true,autoplayTimeout:5000,smartSpeed:750,responsive:{0:{items:1},992:{items:2},1200:{items:3}}});discography.owlCarousel({items:6,margin:30,loop:true,nav:false,dots:false,autoplay:true,autoplayTimeout:5000,smartSpeed:600,responsive:{0:{items:2},768:{items:4},992:{items:6}}});}
if($.fn.scrollUp){browserWindow.scrollUp({scrollSpeed:1500,scrollText:'<i class="fa fa-angle-up"></i>'});}
if($.fn.counterUp){$('.counter').counterUp({delay:10,time:2000});}
if($.fn.sticky){$(".musica-main-menu").sticky({topSpacing:0});}
if($.fn.circleProgress){$('#circle').circleProgress({size:160,emptyFill:"rgba(0, 0, 0, .0)",fill:'#cc1573',thickness:'4',reverse:true});$('#circle2').circleProgress({size:160,emptyFill:"rgba(0, 0, 0, .0)",fill:'#cc1573',thickness:'4',reverse:true});$('#circle3').circleProgress({size:160,emptyFill:"rgba(0, 0, 0, .0)",fill:'#cc1573',thickness:'4',reverse:true});$('#circle4').circleProgress({size:160,emptyFill:"rgba(0, 0, 0, .0)",fill:'#cc1573',thickness:'4',reverse:true});}
if($.fn.audioPlayer){$('audio').audioPlayer();}
if($.fn.tooltip){$('[data-toggle="tooltip"]').tooltip()}
if($.fn.niceScroll){$(".album-all-songs").niceScroll({background:"#fff"});}
$("#scrollDown").on('click',function(){$('html, body').animate({scrollTop:$("#about").offset().top-85},1500);});$('a[href="#"]').on('click',function($){$.preventDefault();});if(browserWindow.width()>767){new WOW().init();}})(jQuery);