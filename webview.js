"use strict";

module.exports = (Franz) => {
    function getTasks() {

        let incompleteCount = 0;

        const countEls = document.querySelectorAll('li.AppSidebarListsItems__itemContainer .AppSidebarCount:not([hidden]) > .AppSidebarCount__text');

        if (countEls.length) {
            Array.from(countEls).forEach((el) => {
                incompleteCount += parseInt(el.innerHTML, 10);
            });
        }

        Franz.setBadge(incompleteCount);
    }

    Franz.loop(getTasks);
};
