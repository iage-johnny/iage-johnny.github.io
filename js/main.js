/* 
 * main javascript file 
 * @author : YU JOHNNY ZHOU (johnny0614@gmail.com)
 */


$(document).ready(function() {
	//element cache
	var root = $('html, body');

	//home page welcome pic and nav bar setting
	var navbar_height = $('.navbar').height();
	
	
	function set_pic_size() {
		var welpicheight = $(window).height() - 64;
		var welpicwidth = $(window).width();

		if(welpicheight > welpicwidth) {
			welpicheight = Math.floor(welpicwidth*9/16);
		}

			
		$('.welcomepic').attr('style','height:'+welpicheight+'px;width:'+welpicwidth+'px;');
		$('.welcomepic').css('background-image','url("img/rundle.jpg")');
		$('.welcomepic').css('background-size','100% 100%');
		
		var height_img_d;
		setTimeout(function(){}
		, 500);
		height_img_d = $('#welcome_l').height();
		if(height_img_d === 0) {
			height_img_d = Math.floor(354*(welpicwidth-30)/992);
		}
		var top_move = Math.floor((welpicheight - height_img_d) / 2);
		$('#welcomeMessage').css('padding-top',top_move+'px');		
	}
	
	

	set_pic_size();
	$(window).bind('scroll',function(){
			if($(window).scrollTop() > $('.welcomepic').height()) {
			$('.navbar').addClass('navbar-fixed-top');
			$('#content').css('margin-top','64px');
		} else{
			$('.navbar').removeClass('navbar-fixed-top');
			$('#content').css('margin-top','0px');
		}
	});
	$(window).bind('resize',function(){
		set_pic_size();
	});		


	//logo setting
	$('#logo img').height(40).width(218*40/75);
	$('#logo').css('padding','5px 15px 5px 15px');

	
	
	//scroll setting
	$(".innerLink").click(function(evt) {
		evt.preventDefault();
		var dest = 'section'+this.getAttribute('data-dest');
		var offset = 0 - $('.navbar').height();
		console.log(offset);
		$.scrollTo($(dest)
			,800
			,{queue:true,
				axis:'y',
				offset:{top:-64}
			});
	});

	//footer setting
	function footer_setting() {
		
	}
	

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

});
