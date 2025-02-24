import './lib/lib';

// $('.active').on('click', sayHello);

// function sayHello() {
//     console.log('Hello');
// }

// $('button').on('click', function() {
//     // $(this).toggleClass('active');
//     $('div').eq(2).toggleClass('active');
// });

// $('div').click(function() {
//     console.log($(this).index());
// });

// console.log($('div').eq(2).find('.some'));

// console.log($('button').html(''));

// console.log($('.some').closest('.findme'));
// console.log($('.more').eq(0).siblings());

// $('.findme').fadeOut(1800);

// $('#first').on('click', () => {
//     $('div').eq(1).fadeOut(800);
// });

// $('[data-count="second"]').on('click', () => {
//     $('div').eq(2).fadeOut(800);
// });

// $('button').eq(2).on('click', () => {
//     $('.w-500').fadeOut(800);
// });

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});