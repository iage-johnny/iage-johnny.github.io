/* 
 * mobile javascript file 
 * @author : YU JOHNNY ZHOU (johnny0614@gmail.com)
 */

(function($){

	$("a.arrow").on('tap',function(){
		var arrow = $(this);
		arrow.animate({
			'-moz-transform':'rotate('+180+'deg)',
			'-ms-transform' : 'rotate('+180+'deg)',
			'-webkit-transform' : 'rotate('+180+'deg)',
			'transform' : 'rotate('+180+'deg)'
		})
		.parent().siblings('p').slideDown();
	});

})(jQuery);
