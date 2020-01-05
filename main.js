    var gohome = $('div#btn3');
    var quest = $('div#btn2');
    var gotop = $('div#btn1');
    var toone = $('#toone');
    var totwo = $('#totwo');
    var tothree = $('#tothree');
    var tofour = $('#tofour');
    var submit = $('button#submit');
    var menu = false;
    $('div#menu').hover(function () {
        gohome.animate({
            top: '+=195',
        });
        quest.animate({
            top: '+=135',
        });
        gotop.animate({
            top: '+=75',
        });
    }, function () {
        gohome.animate({
            top: '-=195',
        });
        quest.animate({
            top: '-=135',
        });
        gotop.animate({
            top: '-=75',
        });
    });
    gotop.click(function () {
        $('html,body').animate({
            scrollTop: $('body').offset().top
        }, 600);
    });
    gotop.hover(function () {
        $('.btn1-text').animate({
            left: '-=60',
        });
    }, function () {
        $('.btn1-text').animate({
            left: '+=60',
        });
    });
    quest.click(function () {
        $('.ques').animate({
            top: '50%',
            marginTop: '-380px',
        });
    });
    quest.hover(function () {
        $('.btn2-text').animate({
            left: '-=60',
        });
    }, function () {
        $('.btn2-text').animate({
            left: '+=60',
        });
    });
    gohome.click(function () {
        window.location.href = "index.html";
    });
    gohome.hover(function () {
        $('.btn3-text').animate({
            left: '-=60',
        });
    }, function () {
        $('.btn3-text').animate({
            left: '+=60',
        });
    });
    toone.click(function () {
        $('html,body').animate({
            scrollTop: $('#one').offset().top
        }, 600);
    });
    toone.hover(function () {
        $('.c1-ani').animate({
            top: '-=20',
            left: '-=20',
            opacity: '0.8'
        });
        $('.c1-tex').animate({
            top: '+=150',
            opacity: '1'
        });
    }, function () {
        $('.c1-ani').animate({
            top: '+=20',
            left: '+=20',
            opacity: '0'
        });
        $('.c1-tex').animate({
            top: '-=150',
            opacity: '0'
        });
    });
    totwo.click(function () {
        $('html,body').animate({
            scrollTop: $('#two').offset().top
        }, 600);
    });
    totwo.hover(function () {
        $('.c2-ani').animate({
            top: '-=20',
            left: '-=20',
            opacity: '0.8'
        });
        $('.c2-tex').animate({
            top: '+=150',
            opacity: '1'
        });
    }, function () {
        $('.c2-ani').animate({
            top: '+=20',
            left: '+=20',
            opacity: '0'
        });
        $('.c2-tex').animate({
            top: '-=150',
            opacity: '0'
        });
    });
    tothree.click(function () {
        $('html,body').animate({
            scrollTop: $('#three').offset().top
        }, 600);
    });
    tothree.hover(function () {
        $('.c3-ani').animate({
            top: '-=20',
            left: '-=20',
            opacity: '0.8'
        });
        $('.c3-tex').animate({
            top: '+=150',
            opacity: '1'
        });
    }, function () {
        $('.c3-ani').animate({
            top: '+=20',
            left: '+=20',
            opacity: '0'
        });
        $('.c3-tex').animate({
            top: '-=150',
            opacity: '0'
        });
    });
    tofour.click(function () {
        $('html,body').animate({
            scrollTop: $('#four').offset().top
        }, 600);
    });
    tofour.hover(function () {
        $('.c4-ani').animate({
            top: '-=20',
            left: '-=20',
            opacity: '0.8'
        });
        $('.c4-tex').animate({
            top: '+=150',
            opacity: '1'
        });
    }, function () {
        $('.c4-ani').animate({
            top: '+=20',
            left: '+=20',
            opacity: '0'
        });
        $('.c4-tex').animate({
            top: '-=150',
            opacity: '0'
        });
    });
    submit.click(function () {
        $('.ques').animate({
            marginTop: '0px',
            top: '-760px'
        });
        $('.questcomp').css('display', 'block');
    })
    $('.questcomp').click(function () {
        $(this).css('display', 'none');
    });