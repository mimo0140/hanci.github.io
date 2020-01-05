$('document').ready(function () {

    var img = $('.imgbox img');
    var len = $('.imgbox img').length;
    var box = $('div.carousel');
    var btnL = $('div.btnl');
    var btnR = $('div.btnr');

    for (var i = 1; i <= len; i++) {
        $('.dot').append('<li></li>');
    }
    img.eq(0).css('opacity', '1');
    $('.dot li').eq(0).css('background', 'chartreuse');
    var next = 0;
    var index = 0;

    // 輪播
    function move() {
        next++;
        if (next == len) {
            next = 0;
        }

        img.eq(next).css('left', '600px');
        img.eq(index).animate({
            'left': '-=600px',
            'opacity': '0'
        });
        img.eq(next).animate({
            'left': '-=600px',
            'opacity': '1'
        });

        $('.dot li').eq(next).css('background', 'chartreuse');
        $('.dot li').eq(index).css('background', 'green');

        index = next;
    }
    var t = setInterval(move, 4000);

    // 左右按鈕出現、滑鼠移入停止輪播
    box.hover(function () {
        clearInterval(t);
        btnL.css('display', 'block');
        btnR.css('display', 'block');
    }, function () {
        t = setInterval(move, 4000);
        btnL.css('display', 'none');
        btnR.css('display', 'none');
    });

    //圖片倒退
    function move1() {
        next--;
        if (next == -1) {
            next = len;
        }

        img.eq(next).css('left', '-600px');
        img.eq(index).animate({
            'left': '+=600px',
            'opacity': '0'
        });
        img.eq(next).animate({
            'left': '+=600px',
            'opacity': '1'
        });

        $('.dot li').eq(next).css('background', 'chartreuse');
        $('.dot li').eq(index).css('background', 'green');

        index = next;
    }

    // 左右按鈕作用
    btnR.click(function () {
        clearInterval(t);
        move();
    });
    btnR.mouseup(function () {
        t = setInterval(move, 4000);
    });
    btnL.click(function () {
        clearInterval(t);
        move1();
    });
    btnL.mouseup(function () {
        t = setInterval(move, 4000);
    });

    // 下面小點點
    $('.dot li').click(function () {
        ind = $(this).index();
        if (ind == next) {
            return;
        } else if (ind < next) {
            clearInterval(t);
            img.eq(ind).css('left', '-600px');
            img.eq(index).animate({
                'left': '+=600px',
                'opacity': '0'
            });
            img.eq(ind).animate({
                'left': '+=600px',
                'opacity': '1'
            });

            $('.dot li').eq(ind).css('background', 'chartreuse');
            $('.dot li').eq(index).css('background', 'green');

            index = ind;
            next = ind;
        } else if (ind > next) {
            clearInterval(t);
            img.eq(ind).css('left', '600px');
            img.eq(index).animate({
                'left': '-=600px',
                'opacity': '0'
            });
            img.eq(ind).animate({
                'left': '-=600px',
                'opacity': '1'
            });

            $('.dot li').eq(ind).css('background', 'chartreuse');
            $('.dot li').eq(index).css('background', 'green');
            index = ind;
            next = ind;
        }
    });
    $('.dot li').mouseup(function () {
        t = setInterval(move, 4000);
    });
});