/*
    FAQ js Developed on 14/12/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/faqs.json",
        function(data) {
            $.each(data, function(key, value) {
                $('#details').append(value.faq);
            });
        });
});