(function($, window, document){
	MobiStyle.libs.forms = {
		init: function() {
			$('label.mg-inline input').bind("change keyup input", function(e){
				var label = $(this).siblings('.mg-label')
				if($(this).val() !== "" ) {
					label.addClass('mg-moved');
				} else {
					label.removeClass("mg-moved");
				}
			});
			$('label.mg-inline input').each(function() {
				var label = $(this).siblings('.mg-label')
				if($(this).val() !== "" ) {
					label.addClass('mg-moved');
				} else {
					label.removeClass("mg-moved");
				}
			});
		},
		
	}
}(jQuery, this, this.document));