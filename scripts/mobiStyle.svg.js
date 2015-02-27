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