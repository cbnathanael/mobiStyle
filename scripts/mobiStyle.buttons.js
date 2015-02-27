(function($, window, document){
	MobiStyle.libs.buttons = {
		init: function() {
			var id = 0;

			$('button.mg-svg-button').each(function(){
				
				if($(this).hasClass('mg-cancel')) {
					var thissvg = buttonSvgCancel;	
				} else if($(this).hasClass('mg-nav')) {
					var thissvg = buttonSvgNavLeft;
				} else {
					var thissvg = buttonSvgNormal;
				}
				var parentWidth = $(this).parent().width();
				var width = Math.ceil($(this).width() + 64);
				if(width > parentWidth) {
					width = parentWidth;
				} else {
					width = (width > 128) ? width : 128;	
				}
				
				var stretch = (width - 32 > 96) ? (width-32) : 96;
				var text = $(this).html();
				$(this).css('width', (width+2)+'px');
				
				thissvg = thissvg.replace(/WDTMAX/gi, width+7);

				thissvg = thissvg.replace(/WDTEND2/gi, stretch+4);
				thissvg = thissvg.replace(/WDTEND/gi, stretch);
				thissvg = thissvg.replace(/WDT/gi, width);
				thissvg = thissvg.replace(/THISID/gi, id);
				var html = thissvg + text ;
				$(this).html(html);
				id++;
			});

			if(typeof Snap !== "undefined") {
				MobiStyle.libs.buttons.loadSnap();
			}
		},
		loadSnap: function() {
			
			var speed = 300;
			easing = mina.easeinout;
			s = Snap.selectAll('button.mg-svg-button');
			s.forEach(function(currentVal, index, arr){
				var v = currentVal.select('svg');
				var pBody = v.select('path.body');
				var pOutline = v.select('path.outline');

				var pathConfig = {
					'to': v.attr('data-path-hover'),
					'from': pBody.attr('d')
				};

				if(!currentVal.node.classList.contains('mg-nav') && !currentVal.node.classList.contains('mg-simple'))
					currentVal.mouseover(function(){
						pBody.animate( { 'path' : pathConfig.to }, speed, easing );
						pOutline.animate( { 'path' : pathConfig.to }, speed, easing );
					});
				currentVal.mouseout(function() {
					pBody.animate( { 'path' : pathConfig.from }, speed, easing );
					pOutline.animate( { 'path' : pathConfig.from }, speed, easing );
				});
			});

		}
	}
}(jQuery, this, this.document));