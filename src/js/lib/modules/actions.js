import $ from "../core";

$.prototype.html = function(content) {
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

$.prototype.eq = function(i) {
    const swap = this[i];
    const objLength = Object.keys(this).length;

    for (let i = 0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;

    return this;
};

$.prototype.index = function() {
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    const findMyIndex = (item) => {
        return item === this[0];
    }

    return childs.findIndex(findMyIndex);
};

$.prototype.siblings = function() {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;
        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue;
            }

            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }

    this.length = numberOfItems;

    const objLength = Object.keys(this).length;
    for (; numberOfItems < objLength; numberOfItems++) {
        delete this[numberOfItems];
    }

    return this;
};

$.prototype.closest = function(selector) {
    let counter = 0;
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].closest(selector);
        counter++;
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
};

$.prototype.findElement = function(selector) {
    console.log(selector);
    // console.log(el);
    // const tab = document.querySelector('.tab-panel');
    // const tabItems = tab.querySelectorAll('.tab-item');
    // console.log(selector);
    // const tabContent = document.querySelectorAll('.tab-content');
    // tabContent.forEach((content, i) => {
    //     // console.log(content[i].closest('.tab-content--active'));
    //     // if (content)
    //     return content;
    //     // this[i].remove('.tab-content--active')
    //     // console.log(this[i]); 
    //     // if (this[i].closest('.tab-content')) {
    //     //     console.log(content);
    //     // }
    // });
    const findElem = Array.from(selector).find(content => {
        console.log(selector);
        console.log(content);
        // return findElem;
        return content.textContent = '.tab-content--active'
        // console.log(el);
        // if (selector && el) {
        //     // content.remove('tab-content--active')
        //     // console.log(el);
        //     // return content == '.tab-content--active'
        // }

        // return content;
    });

    // console.log(findElem);

    // return findElem;

    // console.log(findElem);
    // let counter = 0;
    // for (let i = 0; i < this.length; i++) {
    //     this[i] = this[i].closest(selector);
    //     counter++;
    // }

    // const objLength = Object.keys(this).length;
    // for (; counter < objLength; counter++) {
    //     delete this[counter];
    // }
    // console.log(this);
    return this;
};