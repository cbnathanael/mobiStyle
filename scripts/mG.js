$(function(){
	//var s;
	$('#openToast').click(function(){
		$('#mg-toast').addClass('mg-show');
		setTimeout(function(){
			$('#mg-toast').removeClass('mg-show');
		}, 2000);
	});
	$('#openModal').click(function(){
		$('#mg-modal').css('margin-top', '-'+$('#mg-modal').height()/2+'px')
		$('#mg-modal').addClass('mg-show');
		$('#mg-modalOverlay').fadeIn(0.3);
	});
	$('#mg-modalOverlay').add('#closeModal').click(function(){
		$('#mg-modal').removeClass('mg-show');
		$('#mg-modalOverlay').fadeOut(0.3);
	})
	function init() {
		var speed = 300;
		easing = mina.easeinout;
		s = Snap.selectAll('button.svg');
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

	var buttonSvgNormal = '<svg data-path-hover="M6 6 L6 6 LWDTEND 6 LWDTEND2 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6" height="65" width="WDTMAX" viewbox="0 0 WDTMAX 65" preserveAspectRatio="xMinYMin slice">\
	<filter id="glowTHISID">\
	<feGaussianBlur in="SourceAlpha" stdDeviation="2"/>\
	<feOffset dx="0" dy="0" result="offsetblur"/>\
	<feFlood flood-color="#9fe3f6"/>\
	<feComposite in2="offsetblur" operator="in"/>\
	<feMerge>\
	<feMergeNode/>\
	<feMergeNode in="SourceGraphic"/>\
	</feMerge>\
	</filter> \
	<filter id="glowHoverTHISID">\
	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>\
	<feOffset dx="0" dy="0" result="offsetblur"/>\
	<feFlood flood-color="#fff"/>\
	<feComposite in2="offsetblur" operator="in"/>\
	<feMerge>\
	<feMergeNode/>\
	<feMergeNode in="SourceGraphic"/>\
	</feMerge>\
	</filter> \
	<path class="outline" d="M6 6 L6 6 L69 6 L73 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6" filter="url(#glowTHISID)"></path><path class="body" d="M6 6 L6 6 L69 6 L73 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6"></path></svg>';
	var buttonSvgCancel = '<svg data-path-hover="M6 6 L6 6 LWDTEND 6 LWDTEND2 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6" height="65" width="WDTMAX" viewbox="0 0 WDTMAX 65" preserveAspectRatio="xMinYMin slice">\
	<filter id="glowCancelTHISID">\
	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>\
	<feOffset dx="0" dy="0" result="offsetblur"/>\
	<feFlood flood-color="#F69F9F"/>\
	<feComposite in2="offsetblur" operator="in"/>\
	<feMerge>\
	<feMergeNode/>\
	<feMergeNode in="SourceGraphic"/>\
	</feMerge>\
	</filter> \
	<filter id="glowCancelHoverTHISID">\
	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>\
	<feOffset dx="0" dy="0" result="offsetblur"/>\
	<feFlood flood-color="#fff"/>\
	<feComposite in2="offsetblur" operator="in"/>\
	<feMerge>\
	<feMergeNode/>\
	<feMergeNode in="SourceGraphic"/>\
	</feMerge>\
	</filter> \
	<path class="outline" d="M6 6 L6 6 L69 6 L73 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6" filter="url(#glowCancelTHISID)"></path><path class="body" d="M6 6 L6 6 L69 6 L73 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6"></path></svg>';

	var buttonSvgNavLeft = '<svg height="65" width="WDTMAX" viewbox="0 0 WDTMAX 65" preserveAspectRatio="xMinYMin slice">\
	<filter id="glowNavHoverTHISID">\
	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>\
	<feOffset dx="0" dy="0" result="offsetblur"/>\
	<feFlood flood-color="#fff"/>\
	<feComposite in2="offsetblur" operator="in"/>\
	<feMerge>\
	<feMergeNode/>\
	<feMergeNode in="SourceGraphic"/>\
	</feMerge>\
	</filter> \
	<path class="outline" d="M6 6 LWDT 6 LWDTEND 45 L6 45 L6 6" filter="url(#glowNavHoverTHISID)"></path><path class="body" d="M6 6 LWDT 6 LWDTEND 45 L6 45 L6 6"></path></svg>';
	var id = 0;
	$('button').not('.mg-simple').each(function(){
		
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

	var hgt = $('#mg-toast .mg-toast-content').outerHeight();
	var wdt = $('#mg-toast .mg-toast-content').outerWidth();
	toastSvg = toastSvg.replace(/WDTMAX/gi, wdt+6);
	toastSvg = toastSvg.replace(/WDTEND2/gi, hgt-16);
	toastSvg = toastSvg.replace(/WDTEND/gi, wdt-16);
	toastSvg = toastSvg.replace(/WDT/gi, wdt);
	toastSvg = toastSvg.replace(/HGTMAX/gi, hgt+6);
	toastSvg = toastSvg.replace(/HGT/gi, hgt+3);
	$('#mg-toast .mg-toast-content').prepend(toastSvg);
	

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


	var hgt = $('#mg-modal').outerHeight();	
	var wdt = $('#mg-modal').outerWidth();
	modalSvg = modalSvg.replace(/WDTMAX/gi, wdt+6);
	modalSvg = modalSvg.replace(/WDTEND2/gi, hgt-32);
	modalSvg = modalSvg.replace(/WDTEND/gi, wdt-32);
	modalSvg = modalSvg.replace(/WDT/gi, wdt);
	modalSvg = modalSvg.replace(/HGTMAX/gi, hgt+6);
	modalSvg = modalSvg.replace(/HGT/gi, hgt+3);
	$('#mg-modal').prepend(modalSvg);


	init();

	var loading = false;
	$('#startProgress').click(function(){
		
		if(!loading) {
			loading = true;
			$(this).addClass('loading').text('Loading...');
			var prog = $('#prog');
			var hex = prog.find('svg');
			var canvasSize = hex.width(),
			centre = 43.2,
			radius = 86.4*0.8/2,
			s = Snap(hex[0]),
			path = "",
			arc = s.path(path),
			bg = s.select('path.fullPct');

			startY = centre-radius;


			function run(percent) {
				prog.fadeIn(300, function(){
					var endpoint = percent*360;
					Snap.animate(0, endpoint,   function (val) {
						arc.remove();

						var d = val,
						dr = d-90;
						radians = Math.PI*(dr)/180,
						endx = centre + radius*Math.cos(radians),
						endy = centre + radius * Math.sin(radians),
						largeArc = d>180 ? 1 : 0;  
						path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;

						arc = s.path(path);
						arc.attr({
							class: 'progressBar',
							stroke: 'rgb(159, 227, 246)',
							fill: 'transparent',
							strokeWidth: 64,
							clipPath: 'url(#hexClip)'
						});
						$('#prog .pct').text(Math.round(val/360*100) +'%');

					}, 5000, mina.easeinout);

					hex.find('.fullPct').fadeIn(5000);
					setTimeout(function(){
						prog.fadeOut(1000, function(){
							$('#prog .pct').text('');
							hex.find('.fullPct').hide();
							loading = false;
							$('#startProgress').removeClass('loading').text('Load something');
						});
						
					},6000)
				});
			}

			run(100/100);
		}

	});
	
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
		})
	});
	$('label.inline input').bind("change keyup input", function(e){
		var label = $(this).siblings('.label')
		if($(this).val() !== "" ) {
			label.addClass('moved');
		} else {
			label.removeClass("moved");
		}
	});

});