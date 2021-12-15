/*
    Menu json append to All HTML pages.
    Developed on 12/10/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/menu.json",
        function(data) {
            var menu = ''

            $.each(data, function(key, value) {
                menu += '<li class="nav-item">'
                menu += '<a class="nav-link js-scroll-trigger" href="' + value.url + '">'
                menu += value.menuName
                menu += '</a>'
                menu += '</li>'
            });

            $('#nav-menu').append(menu);
        });

});