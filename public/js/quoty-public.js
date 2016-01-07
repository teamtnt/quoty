(function( $ ) {
	'use strict';


	    $(function(){
	        var menu = $('.highlightMenu');

	        $(document.body).on('mouseup', function (evt) {
	            var s = document.getSelection(),
	                r = s.getRangeAt(0);
	            if (r && s.toString()) {
	                var p = r.getBoundingClientRect();
	                if (p.left || p.top) {
	                    menu.css({
	                        left: (p.left + (p.width / 2)) - (menu.width() / 2),
	                        top: (p.top - menu.height() - 10),
	                        display: 'block',
	                        opacity: 0
	                    })
	                    .animate({
	                        opacity:1
	                    }, 100);

	                    setTimeout(function() {
	                        menu.addClass('highlight_menu_animate');
	                    }, 10);
	                    return;
	                }
	            }
	            menu.animate({ opacity:0 }, function () {
	                menu.hide().removeClass('highlight_menu_animate');
	            });
	        });
	    });

})( jQuery );
