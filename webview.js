"use strict";

module.exports = (Franz) => {
    function getTasks() {

        let incompleteCount = 0;

        const countEls = document.querySelectorAll('li.AppSidebarGroupsItems__item .AppSidebarGroupsItems__item__link[href^="/tasks/lists/"] .AppSidebarCount:not([hidden]) > .AppSidebarCount__text');

        if (countEls.length) {
            Array.from(countEls).forEach((el) => {
                incompleteCount += parseInt(el.innerHTML, 10);
            });
        }

        Franz.setBadge(incompleteCount);
    }

    Franz.loop(getTasks);
};
