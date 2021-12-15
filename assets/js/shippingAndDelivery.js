/*
    Shipping and Delivery js Developed on 14/12/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/shippingAndDelivery.json",
        function(data) {
        $('#details').append(data[0].desc);
        });
});