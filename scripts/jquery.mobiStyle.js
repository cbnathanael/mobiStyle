var foo = 0;
(function ($, window, document) {
	'use strict';
	
	window.MobiStyle = {
		name: "mobiStyle",
		version: "0.1",

		libs: {},

		init: function(scope, libraries, method, options) {
			var args = [scope, libraries, method, options],
				response = [];
			this.scope = scope || this.scope;
			
			if (libraries && typeof libraries === 'string') {
        
        		if (this.libs.hasOwnProperty(libraries)) {
        			var lib = this.libs[libraries];
        			if(lib.hasOwnProperty(method)) {
        				var passer = [this.scope].concat(options);
        				lib[method].call(this, this.scope, options);
        			}
        		}
        	}
			for (var key in this.libs) {
				var lib = this.libs[key];
				lib.init();
			}
			return response;
		}
	};
  
    $.fn.mobiStyle = function(){
    	var args = Array.prototype.slice.call(arguments, 0);
    	
		return this.each(function(){
            //(new $.mobiStyle(this, options));
            MobiStyle.init.apply(MobiStyle, [this].concat(args) );
        });
    };
    
})(jQuery, this, this.document);