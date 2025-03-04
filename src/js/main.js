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

$('#trigger').click(() => {
    $('#trigger').createModal({
        text: {
            title: 'Modal title',
            body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem odit quod hic, sunt distinctio culpa veniam consequuntur itaque officiis sapiente quis ipsam nulla dolorum mollitia! Fugiat dolorum suscipit voluptatibus quasi.Nemo, aut unde. Pariatur odit amet rem totam suscipit quae esse doloribus laudantium. Quasi voluptatibus harum consequuntur explicabo dolor tempora odio est. Molestias, laboriosam porro harum facilis perspiciatis iste voluptatum.' 
        },
        btns: {
            count: 3,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-success'],
                    false,
                    () => {
                        alert('Данные сохранены');
                    }
                ],
                [
                    'Another btn',
                    ['btn-warning', 'ml-10'],
                    false,
                    () => {
                        alert('Zaebis');
                    }
                ]
            ]
        }
    });
});