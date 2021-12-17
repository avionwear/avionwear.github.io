/*
    Tornnado js Developed on 29/11/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/tornnado.json",
        function(data) {

            var product = '',
                description = '',
                details = '',
                slides = '';

            $.each(data, function(key, value) {
                var id = value.id;
                product += '<img class="demo cursor" src="' + value.url + '" style="width:100%" onclick="currentSlide(' + id + ')" alt="The Woods">'
                if (id > 1) {
                    slides += '<div class="mySlides">'
                    slides += '<div class="numbertext">' + id + '</div>'
                    slides += '<img src="' + value.url + '" style="width:100%">'
                    slides += '</div>'
                    slides += '<a class="prev" onclick="plusSlides(-1)">❮</a>'
                    slides += '<a class="next" onclick="plusSlides(1)">❯</a>'
                }
            });


            description += data[0].desc

            details += '<h5 class="mt-3">About this item</h5>'
            details += '<br/>'

            details += '<p><strong>Size : </strong>' + data[0].productDimensions + '</p>'
            details += '<p><strong>Material : </strong>' + data[0].material + '</p>'
            details += '<p><strong>Manufacturer : </strong>' + data[0].manufacturer + ' </p>'
            details += '<p><strong>Country Of Origin : </strong>' + data[0].countryOfOrigin + '</p>'
            details += '<p>M.R.P. : ₹ <span class="text-muted text-decoration">'
            details += data[0].mrp
            details += '</span><strong> '
            details += data[0].price
            details += '</strong></p>'
            details += '<a href="' + data[0].buy + '" target="_blank" rel="noopener" ><button>Buy</button></a>'


            $('#product').append(product);
            $('#slides').append(slides);
            $('#product-details').append(details);
            $('#description').append(description);

        });

});