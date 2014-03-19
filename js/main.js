/* 
 * main javascript file 
 * Author : YU JOHNNY ZHOU (johnny0614@gmail.com)
 */

(function($){
	//element cache
	var root = $('html, body');

	//scroll setting
	$(".innerLink").click(function(evt) {
		evt.preventDefault();
		var dest = 'section'+this.dataset.dest;
		$.scrollTo($(dest)
			,800
			,{queue:true,
			  axis:'y',
			  offset:{top:-60}
			});
	});	

})(jQuery);
