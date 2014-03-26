/* 
 * mobile javascript file 
 * @author : YU JOHNNY ZHOU (johnny0614@gmail.com)
 */

(function($){

	$.fn.animateRotate = function(angle,duration) {
		return this.each(function(){
			var $elem = $(this);

			$({deg : 0}).animate({deg : angle},{
				duration : duration,
				easing : 'linear',
				step : function(now, fx) {
					$elem.css({
						'-moz-transform':'rotate('+180+'deg)',
					'-ms-transform' : 'rotate('+180+'deg)',
					'-webkit-transform' : 'rotate('+180+'deg)',
					'transform' : 'rotate('+180+'deg)'

					});
				},
				complete : function(){
						   $elem.removeAttr('style');
						   var $icon = $elem.children('span');
						   if($icon.hasClass('glyphicon-chevron-down')) {
							   $icon.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
						   } else {
							   $icon.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
						   }
					   }
			});
		});
	};

	$.fn.arrowUpAndDown = function() {
		return this.each(function(){
			var $icon = $(this).children('span');
			if($icon.hasClass('glyphicon-chevron-down')) {
				$icon.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
			} else {
				$icon.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
			}

		});
	};

	$("a.arrow").on('tap',function(){
		var arrow = $(this);
		arrow.arrowUpAndDown()
		.parent().siblings('p').slideToggle();
	});

})(jQuery);
