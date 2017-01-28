jQuery(window).ready(function(){
    jQuery('.mobile-nav').click(
        function(){
            jQuery('.menu-list').slideToggle();
        },
        function(){
            jQuery('.menu-list').slideToggle();
        }
    );
});


$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
        $(this).css('color','#feffff');

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});


jQuery(window).resize(function() {
    var div_pos = jQuery('#profile').position();
    if (jQuery(window).width() > 985){
        jQuery('.menu-list').show();
        jQuery('#top').css('top', '0');
    }
    else{
        jQuery('.menu-list').hide();
    }
});

jQuery(window).scroll(function () {
    var div_pos = jQuery('#profile').position();
    if (jQuery(window).width() > 985){
        if (jQuery(window).scrollTop() > -1 && jQuery(window).scrollTop() <= div_pos.top-70) {
            jQuery('#top').css('top', jQuery(window).scrollTop());
        }
        else{
            jQuery('#top').css('top', div_pos);
        }
    }
    else{
        if (jQuery(window).scrollTop() > -1) {
            jQuery('#top').css('top', jQuery(window).scrollTop());
        }
    }
});



