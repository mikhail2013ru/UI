import $ from '../core';

$.prototype.tab = function() {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on('click', () => {
            const tab = document.querySelector('.tab');
            const tabContent = tab.querySelectorAll('.tab-content--active');
            console.log(tabContent);
            $(this[i])
                .addClass('tab-item--active')
                .siblings()
                .removeClass('tab-item--active')
                .closest('.tab')
                // .findElement(tabContent, 'tab-content--active')
                .findElement(tabContent)
                .eq($(this[i]).index())
                .addClass('tab-content--active')
                // if (this[i].closest('.tab')) {
                //     console.log(tabContent)
                //     // tabContent.find('tab-content--active')

                //     // this[i].classList.remove('tab-content--active')
                //     const tabC = [...tabContent];
                //     // console.log(tabC);
                //     // let a = tabC.find((elem) => {
                //     //     elem.remove('tab-content--active')
                //     //     console.log(elem);
                //     //     return elem
                //     //     // console.log(elem)
                //     // })

                //     // console.log(a);
                // }
                
                // .find('.tab-content')
                // let tab = this[i].closest('.tab-item')
                // let tabArr = [...tab.children];

                // let res = tabArr.find(function(item) {
                //     // console.log(item);
                //     return item
                // })

                // console.log(tab);
                // let tab = this[i].closest('.tab');
                // let tabArr = [...tab.children]
                // console.log(tabArr.find('.tab-content'));
                // console.log([...tab.children].find('.tab-content'));
                // const user = ['T', 'M', 'Y'];
                // console.log([...user]);
                // let arr = this[i].closest('.tab');
                // console.log(...arr.find('.tab-content'));
                // $(this[i]) 
                //     .eq($(this[i]).index())
                //     .addClass('tab-content--active')
        });

    }
};

$('[data-tabpanel] .tab-item').tab();