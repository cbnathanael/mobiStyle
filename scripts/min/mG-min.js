$(function(){function e(){var e=300;easing=mina.easeinout,s=Snap.selectAll("button.svg"),s.forEach(function(t,o,a){var i=t.select("svg"),r=i.select("path.body"),s=i.select("path.outline"),l={to:i.attr("data-path-hover"),from:r.attr("d")};t.node.classList.contains("mg-nav")||t.node.classList.contains("mg-simple")||t.mouseover(function(){r.animate({path:l.to},e,easing),s.animate({path:l.to},e,easing)}),t.mouseout(function(){r.animate({path:l.from},e,easing),s.animate({path:l.from},e,easing)})})}$("#openToast").click(function(){$("#mg-toast").addClass("mg-show"),setTimeout(function(){$("#mg-toast").removeClass("mg-show")},2e3)}),$("#openModal").click(function(){$("#mg-modal").css("margin-top","-"+$("#mg-modal").height()/2+"px"),$("#mg-modal").addClass("mg-show"),$("#mg-modalOverlay").fadeIn(.3)}),$("#mg-modalOverlay").add("#closeModal").click(function(){$("#mg-modal").removeClass("mg-show"),$("#mg-modalOverlay").fadeOut(.3)});var t='<svg data-path-hover="M6 6 L6 6 LWDTEND 6 LWDTEND2 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6" height="65" width="WDTMAX" viewbox="0 0 WDTMAX 65" preserveAspectRatio="xMinYMin slice">	<filter id="glowTHISID">	<feGaussianBlur in="SourceAlpha" stdDeviation="2"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#9fe3f6"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<filter id="glowHoverTHISID">	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#fff"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<path class="outline" d="M6 6 L6 6 L69 6 L73 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6" filter="url(#glowTHISID)"></path><path class="body" d="M6 6 L6 6 L69 6 L73 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6"></path></svg>',o='<svg data-path-hover="M6 6 L6 6 LWDTEND 6 LWDTEND2 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6" height="65" width="WDTMAX" viewbox="0 0 WDTMAX 65" preserveAspectRatio="xMinYMin slice">	<filter id="glowCancelTHISID">	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#F69F9F"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<filter id="glowCancelHoverTHISID">	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#fff"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<path class="outline" d="M6 6 L6 6 L69 6 L73 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6" filter="url(#glowCancelTHISID)"></path><path class="body" d="M6 6 L6 6 L69 6 L73 9 LWDT 9 LWDT 49 L10 49 L6 45 L6 6"></path></svg>',a='<svg height="65" width="WDTMAX" viewbox="0 0 WDTMAX 65" preserveAspectRatio="xMinYMin slice">	<filter id="glowNavHoverTHISID">	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#fff"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<path class="outline" d="M6 6 LWDT 6 LWDTEND 45 L6 45 L6 6" filter="url(#glowNavHoverTHISID)"></path><path class="body" d="M6 6 LWDT 6 LWDTEND 45 L6 45 L6 6"></path></svg>',i=0;$("button").not(".mg-simple").each(function(){if($(this).hasClass("mg-cancel"))var e=o;else if($(this).hasClass("mg-nav"))var e=a;else var e=t;var r=$(this).parent().width(),s=Math.ceil($(this).width()+64);s=s>r?r:s>128?s:128;var l=s-32>96?s-32:96,f=$(this).html();$(this).css("width",s+2+"px"),e=e.replace(/WDTMAX/gi,s+7),e=e.replace(/WDTEND2/gi,l+4),e=e.replace(/WDTEND/gi,l),e=e.replace(/WDT/gi,s),e=e.replace(/THISID/gi,i);var n=e+f;$(this).html(n),i++});var r='<svg height="HGTMAX" width="WDTMAX" viewbox="0 0 WDTMAX HGTMAX" preserveAspectRatio="xMinYMin slice">	<filter id="glow">	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#9fe3f6"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<filter id="glowHover">	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#fff"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<path class="outline" d="M3 3 L3 3 LWDTEND 3 LWDT 16 LWDT HGT L16 HGT L3 WDTEND2 L3 3" filter="url(#glow)"></path><path class="body" d="M3 3 L3 3 LWDTEND 3 LWDT 16 LWDT HGT L16 HGT L3 WDTEND2 L3 3"></path></svg>',l=$("#mg-toast .mg-toast-content").outerHeight(),f=$("#mg-toast .mg-toast-content").outerWidth();r=r.replace(/WDTMAX/gi,f+6),r=r.replace(/WDTEND2/gi,l-16),r=r.replace(/WDTEND/gi,f-16),r=r.replace(/WDT/gi,f),r=r.replace(/HGTMAX/gi,l+6),r=r.replace(/HGT/gi,l+3),$("#mg-toast .mg-toast-content").prepend(r);var n='<svg height="HGTMAX" width="WDTMAX" viewbox="0 0 WDTMAX HGTMAX" preserveAspectRatio="xMinYMin slice">	<filter id="modalGlow">	<feGaussianBlur in="SourceAlpha" stdDeviation="6"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#9fe3f6"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<filter id="glowHover">	<feGaussianBlur in="SourceAlpha" stdDeviation="3"/>	<feOffset dx="0" dy="0" result="offsetblur"/>	<feFlood flood-color="#fff"/>	<feComposite in2="offsetblur" operator="in"/>	<feMerge>	<feMergeNode/>	<feMergeNode in="SourceGraphic"/>	</feMerge>	</filter> 	<path class="title" d="M3 35 L35 3 L35 3 LWDTEND 3 LWDT 35" ></path>	<path class="body" d="MWDT 35 LWDT HGT L3 HGT L3 35 L3 35 "></path>	<path class="outline" d="M3 35 L35 3 L35 3 LWDTEND 3 LWDT 35 LWDT HGT L3 HGT L3 35 L3 35" filter="url(#modalGlow)"></path>	</svg>',l=$("#mg-modal").outerHeight(),f=$("#mg-modal").outerWidth();n=n.replace(/WDTMAX/gi,f+6),n=n.replace(/WDTEND2/gi,l-32),n=n.replace(/WDTEND/gi,f-32),n=n.replace(/WDT/gi,f),n=n.replace(/HGTMAX/gi,l+6),n=n.replace(/HGT/gi,l+3),$("#mg-modal").prepend(n),e();var d=!1;$("#startProgress").click(function(){function e(e){t.fadeIn(300,function(){var a=360*e;Snap.animate(0,a,function(e){f.remove();var t=e,o=t-90;radians=Math.PI*o/180,endx=i+r*Math.cos(radians),endy=i+r*Math.sin(radians),largeArc=t>180?1:0,l="M"+i+","+startY+" A"+r+","+r+" 0 "+largeArc+",1 "+endx+","+endy,f=s.path(l),f.attr({"class":"progressBar",stroke:"rgb(159, 227, 246)",fill:"transparent",strokeWidth:64,clipPath:"url(#hexClip)"}),$("#prog .pct").text(Math.round(e/360*100)+"%")},5e3,mina.easeinout),o.find(".fullPct").fadeIn(5e3),setTimeout(function(){t.fadeOut(1e3,function(){$("#prog .pct").text(""),o.find(".fullPct").hide(),d=!1,$("#startProgress").removeClass("loading").text("Load something")})},6e3)})}if(!d){d=!0,$(this).addClass("loading").text("Loading...");var t=$("#prog"),o=t.find("svg"),a=o.width(),i=43.2,r=34.56,s=Snap(o[0]),l="",f=s.path(l),n=s.select("path.fullPct");startY=i-r,e(1)}}),$(".mg-tab-group").each(function(){var e=$(this),t=$(this).find(".mg-tab-list"),o=$(this).find(".mg-tab-content");t.on("click","a",function(o){o.preventDefault();var a=$(this).data("target");t.find("a").removeClass("active"),$(this).addClass("active"),e.find(".mg-tab-content.active").fadeOut(250,function(){$(this).removeClass("active"),e.find("#"+a).fadeIn(250).addClass("active")})})}),$("label.inline input").bind("change keyup input",function(e){var t=$(this).siblings(".label");""!==$(this).val()?t.addClass("moved"):t.removeClass("moved")})});