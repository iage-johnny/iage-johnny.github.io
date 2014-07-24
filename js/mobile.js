/* 
 * mobile javascript file 
 * @author : YU JOHNNY ZHOU (johnny0614@gmail.com)
 */

(function($){
	
	var navpanel = $('#nav-panel');
	if(navpanel.hasClass('in')) {
		navpanel.children('a').bind('click', function(e) {
			navpanel.slideUp();
		});
	}

	

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
	/*
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
	*/
	$.fn.arrowUpAndDown = function() {
		return this.each(function(){
			var $icon = $(this).children('img');
			$.each($icon, function(k, v){
				var src = ($(v).attr('src') === 'img/icon-up-arrow.png') ? 'img/icon-down-arrow.png' : 'img/icon-up-arrow.png';
				$(v).attr('src',src);

			});
		});
	}
	$(".title.mobile").on('click',function(){
		var arrow = $(this).find('a.arrow');
		arrow.arrowUpAndDown()
		.parent().parent().siblings('div.para').slideToggle();
	});
	/*
	
	for(var i = 1; i < 7; i++) {
		var item = document.getElementById('item'+i);
		console.log('item'+i);
		var element = Hammer(item)
			.on('swipeleft', function(event) {
				$('.carousel').carousel('next');
			
			});
		Hammer(item).on('swiperight',function(event){
				$('.carousel').carousel('prev');
			});
	}
	*/
	/*
	var item = document.getElementById('staffpanel');
	var element = Hammer(item)
		.on('swipeleft', function(event) {
			$('.carousel').carousel('next');
			
		});
	Hammer(item).on('swiperight',function(event){
			$('.carousel').carousel('prev');
		});
	*/
	if ($('.carousel').length){
        	$(".carousel").swiperight(function() {
           		$(".carousel").carousel('prev');
        	});
        	$(".carousel").swipeleft(function() {
            		$(".carousel").carousel('next');
        	});
    	}
	

})(jQuery);
