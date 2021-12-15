/*
    Returns and Cancellation js Developed on 14/12/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/returnsAndCancellation.json",
        function(data) {
        $('#details').append(data[0].desc);
        });
});