$('document').ready(function () {

    var img1 = $('.imgbox1 img');
    var len1 = $('.imgbox1 img').length;
    var box1 = $('div.carousel1');
    var btnL1 = $('div.btnl1');
    var btnR1 = $('div.btnr1');

    for (var i = 1; i <= len1; i++) {
        $('.dot1').append('<li></li>');
    }
    img1.eq(0).css('opacity', '1');
    $('.dot1 li').eq(0).css('background', 'tomato');
    var next1 = 0;
    var index1 = 0;

    // 輪播
    function move1() {
        next1++;
        if (next1 == len1) {
            next1 = 0;
        }

        img1.eq(next1).css('left', '600px');
        img1.eq(index1).animate({
            'left': '-=600px',
            'opacity': '0'
        });
        img1.eq(next1).animate({
            'left': '-=600px',
            'opacity': '1'
        });

        $('.dot1 li').eq(next1).css('background', 'tomato');
        $('.dot1 li').eq(index1).css('background', 'rgb(243, 235, 229)');

        index1 = next1;
    }
    var t1 = setInterval(move1, 4000);

    // 左右按鈕出現、滑鼠移入停止輪播
    box1.hover(function () {
        clearInterval(t1);
        btnL1.css('display', 'block');
        btnR1.css('display', 'block');
    }, function () {
        t1 = setInterval(move1, 4000);
        btnL1.css('display', 'none');
        btnR1.css('display', 'none');
    });

    //圖片倒退
    function move1_1() {
        next1--;
        if (next1 == -1) {
            next1 = len1-1;
        }

        img1.eq(next1).css('left', '-600px');
        img1.eq(index1).animate({
            'left': '+=600px',
            'opacity': '0'
        });
        img1.eq(next1).animate({
            'left': '+=600px',
            'opacity': '1'
        });

        $('.dot1 li').eq(next1).css('background', 'tomato');
        $('.dot1 li').eq(index1).css('background', 'rgb(243, 235, 229)');

        index1 = next1;
    }

    // 左右按鈕作用
    btnR1.click(function () {
        clearInterval(t1);
        move1();
    });
    btnR1.mouseup(function () {
        t1 = setInterval(move1, 4000);
    });
    btnL1.click(function () {
        clearInterval(t1);
        move1_1();
    });
    btnL1.mouseup(function () {
        t1 = setInterval(move1, 4000);
    });

    // 下面小點點
    $('.dot1 li').click(function () {
        ind1 = $(this).index();
        if (ind1 == next1) {
            return;
        } else if (ind1 < next1) {
            clearInterval(t1);
            img1.eq(ind1).css('left', '-600px');
            img1.eq(index1).animate({
                'left': '+=600px',
                'opacity': '0'
            });
            img1.eq(ind1).animate({
                'left': '+=600px',
                'opacity': '1'
            });

            $('.dot1 li').eq(ind1).css('background', 'tomato');
            $('.dot1 li').eq(index1).css('background', 'rgb(243, 235, 229)');

            index1 = ind1;
            next1 = ind1;
        } else if (ind1 > next1) {
            clearInterval(t1);
            img1.eq(ind1).css('left', '600px');
            img1.eq(index1).animate({
                'left': '-=600px',
                'opacity': '0'
            });
            img1.eq(ind1).animate({
                'left': '-=600px',
                'opacity': '1'
            });

            $('.dot1 li').eq(ind1).css('background', 'tomato');
            $('.dot1 li').eq(index1).css('background', 'rgb(243, 235, 229)');
            index1 = ind1;
            next1 = ind1;
        }
    });
    $('.dot1 li').mouseup(function () {
        t1 = setInterval(move1, 4000);
    });

    var img2 = $('.imgbox2 img');
    var len2 = $('.imgbox2 img').length;
    var box2 = $('div.carousel2');
    var btnL2 = $('div.btnl2');
    var btnR2 = $('div.btnr2');

    for (var i = 1; i <= len2; i++) {
        $('.dot2').append('<li></li>');
    }
    img2.eq(0).css('opacity', '1');
    $('.dot2 li').eq(0).css('background', 'tomato');
    var next2 = 0;
    var index2 = 0;

    // 輪播
    function move2() {
        next2++;
        if (next2 == len2) {
            next2 = 0;
        }

        img2.eq(next2).css('left', '600px');
        img2.eq(index2).animate({
            'left': '-=600px',
            'opacity': '0'
        });
        img2.eq(next2).animate({
            'left': '-=600px',
            'opacity': '1'
        });

        $('.dot2 li').eq(next2).css('background', 'tomato');
        $('.dot2 li').eq(index2).css('background', 'rgb(243, 235, 229)');

        index2 = next2;
    }
    var t2 = setInterval(move2, 4000);

    // 左右按鈕出現、滑鼠移入停止輪播
    box2.hover(function () {
        clearInterval(t2);
        btnL2.css('display', 'block');
        btnR2.css('display', 'block');
    }, function () {
        t2 = setInterval(move2, 4000);
        btnL2.css('display', 'none');
        btnR2.css('display', 'none');
    });

    //圖片倒退
    function move2_1() {
        next2--;
        if (next2 == -1) {
            next2 = len2-1;
        }

        img2.eq(next2).css('left', '-600px');
        img2.eq(index2).animate({
            'left': '+=600px',
            'opacity': '0'
        });
        img2.eq(next2).animate({
            'left': '+=600px',
            'opacity': '1'
        });

        $('.dot2 li').eq(next2).css('background', 'tomato');
        $('.dot2 li').eq(index2).css('background', 'rgb(243, 235, 229)');

        index2 = next2;
    }

    // 左右按鈕作用
    btnR2.click(function () {
        clearInterval(t2);
        move2();
    });
    btnR2.mouseup(function () {
        t2 = setInterval(move2, 4000);
    });
    btnL2.click(function () {
        clearInterval(t2);
        move2_1();
    });
    btnL2.mouseup(function () {
        t2 = setInterval(move2, 4000);
    });

    // 下面小點點
    $('.dot2 li').click(function () {
        ind2 = $(this).index();
        if (ind2 == next2) {
            return;
        } else if (ind2 < next2) {
            clearInterval(t2);
            img2.eq(ind2).css('left', '-600px');
            img2.eq(index2).animate({
                'left': '+=600px',
                'opacity': '0'
            });
            img2.eq(ind2).animate({
                'left': '+=600px',
                'opacity': '1'
            });

            $('.dot2 li').eq(ind2).css('background', 'tomato');
            $('.dot2 li').eq(index2).css('background', 'rgb(243, 235, 229)');

            index2 = ind2;
            next2 = ind2;
        } else if (ind2 > next2) {
            clearInterval(t2);
            img2.eq(ind2).css('left', '600px');
            img2.eq(index2).animate({
                'left': '-=600px',
                'opacity': '0'
            });
            img2.eq(ind2).animate({
                'left': '-=600px',
                'opacity': '1'
            });

            $('.dot2 li').eq(ind2).css('background', 'tomato');
            $('.dot2 li').eq(index2).css('background', 'rgb(243, 235, 229)');
            index2 = ind2;
            next2 = ind2;
        }
    });
    $('.dot2 li').mouseup(function () {
        t2 = setInterval(move2, 4000);
    });

    var img3 = $('.imgbox3 img');
    var len3 = $('.imgbox3 img').length;
    var box3 = $('div.carousel3');
    var btnL3 = $('div.btnl3');
    var btnR3 = $('div.btnr3');

    for (var i = 1; i <= len3; i++) {
        $('.dot3').append('<li></li>');
    }
    img3.eq(0).css('opacity', '1');
    $('.dot3 li').eq(0).css('background', 'tomato');
    var next3 = 0;
    var index3 = 0;

    // 輪播
    function move3() {
        next3++;
        if (next3 == len3) {
            next3 = 0;
        }

        img3.eq(next3).css('left', '600px');
        img3.eq(index3).animate({
            'left': '-=600px',
            'opacity': '0'
        });
        img3.eq(next3).animate({
            'left': '-=600px',
            'opacity': '1'
        });

        $('.dot3 li').eq(next3).css('background', 'tomato');
        $('.dot3 li').eq(index3).css('background', 'rgb(243, 235, 229)');

        index3 = next3;
    }
    var t3 = setInterval(move3, 4000);

    // 左右按鈕出現、滑鼠移入停止輪播
    box3.hover(function () {
        clearInterval(t3);
        btnL3.css('display', 'block');
        btnR3.css('display', 'block');
    }, function () {
        t3 = setInterval(move3, 4000);
        btnL3.css('display', 'none');
        btnR3.css('display', 'none');
    });

    //圖片倒退
    function move3_1() {
        next3--;
        if (next3 == -1) {
            next3 = len3-1;
        }

        img3.eq(next3).css('left', '-600px');
        img3.eq(index3).animate({
            'left': '+=600px',
            'opacity': '0'
        });
        img3.eq(next3).animate({
            'left': '+=600px',
            'opacity': '1'
        });

        $('.dot3 li').eq(next3).css('background', 'tomato');
        $('.dot3 li').eq(index3).css('background', 'rgb(243, 235, 229)');

        index3 = next3;
    }

    // 左右按鈕作用
    btnR3.click(function () {
        clearInterval(t3);
        move3();
    });
    btnR3.mouseup(function () {
        t3 = setInterval(move3, 4000);
    });
    btnL3.click(function () {
        clearInterval(t3);
        move3_1();
    });
    btnL3.mouseup(function () {
        t3 = setInterval(move3, 4000);
    });

    // 下面小點點
    $('.dot3 li').click(function () {
        ind3 = $(this).index();
        if (ind3 == next3) {
            return;
        } else if (ind3 < next3) {
            clearInterval(t3);
            img3.eq(ind3).css('left', '-600px');
            img3.eq(index3).animate({
                'left': '+=600px',
                'opacity': '0'
            });
            img3.eq(ind3).animate({
                'left': '+=600px',
                'opacity': '1'
            });

            $('.dot3 li').eq(ind3).css('background', 'tomato');
            $('.dot3 li').eq(index3).css('background', 'rgb(243, 235, 229)');

            index3 = ind3;
            next3 = ind3;
        } else if (ind3 > next3) {
            clearInterval(t3);
            img3.eq(ind3).css('left', '600px');
            img3.eq(index3).animate({
                'left': '-=600px',
                'opacity': '0'
            });
            img3.eq(ind3).animate({
                'left': '-=600px',
                'opacity': '1'
            });

            $('.dot3 li').eq(ind3).css('background', 'tomato');
            $('.dot3 li').eq(index3).css('background', 'rgb(243, 235, 229)');
            index3 = ind3;
            next3 = ind3;
        }
    });
    $('.dot3 li').mouseup(function () {
        t3 = setInterval(move3, 4000);
    });

    var img4 = $('.imgbox4 img');
    var len4 = $('.imgbox4 img').length;
    var box4 = $('div.carousel4');
    var btnL4 = $('div.btnl4');
    var btnR4 = $('div.btnr4');

    for (var i = 1; i <= len4; i++) {
        $('.dot4').append('<li></li>');
    }
    img4.eq(0).css('opacity', '1');
    $('.dot4 li').eq(0).css('background', 'tomato');
    var next4 = 0;
    var index4 = 0;

    // 輪播
    function move4() {
        next4++;
        if (next4 == len4) {
            next4 = 0;
        }

        img4.eq(next4).css('left', '600px');
        img4.eq(index4).animate({
            'left': '-=600px',
            'opacity': '0'
        });
        img4.eq(next4).animate({
            'left': '-=600px',
            'opacity': '1'
        });

        $('.dot4 li').eq(next4).css('background', 'tomato');
        $('.dot4 li').eq(index4).css('background', 'rgb(243, 235, 229)');

        index4 = next4;
    }
    var t4 = setInterval(move4, 4000);

    // 左右按鈕出現、滑鼠移入停止輪播
    box4.hover(function () {
        clearInterval(t4);
        btnL4.css('display', 'block');
        btnR4.css('display', 'block');
    }, function () {
        t4 = setInterval(move4, 4000);
        btnL4.css('display', 'none');
        btnR4.css('display', 'none');
    });

    //圖片倒退
    function move4_1() {
        next4--;
        if (next4 == -1) {
            next4 = len4-1;
        }

        img4.eq(next4).css('left', '-600px');
        img4.eq(index4).animate({
            'left': '+=600px',
            'opacity': '0'
        });
        img4.eq(next4).animate({
            'left': '+=600px',
            'opacity': '1'
        });

        $('.dot4 li').eq(next4).css('background', 'tomato');
        $('.dot4 li').eq(index4).css('background', 'rgb(243, 235, 229)');

        index4 = next4;
    }

    // 左右按鈕作用
    btnR4.click(function () {
        clearInterval(t4);
        move4();
    });
    btnR4.mouseup(function () {
        t4 = setInterval(move4, 4000);
    });
    btnL4.click(function () {
        clearInterval(t4);
        move4_1();
    });
    btnL4.mouseup(function () {
        t4 = setInterval(move4, 4000);
    });

    // 下面小點點
    $('.dot4 li').click(function () {
        ind4 = $(this).index();
        if (ind4 == next4) {
            return;
        } else if (ind4 < next4) {
            clearInterval(t4);
            img4.eq(ind4).css('left', '-600px');
            img4.eq(index4).animate({
                'left': '+=600px',
                'opacity': '0'
            });
            img4.eq(ind4).animate({
                'left': '+=600px',
                'opacity': '1'
            });

            $('.dot4 li').eq(ind4).css('background', 'tomato');
            $('.dot4 li').eq(index4).css('background', 'rgb(243, 235, 229)');

            index4 = ind4;
            next4 = ind4;
        } else if (ind4 > next4) {
            clearInterval(t4);
            img4.eq(ind4).css('left', '600px');
            img4.eq(index4).animate({
                'left': '-=600px',
                'opacity': '0'
            });
            img4.eq(ind4).animate({
                'left': '-=600px',
                'opacity': '1'
            });

            $('.dot4 li').eq(ind4).css('background', 'tomato');
            $('.dot4 li').eq(index4).css('background', 'rgb(243, 235, 229)');
            index4 = ind4;
            next4 = ind4;
        }
    });
    $('.dot4 li').mouseup(function () {
        t4 = setInterval(move4, 4000);
    });
});