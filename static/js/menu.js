$(document).ready(function(){
	$('.cycle').click(function(){
		var id = $(this).attr('id');
		var page_id = '#' + id;

        if($(page_id+' .contents').css('display') == 'none'){
    		$('#click-stopper').show();
    		var clicked = $(this);
    		var prev = clicked.prevAll();
    		var i = prev.length;
    		var menu = '#' + id + ' .menu-side';
    		$('.contents').css('display', 'none');
    		$('.contents').css('opacity', '0');

            animate();
        }
		function animate(){
			var first = $('.cycle:nth-child(1)');
			var add_active = $('.cycle:nth-child(2)').children();
			var remove_active = first.children();
			var list = $(this).parent();
			var move = clicked.outerWidth();
			add_active.addClass('active');
			$(first).animate({'margin-left': - move}, 600, function(){
				$('.hori').append(first);
				$('.cycle').css({'margin-left': 0});
				remove_active.removeClass('active');
				i--;
				if (i > 0){
					animate();
				}
				else{
					$('.menu-side').css('display', 'none');

					$(menu).show('slow', function(){
				  		$('.hori '+menu+' a').addClass('active');
						menuClick($('div'+menu+' li:nth-child(1) a'));
				  	});

					$('#click-stopper').hide();
				}
			});
		}
	});
	$('.mobile-menu.right i').click(function(){
		var first = $('.cycle:nth-child(1)');
		var add_active = $('.cycle:nth-child(2)').children();
		var next_active = $('.cycle:nth-child(2)')
		var list = $('.cycle').parent();
		var move = $('.cycle').outerWidth();
		var remove_active = first.children();
    // 		var menu = '#' + id + ' .menu-side';

		add_active.addClass('active');
		$(first).animate({'margin-left': - move}, 600, function(){
			$('.hori').append(first);
			$('.cycle').css({'margin-left': 0});
			remove_active.removeClass('active');

// 			$('.menu-side').css('display', 'none');

// 			$(menu).show('slow', function(){
// 		  		$('.hori '+menu+' a').addClass('active');

				menuClick($('div#'+next_active.attr('id')+' li:nth-child(1) a'));
// 		  	});

			$('#click-stopper').hide();
		});
	})
});

