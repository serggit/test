$(function(){

    // http://hilios.github.io/jQuery.countdown/examples/multiple-instances.html
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');

        $this.countdown(finalDate)
            .on('update.countdown', function(e){
                var $parent = $(this);

                var $days = $parent.find('.a-countdown__item--d');
                var $hours = $parent.find('.a-countdown__item--h');
                var $min = $parent.find('.a-countdown__item--min');

                $days.find('.a-countdown__val span').eq(0).text(e.strftime('%D').slice(0, 1));
                $days.find('.a-countdown__val span').eq(1).text(e.strftime('%D').slice(-1));
                $days.find('.a-countdown__label').text(declOfNum(e.strftime('%D').slice(-1), ['день', 'дня', 'дней']));

                $hours.find('.a-countdown__val span').eq(0).text(e.strftime('%H').slice(0, 1));
                $hours.find('.a-countdown__val span').eq(1).text(e.strftime('%H').slice(-1));
                $hours.find('.a-countdown__label').text(declOfNum(e.strftime('%H').slice(-1), ['час', 'часа', 'часов']));

                $min.find('.a-countdown__val span').eq(0).text(e.strftime('%M').slice(0, 1));
                $min.find('.a-countdown__val span').eq(1).text(e.strftime('%M').slice(-1));
                $min.find('.a-countdown__label').text(declOfNum(e.strftime('%M').slice(-1), ['минута', 'минуты', 'минут']));

            });
    });

});
function declOfNum(number, titles) {
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
}