(function ($) {
    "use strict";
    $(document).ready(function () {

        if ($('.asurion-faq-item').length) {
            $('.asurion-faq-item').click(function(){
                $(this).toggleClass('active');
            });
        }




    });
}(jQuery));