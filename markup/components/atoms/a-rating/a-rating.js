$(function(){
    $(document).on('click', '.js-rating .a-rating__item', function (e) {
        var $parent = $(this).closest('.a-rating');
        if(!$parent.hasClass('a-rating--disabled')) {
            $(this).addClass('a-rating__item--filled')
                .prevAll().addClass('a-rating__item--filled')
                .end()
                .nextAll().removeClass('a-rating__item--filled')
        }
        e.preventDefault();
    });
});