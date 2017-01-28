function arrow_box_popup(message, call_elem){
    var left = call_elem.offset().left + 25;
    var top = call_elem.offset().top - 75;
    $('body').append('<div class="arrow-box"><p>'+message+'</p></div>')
    $('.arrow-box').css({
        'left': left,
        'top': top
    })
    $('.arrow-box').fadeIn(100);
    $('.arrow-box').delay(1000).fadeOut(300, function(){
        $('.arrow-box').remove();
    });
}
function arrow_box_hover_show(message, call_elem){
    var left = call_elem.offset().left - 75;
    var top = call_elem.offset().top - 75;

    var id = 'arrow-box-' + call_elem.attr('class');
    $('body').append('<div id='+id+' class="arrow-box"><p>'+message+'</p></div>')

    $('#'+id).css({
        'left': left,
        'top': top
    })
    $('#'+id).show();
}
function arrow_box_hover_hide(call_elem){
    var id = 'arrow-box-' + call_elem.attr('class');

    $('#'+id).hide(0,function(){
        $('#'+id).remove();
    });
}