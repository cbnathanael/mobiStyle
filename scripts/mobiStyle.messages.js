

(function($, window, document){
	var toastSvg = '<svg height="HGTMAX" width="WDTMAX" viewbox="0 0 WDTMAX HGTMAX" preserveAspectRatio="xMinYMin slice">\
		<filter id="glow">\
		<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>\
		<feOffset dx="0" dy="0" result="offsetblur"/>\
		<feFlood flood-color="#9fe3f6"/>\
		<feComposite in2="offsetblur" operator="in"/>\
		<feMerge>\
		<feMergeNode/>\
		<feMergeNode in="SourceGraphic"/>\
		</feMerge>\
		</filter> \
		<filter id="glowHover">\
		<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>\
		<feOffset dx="0" dy="0" result="offsetblur"/>\
		<feFlood flood-color="#fff"/>\
		<feComposite in2="offsetblur" operator="in"/>\
		<feMerge>\
		<feMergeNode/>\
		<feMergeNode in="SourceGraphic"/>\
		</feMerge>\
		</filter> \
		<path class="outline" d="M3 3 L3 3 LWDTEND 3 LWDT 16 LWDT HGT L16 HGT L3 WDTEND2 L3 3" filter="url(#glow)"></path><path class="body" d="M3 3 L3 3 LWDTEND 3 LWDT 16 LWDT HGT L16 HGT L3 WDTEND2 L3 3"></path></svg>';
	var modalSvg = '<svg height="HGTMAX" width="WDTMAX" viewbox="0 0 WDTMAX HGTMAX" preserveAspectRatio="xMinYMin slice">\
		<filter id="modalGlow">\
		<feGaussianBlur in="SourceAlpha" stdDeviation="6"/>\
		<feOffset dx="0" dy="0" result="offsetblur"/>\
		<feFlood flood-color="#9fe3f6"/>\
		<feComposite in2="offsetblur" operator="in"/>\
		<feMerge>\
		<feMergeNode/>\
		<feMergeNode in="SourceGraphic"/>\
		</feMerge>\
		</filter> \
		<filter id="glowHover">\
		<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>\
		<feOffset dx="0" dy="0" result="offsetblur"/>\
		<feFlood flood-color="#fff"/>\
		<feComposite in2="offsetblur" operator="in"/>\
		<feMerge>\
		<feMergeNode/>\
		<feMergeNode in="SourceGraphic"/>\
		</feMerge>\
		</filter> \
		<path class="title" d="M3 35 L35 3 L35 3 LWDTEND 3 LWDT 35" ></path>\
		<path class="body" d="MWDT 35 LWDT HGT L3 HGT L3 35 L3 35 "></path>\
		<path class="outline" d="M3 35 L35 3 L35 3 LWDTEND 3 LWDT 35 LWDT HGT L3 HGT L3 35 L3 35" filter="url(#modalGlow)"></path>\
		</svg>';

	MobiStyle.libs.messages = {
		
		init: function() {
			var self = this;
			if(!$('#mg-modalOverlay').length) {
				$(body).append("<div id='mg-modalOverlay'></div>");
			}
			$(document).on('click', "[data-mg-modal]", function(e){
				var target = $(this).data('mg-modal');
				self.openModal(target);
			});
			$(document).on('click', "[data-mg-close-modal]", function(e){
				self.closeModal();
			});
			return false;
		},
		openToast: function(toastId, options) {
			toastId = toastId ? "#"+toastId.id : '#mgToast';
			var timer = options ? options : 2000;
			
			$(toastId).remove("svg");

			var hgt = $(toastId + ' .mg-toast-content').outerHeight();
			var wdt = $(toastId + ' .mg-toast-content').outerWidth();
			
			newSvg = toastSvg.replace(/WDTMAX/gi, wdt+6);
			newSvg = newSvg.replace(/WDTEND2/gi, hgt-16);
			newSvg = newSvg.replace(/WDTEND/gi, wdt-16);
			newSvg = newSvg.replace(/WDT/gi, wdt);
			newSvg = newSvg.replace(/HGTMAX/gi, hgt+6);
			newSvg = newSvg.replace(/HGT/gi, hgt+3);
			
			$(toastId + ' .mg-toast-content').prepend(newSvg);
			
			$(toastId).addClass('mg-show');
				setTimeout(function(){
					$(toastId).removeClass('mg-show');
				}, timer);
		},
		openModal: function(modalId, options) {
			if(typeof modalId === "object") {
				modalId = "#"+modalId.id;
			} else {
				modalId = modalId ? "#"+modalId : "#mgModal";
			}
			$(modalId).remove("svg");

			var hgt = $(modalId).outerHeight();	
			var wdt = $(modalId).outerWidth();
			
			newSvg = modalSvg.replace(/WDTMAX/gi, wdt+6);
			newSvg = newSvg.replace(/WDTEND2/gi, hgt-32);
			newSvg = newSvg.replace(/WDTEND/gi, wdt-32);
			newSvg = newSvg.replace(/WDT/gi, wdt);
			newSvg = newSvg.replace(/HGTMAX/gi, hgt+6);
			newSvg = newSvg.replace(/HGT/gi, hgt+3);
			
			$(modalId).prepend(newSvg);

			$(modalId).css('margin-top', '-'+$(modalId).height()/2+'px')
			$(modalId).addClass('mg-show');
			$('#mg-modalOverlay').fadeIn(0.3);
		},

		closeModal: function() {
			$('.mg-modal').removeClass('mg-show');

			$('#mg-modalOverlay').fadeOut(0.3, function(){
				$('.mg-modal').remove("svg");				
			});
		}
	}
}(jQuery, this, this.document));