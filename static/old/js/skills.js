jQuery(document).ready(function() {


    var star_filled = jQuery('span.content-filled').clone();
    var star_empty = jQuery('span.content-notfilled').clone();

    jQuery('span.content-filled').css("display", "none");
    jQuery('span.content-notfilled').css("display", "none");

    for(var i = 0; i < 5; i++){

        star_filled.insertAfter('span.level5');
    }

    for(var i = 0; i < 4; i++){
        star_filled.insertAfter('.level4');
    }
    star_empty.insertAfter('.level4');

    for(var i = 0; i < 3; i++){
        star_filled.insertAfter('.level3');
    }
    for(var i = 0; i < 2; i++){
        star_empty.insertAfter('.level3');
    }

    for(var i = 0; i < 2; i++){
        star_filled.insertAfter('.level2');
    }
    for(var i = 0; i < 3; i++){
        star_empty.insertAfter('.level2');
    }

    star_filled.insertAfter('.level1');
    for(var i = 0; i < 4; i++){
        star_empty.insertAfter('.level1');
    }


});