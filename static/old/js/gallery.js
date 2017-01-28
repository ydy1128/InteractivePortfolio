jQuery(function ($) {
    $(".filter").on("click", function () {
        var $this = $(this);

        if ( !$this.hasClass("active") ) {
            $(".filter").removeClass("active");
            $this.addClass("active");

            var $filter = $this.data("rel");

            $filter == 'all' ?
                $(".fancybox")
                .attr("data-fancybox-group", "gallery")
                .not(":visible")
                .fadeIn()

            : // otherwise
                $(".fancybox")
                .fadeOut(200)
                .filter(function () {
                    return $(this).data("filter") == $filter;
                })
                .attr("data-fancybox-group", $filter)
                .delay(200).fadeIn(500);
        }
    });
});