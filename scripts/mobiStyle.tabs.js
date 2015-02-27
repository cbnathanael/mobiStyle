(function($, window, document){
	MobiStyle.libs.tabs = {
		init: function() {
			$('.mg-tab-group').each(function(){
				var	group = $(this),
					tabs = $(this).find('.mg-tab-list'),
					sections = $(this).find('.mg-tab-content');

				tabs.on( 'click', 'a', function(e){
					e.preventDefault();
					var target = $(this).data('target');
					tabs.find('a').removeClass('active');
					$(this).addClass('active');
					group.find('.mg-tab-content.active').fadeOut(250, function(){
						$(this).removeClass('active');
						group.find('#'+target).fadeIn(250).addClass('active');
					});
				});
			});
		},
		
	}
}(jQuery, this, this.document));