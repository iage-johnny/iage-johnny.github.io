(function($){
	$('#iageweekly').bind('click', function(e){
			e.preventDefault();
			$('#iageweeklywindow').bPopup();
		});
	$('#businessweekly').bind('click', function(e){
			e.preventDefault();
			$('#businessweeklywindow').bPopup();
		});
	$('#propertyweekly').bind('click', function(e){
			e.preventDefault();
			$('#propertyweeklywindow').bPopup();
		});
	$('#sachinese').bind('click', function(e){
			e.preventDefault();
			$('#sachinesewindow').bPopup();
		});
	$('#sns').bind('click', function(e){
			e.preventDefault();
			$('#snswindow').bPopup();
		});
})(jQuery);
