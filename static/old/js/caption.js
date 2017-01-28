jQuery(document).ready(function() {
	jQuery('.slide').hover(
		function(){
			jQuery(this).find('.caption').fadeIn(350);

		},
		function(){
			jQuery(this).find('.caption').fadeOut(350);
		}
	);

});