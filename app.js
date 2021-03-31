var mainlist = document.getElementById("mainlist"),
    main_buttons = document.getElementById("main_buttons");

main_buttons.onclick = function () {

    "use strict";

    mainlist.classList.toggle("show_list");
    main_buttons.classList.toggle("active");

};

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
        $('.navbar').addClass('affix');
        console.log("OK");
    } else {
        $('.navbar').removeClass('affix');
    }
});