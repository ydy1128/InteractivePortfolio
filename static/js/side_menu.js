$(document).ready(function(){
	$('.vert li a').click(function(){
		menuClick(this);
	});
    var all_grid_items = $('.grid-item').clone();
	$('ul.projects a').click(function(){
	    var text = $(this).html();
		var text_arr = text.split(' ');
		if(text_arr.length > 1){
		    text = text_arr[1];
		}
        text = text.toLowerCase();
        if($('.'+text) != $('ul.projects a.active')){
            if(text == 'projects'){
                var count = all_grid_items.length;
                setTimeout(function(){
                    all_grid_items.each(function(){
                        var item = $(this);
                        var item_id = '#'+$(this).attr('id');
                        var item_id_num = $(this).attr('id').replace(/[^\d.]/g, '');
                        if($('.grid').find(item_id).length == 0){
                            $('.grid').append(item).masonry('appended', item);
                        }
                        if (!--count){
                            $('.grid').masonry('layout');
                            // $('.grid-item').unbind();

                            add_hover_modals();
                            add_modal_popup();
                        }
                    })
                }, 100)
            }
            else{
                var count = all_grid_items.length;
                text = '.'+text;
                $('.grid').masonry('remove', $('.grid-item').not(text));
                setTimeout(function(){
                    all_grid_items.each(function(){
                        if($(this).hasClass(text.replace('.',''))){
                            var item = $(this);
                            var item_id = '#'+$(this).attr('id');
                            var item_id_num = $(this).attr('id').replace(/[^\d.]/g, '');
                            if($('.grid').find(item_id).length == 0){
                                $('.grid').append(item).masonry('appended', item);
                            }
                        }
                        if (!--count){
                            $('.grid').masonry('layout');
                            // $('.grid-item').unbind();
                            add_hover_modals();
                            add_modal_popup();
                        }
                    })
                }, 100)
            }
        }

	});
    $('.mobile-menu.left').click(function(e){
        toggle_side_menu(e);
    })
    $('#screen-blocker-whole').click(function(e){
        $('#screen-blocker-whole').fadeOut(300)
        $('#screen-blocker-whole').css('z-index','80')
        close_side_menu()
    })

});

function toggle_side_menu(e){
    var menu = '#' + $('.cycle .active').parent().attr('id') + ' .menu-side';
    e.preventDefault();
    console.log($(menu).css('display'))
    if($(menu).css('display') == 'block'){
        close_side_menu();
    }
    else{
        open_side_menu();
    }
}

function open_side_menu(){
    console.log('open')
    var menu = '#' + $('.cycle .active').parent().attr('id') + ' .menu-side';
    $('.side-back').animate({'margin-left': '0'}, 300, function(){
        $(menu).show(0, function(){
            console.log('show')
        });
    });
    $('.mobile-menu.left').css({'z-index':'90', 'color' : 'white'});
    if($(window).width() < 760){
        $('#screen-blocker-whole').fadeIn(300,function(){
            $(this).css('z-index','80')
        })
    }
}
function close_side_menu(){
    console.log('close')
    if($(window).width() > 1050){
        $('.side-back').animate({'margin-left': '-20%'}, 300, function(){
            $('.menu-side').hide(0, function(){
                console.log('hide')
            });
        });
    }
    else if($(window).width() < 760){
        $('.side-back').animate({'margin-left': '-40%'}, 300, function(){
            $('.menu-side').hide(0, function(){
                console.log('hide')
            });
        });
    }
    else{
        $('.side-back').animate({'margin-left': '-25%'}, 300, function(){
            $('.menu-side').hide(0, function(){
                console.log('hide')
            });
        });
    }
    $('.mobile-menu.left').css({'z-index':'20', 'color' : 'black'});
    $('#screen-blocker-whole').fadeOut(300)
    $('#screen-blocker-whole').css('z-index','80')
}

$(window).resize(function(){
    if($(window).width() > 1050){
        $('.side-back').css({'width':'20%'})
        $('.menu-side').css({'width':'20%'})
        open_side_menu()
        $('#screen-blocker-whole').fadeOut(300)
        $('#screen-blocker-whole').css('z-index','80')
    }
    else if($(window).width() < 760){
        $('.side-back').css({'width':'40%'})
        $('.menu-side').css({'width':'40%'})
        close_side_menu()
    }
    else{
        $('.side-back').css({'width':'25%'})
        $('.menu-side').css({'width':'25%'})
        close_side_menu()
    }
})
function add_hover_modals(){
    console.log('hover')
	$('.grid-item')
    .mouseenter(function() {
        $(this).find('.grid-hover').fadeIn(300);
        $(this).find('img').animate({'margin-left' : '-5%'});
        $(this).find('hr').animate({'margin-right' : '0'});
    })
    .mouseleave(function() {
        $(this).find('.grid-hover').fadeOut(300);
        $(this).find('img').animate({'margin-left' : '0%'});
        $(this).find('hr').animate({'margin-right' : '90%'});
    });
}
function add_modal_popup(){
    $('.modal').click(function(){
        show_block();
        var id = $(this).attr('id');
        var link_id = '#get-'+id;
        $(link_id).fadeIn(300);
        $(link_id).css('z-index', '90');
        $('.modal-wrapper').scrollTop(0);
    });
}
function menuClick(menu) {
	$('.vert li a').removeClass('active');
	$(menu).addClass('active');
    if($('#contents-'+$(menu).attr('id')).css('display') == 'none'){
    	$('.contents').css('display', 'none');
    	$('.contents').css('opacity', '0');
    	$('#contents-'+$(menu).attr('id')).css('display', 'block');
    	if($(menu).attr('id') == 'projects'){
    	    $('.grid').imagesLoaded().done( function( instance ) {

        	    $('.grid-item').show();

        	    $('.grid').masonry({
                    itemSelector: '.grid-item',
                    gutter: 20,
                });
                $('.grid-item').map(function(){
                    var src = $(this).find('img').attr('src');
                    var img = document.createElement('img');
                    img.setAttribute('src', src);
                    var vibrant = new Vibrant(img);
                    var swatches = vibrant.swatches()

                    var get_modal = $('#get-'+$(this).attr('id'));
                    var modal_links = $('ul.modal-contents-links a:hover');
                    var sub_header = get_modal.find('.modal-subheader');
                    var sub_header_color = swatches['Vibrant'].getHex();
                    sub_header.css({'background-color': sub_header_color});
                });
    	    });
        }
        $('#contents-'+$(menu).attr('id')).animate({opacity: 1.0}, 500);
    }
}
