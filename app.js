

var idlist = document.getElementById("idlist"),
    idbuttons = document.getElementById("idbuttons");
function myFunction(idlist, idbuttons){
    idbuttons.onclick = function () {
        "use strict";
        idlist.classList.toggle("show_list");
        idbuttons.classList.toggle("active");

        return console.log("It works");
    };
}
