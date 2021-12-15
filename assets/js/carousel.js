/*
    Carousel json Developed on 28/11/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/carousel.json",
        function(data) {
            var carousel = ''

            carousel += '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">'
            carousel += '<div class="carousel-inner">'
            carousel += '<div class="carousel-item active">'
            carousel += '<img class="d-block w-100" src="' + data[0].image + '" alt="' + data[0].alt + '">'
            carousel += '<div class="carousel-caption d-none d-md-block">'
            carousel += '<h3>F4 Phantom</h3>'
            carousel += '<p><a href="#" ><button>Buy</button></a></p>'
            carousel += '</div>'
            carousel += '</div>'


            $.each(data, function(key, value) {
                if (value.id > 1) {
                    carousel += '<div class="carousel-item">'
                    carousel += '<img class="d-block w-100" src="' + value.image + '" alt="' + value.alt + '">'
                    carousel += '</div>'
                }

            });

            carousel += '<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">'
            carousel += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
            carousel += '<span class="sr-only">Previous</span>'
            carousel += '</a>'
            carousel += '<a class = "carousel-control-next" href = "#carouselExampleControls" role = "button" data-slide = "next" >'
            carousel += '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
            carousel += '<span class = "sr-only" > Next < /span>'
            carousel += '</a>'
            carousel += '</div>'
            carousel += '</div>'

            $('#carousel').append(carousel);
        });

});