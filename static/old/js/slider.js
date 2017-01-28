jQuery(window).scroll(function (){
    var profile = jQuery('#profile').position();
    var project = jQuery('#projects').position();
    var exp = jQuery('#experiences').position();
    var skill = jQuery('#skills').position();
    var contact = jQuery('#contact').position();
    if (jQuery(window).width() > 985){
        if (jQuery(window).scrollTop() > profile.top-70) {
            jQuery('.scroll-nav').show('slow');
        }
        else{
            jQuery('.scroll-nav').hide('slow');
        }


        if (jQuery(window).scrollTop() > profile.top-70 && jQuery(window).scrollTop() < project.top-70) {
            jQuery('.icon-profile').css({"background" : "#18bc9c"});
        }
        else{
            jQuery('.icon-profile').css({"background" : "#312c32"});
        }

        if (jQuery(window).scrollTop() > project.top-70 && jQuery(window).scrollTop() < exp.top-70) {
            jQuery('.icon-projects').css({"background" : "#18bc9c"});
        }
        else{
            jQuery('.icon-projects').css({"background" : "#312c32"});
        }
        if (jQuery(window).scrollTop() > exp.top-70 && jQuery(window).scrollTop() < skill.top-70) {
            jQuery('.icon-experience').css({"background" : "#18bc9c"});
        }
        else{
            jQuery('.icon-experience').css({"background" : "#312c32"});
        }
        if (jQuery(window).scrollTop() > skill.top-70 && jQuery(window).scrollTop() < contact.top-70) {
            jQuery('.icon-skills').css({"background" : "#18bc9c"});
        }
        else{
            jQuery('.icon-skills').css({"background" : "#312c32"});
        }
        if (jQuery(window).scrollTop() > contact.top-70) {
            jQuery('.icon-contact').css({"background" : "#18bc9c"});
        }
        else {
            jQuery('.icon-contact').css({"background" : "#312c32"});
        }
    }
    else{
        jQuery('.scroll-nav').hide();
    }
});

$(window).resize(function() {
    if (jQuery(window).width() < 985){
        jQuery('.scroll-nav').hide();
    }
});
