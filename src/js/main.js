import './lib/lib';

// $('.active').on('click', sayHello);

// function sayHello() {
//     console.log('Hello');
// }

$('button').on('click', function() {
    $(this).toggleClass('active');
});