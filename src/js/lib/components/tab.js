import $ from '../core';

$.prototype.tab = function() {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on('click', () => {
            const tab = document.querySelector('.tab');
            const tabContent = tab.querySelectorAll('.tab-content');
            console.log(tabContent);
            $(this[i])
                .siblings()
                .removeClass('tab-item--active')
                .closest('.tab')
                .findElement('.tab-content', 'tab-content--active', $(this[i]).index())
        });

    }
};

$('[data-tabpanel] .tab-item').tab();