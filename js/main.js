/* 
 * main javascript file 
 * @author : YU JOHNNY ZHOU (johnny0614@gmail.com)
 */

(function($){
	//element cache
	var root = $('html, body');

	//scroll setting
	$(".innerLink").click(function(evt) {
		evt.preventDefault();
		var dest = 'section'+this.getAttribute('data-dest');
		$.scrollTo($(dest)
			,800
			,{queue:true,
			  axis:'y',
			  offset:{top:-60}
			});
	});

	//gallery setting
	var galleryContainer = $('.galleryContainer');

	galleryContainer.isotope({
		filter : '*',
		animationOptions : {
			duration : 700,
			easing : 'linear',
			queue : true
		}
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
