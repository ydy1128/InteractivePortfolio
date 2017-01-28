$(document).ready(function(){
    $('#body-back').imagesLoaded( function() {
        setTimeout(function(){
            $('.loading-wrapper').fadeOut(1000);

        	$('.menu-side').css('display', 'none');

            if($(window).width() > 1050){
            	$('.side-back').css('margin-left', '-20%');
            }
            else if($(window).width() < 760){
                $('.side-back').css({'width':'40%', 'margin-left': '-40%'})
            }
            else{
                $('.side-back').css({'width':'25%', 'margin-left': '-25%'})

            }

        	$('#menu-back').css('margin-top', '-80px');
        	$('.mobile-menu').css('margin-top', '-80px');
        	$('#menu-top').css('margin-top', '-80px');

        	$('#menu-back').delay(500).animate({'margin-top': '0px'}, 800);
        	$('.mobile-menu').delay(1000).animate({'margin-top': '0px'}, 800);
        	$('#menu-top').delay(1000).animate({'margin-top': '0'}, 800, function(){
                if($(window).width() > 1050){
                    $( '.side-back' ).animate({'margin-left': '0'}, 1200, function() {
                        $('.hori #profile a').addClass('active');
                        $('#profile .menu-side').show('slow', function(){
                            menuClick($('div#profile li:nth-child(1) a'));
                        });
                        $('#click-stopper').hide();
                    });
                }
                else{

                    $('.hori #profile a').addClass('active');
                    menuClick($('div#profile li:nth-child(1) a'));
                    $('#click-stopper').hide();

                }
        	});
        }, 1000)

    });
});

