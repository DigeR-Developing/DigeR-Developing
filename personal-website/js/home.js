$('#text-show').on('mousemove', function() {
    $('#text-show').css('color', '#777');
    $('#text-show').css('border-radius', '30px');
    $('#text-show').css('background', 'white');
    $('#text-show').css('transition', 'ease-in 0.5s');
})

$('#text-show').on('mouseleave', function() {
    $('#text-show').css('color', 'white');
    $('#text-show').css('border-radius', '15px');
    $('#text-show').css('background', '#777');
    $('#text-show').css('transition', 'ease-out 0.5s');
})

showclicked = false;

$('#text-show').click(function() {
    showclicked = true;
    $('#text-show').css('transform', 'scale(0)');
    $('.text-box').css('transform', 'scale(1)');
    $('.text-box').css('transition', '0.5s');
})

$('.text-box').on('mousemove', function() {
    if (showclicked == true) {
        $('.text-box').css('background', 'white');
        $('.text-box').css('color', '#777');
        $('.text-box').css('cursor', 'default');
        $('.text-box').css('border-radius', '25px');

        $('.text-box h1').css('background', 'white');
        $('.text-box h1').css('transition', '0.5s')

        $('.text-box p').css('background', 'white');
        $('.text-box p').css('transition', '0.5s');
    };
});

$('.text-box').on('mouseleave', function() {
    if (showclicked == true) {
        $('.text-box').css('background', '#777');
        $('.text-box').css('color', 'white');
        $('.text-box').css('border-radius', '15px');

        $('.text-box p').css('background', '#777');

        $('.text-box h1').css('background', '#777')
    };
})

$('#about').on('mousemove', function() {
    $('#about').css('padding', '3px');
    $('#about').css('border-radius', '15px');
    $('#about').css('background', 'white');
    $('#about').css('color', '#777');
    $('#about').css('transition', '0.6s');
})

$('#about').on('mouseleave', function() {
    $('#about').css('border-radius', '0px');
    $('#about').css('background', '#777');
    $('#about').css('color', 'white');
    $('#about').css('padding', '0px');
    $('#about').css('transition', '0.6s');
})

$('#contact').on('mousemove', function() {
    $('#contact').css('padding', '3px');
    $('#contact').css('border-radius', '15px');
    $('#contact').css('background', 'white');
    $('#contact').css('color', '#777');
    $('#contact').css('transition', '0.6s');
})

$('#contact').on('mouseleave', function() {
    $('#contact').css('border-radius', '0px');
    $('#contact').css('background', '#777');
    $('#contact').css('color', 'white');
    $('#contact').css('padding', '0px');
    $('#contact').css('transition', '0.6s');
})