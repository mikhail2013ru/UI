import './lib/lib';

// $('.active').on('click', sayHello);

// function sayHello() {
//     console.log('Hello');
// }

$('button').on('click', function() {
    // $(this).toggleClass('active');
    $('div').eq(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));

// console.log($('button').html(''));

// console.log($('.some').closest('.findme'));
console.log($('.more').eq(0).siblings());