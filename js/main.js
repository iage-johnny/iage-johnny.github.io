/* 
 * main javascript file 
 * @author : YU JOHNNY ZHOU (johnny0614@gmail.com)
 */


(function($){
	//element cache
	var root = $('html, body');
	

	//home page welcome pic and nav bar setting
	var welpicheight = $(window).height() - 50;
	var welpicwidth = $(window).width();

	function set_pic_size() {
		welpicheight = $(window).height() - 50;
		welpicwidth = $(window).width();

		if(welpicheight > welpicwidth) {
			welpicheight = welpicwidth*9/16;
		}

		
		$('.welcomepic').attr('style','height:'+welpicheight+'px;width:'+welpicwidth+'px;');
		$('.welcomepic').css('background-image','url("img/homepagewelcome.jpg")');
		$('.welcomepic').css('background-size','100% 100%');

		$('#welcomeMessage').height(welpicheight/3);
		$('#welcomeMessage').width(welpicwidth/2);
		$('#welcomeMessage').css('position','absolute');
		$('#welcomeMessage').css('top',welpicheight/3+'px');
		$('#welcomeMessage').css('left',welpicwidth/4+'px');
		$('#welcomeMessage').css('background-color','#f05a22');
		$('#welcomeMessage').css('color','#eeedee');
		
		var msgWidth = $('#welcomeMessage').width()-20;
		var msgHeight = $('#welcomeMessage').height;

	}

	set_pic_size();
	
	$(window).ready(function(){
		set_pic_size();
		$(window).bind('scroll',function(){
			if($(window).scrollTop() > $('.welcomepic').height()) {
				$('.navbar').addClass('navbar-fixed-top');
				$('#content').css('margin-top','50px');
			} else{
				$('.navbar').removeClass('navbar-fixed-top');
				$('#content').css('margin-top','0px');
			}
		});
		$(window).bind('resize',function(){
			set_pic_size();
		});		
	});

	//logo setting
	$('#logo img').height(40).width(218*40/75);
	$('#logo').css('padding','5px 15px 5px 15px');

	

	//scroll setting
	$(".innerLink").click(function(evt) {
		evt.preventDefault();
		var dest = 'section'+this.getAttribute('data-dest');
		var offset = -50;
		if($('#navbar').hasClass('navbar-fixed-top')) {
			offset = 0;
		} else {
			offset = -50;
		}
		$.scrollTo($(dest)
			,800
			,{queue:true,
				axis:'y',
				offset:{top:offset}
			});
	});

	//gallery setting desktop

	var galleryContainer = $('.galleryContainer');
	galleryContainer.isotope({
		filter : '*',
		animationOptions : {
			duration : 700,
			easing : 'linear',
			queue : true
		}
	});


	galleryContainer.ready(function(){
		galleryContainer.height(galleryContainer.height()+10);
	});


	$('.filter a').click(function(){
		$('.filter .current').removeClass('current');
		$(this).addClass('current');

		var selector = $(this).attr('data-filter');
		galleryContainer.isotope({
			filter : selector,
			animationOptions : {
				duration : 700,
				easing : 'linear',
				queue : true
			}
		});


		return false;
	});

})(jQuery);
