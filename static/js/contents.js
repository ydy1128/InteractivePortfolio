$(document).ready(function(){
    //perfect-scrollbar apply
    $('.contents').perfectScrollbar({
        suppressScrollX: true
    });
    $('.modal-wrapper').perfectScrollbar({
        suppressScrollX: true
    });

    //dropdown
    $('ul i.drop').click(function(){
        var dropdown = $(this).parent().find('.dropdown');
        var up_icon = $(this).parent().find('.fa-caret-up');
        var down_icon = $(this).parent().find('.fa-caret-down');
        if(dropdown.hasClass('active')){
            dropdown.slideUp(300);
            dropdown.removeClass('active');
            up_icon.hide();
            down_icon.show();
        }
        else{
            dropdown.slideDown(300);
            dropdown.addClass('active');
            down_icon.hide();
            up_icon.show();

        }
    });

    //modal pop-up
    add_modal_popup();

    //close modal
    $('.x-button').click(function(){
        hide_block();
        var modal = $(this).parent().parent();
        modal.fadeOut(300);
        modal.css('z-index', '-90');
    });
    $('#screen-blocker').click(function(){
        hide_block();
        $('.get-modal').fadeOut(300);
        $('.get-modal').css('z-index', '-90');
    })
    $('.modal-contents-links a').hover(function(){
        arrow_box_hover_show($(this).attr('class').toUpperCase(), $(this))
    },
    function(){
        arrow_box_hover_hide($(this))
    });

    //Projects section
	//hover effect
    add_hover_modals();

    //remove h4 on hover if it has no sub-element
    var hover_ps = $('.grid-hover p');
    var hover_hs = $('.grid-hover h4');
    for (var i = 0; i < hover_ps.length; i++){
        if ($(hover_ps[i]).html().replace(/\s/g, '') == ''){
            $(hover_hs[i]).remove();
            $(hover_ps[i]).remove();
        }
    }

    //Skills section
    $('#skills li .right').map(function(){
        var num = parseInt($(this).html());
        var left_num = 5 - num;
        var full_star = '<i class="fa fa-star full-star" aria-hidden="true"></i>';
        var empty_star = '<i class="fa fa-star empty-star" aria-hidden="true"></i>';
        $(this).html('')
        for (var i = 0; i < num; i++){
            $(this).append(full_star);
        }
        for (var i = 0; i < left_num; i++){
            $(this).append(empty_star);
        }
        // $(this).html();
    });

    $('#skills li')
    .mouseenter(function() {
        $(this).addClass('active');
        $(this).find('.fa-star').each(function(i){
            var star = $(this);
            setTimeout(function() {
                star.addClass('active');
            }, 25*i);
        });
    })
    .mouseleave(function() {
        $(this).removeClass('active');
        $(this).find('.fa-star').each(function(i){
            var star = $(this);
            setTimeout(function() {
                star.removeClass('active');
            }, 25*i);
        });
    });


    //Skills section
    $('#experience ul.description').map(function(){
        var text = $(this).html();
        text = text.split(' -- ');
        $(this).html('');
        for (var i = 0; i < text.length; i++){
            // console.log(text[i])
            var item = '<li>' + text[i] + '</li>';
            if(text[i] != ''){
                $(this).append(item)
            }
        }
        // console.log(text)
    })
    // var clipboard = new Clipboard('.email');

    //Contact section
    var email_elem = document.getElementById('email');
    email_elem.onclick = function () {
            document.execCommand('copy');
        }

       email_elem.addEventListener('copy', function (e) {

        e.preventDefault();
        if (e.clipboardData) {
            e.clipboardData.setData('text/plain', 'ydy1128@gmail.com');
        } else if (window.clipboardData) {
            window.clipboardData.setData('Text', 'ydy1128@gmail.com');
        }
        arrow_box_popup('Email Copied!', $('#email'))
    });
});

function show_block(){
    $('#screen-blocker').fadeIn(250);
    $('#screen-blocker').css('z-index', '90');
    if($(window).width() < 1050){
        $('.mobile-menu').css('z-index', '-30');
    }
    $('.contents').perfectScrollbar('destroy');
}
function hide_block(){
    $('#screen-blocker').fadeOut(250);
    $('#screen-blocker').css('z-index', '-90');
    $('.mobile-menu').css('z-index', '30');
    $('.contents').perfectScrollbar({
        suppressScrollX: true
    });
}



