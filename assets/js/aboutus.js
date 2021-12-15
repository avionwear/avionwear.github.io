/*
    About Us json Developed on 26/10/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/aboutus.json",
        function(data) {
            var about = ''

            $.each(data, function(key, value) {
                if (value.id === 3) {
                    about += '<p>'
                    about += value.content
                    about += '</p>'
                } else {
                    about += '<p class="mb-4">'
                    about += value.content
                    about += '</p>'
                }
            });

            $('#about-us').append(about);
        });

});