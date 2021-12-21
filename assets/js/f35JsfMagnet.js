/*
    F35-Jsf js Developed on 29/11/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/f35JsfMagnet.json",
        function(data) {

           var product = '',
                details = '',
                slides = '';

            $.each(data, function(key, value) {
                var id = value.id;
                product += '<div class=column>'
                product += '<img class="demo cursor" src="' + value.url + '" style="width:100%" onclick="currentSlide(' + id + ')" alt="The Woods">'
                product += '</div>'
                if (id > 1) {
                    slides += '<div class="mySlides">'
                    slides += '<img src="' + value.url + '" style="width:100%">'
                    slides += '</div>'
                    slides += '<a class="prev" onclick="plusSlides(-1)">❮</a>'
                    slides += '<a class="next" onclick="plusSlides(1)">❯</a>'
                }

            });

            details += data[0].desc
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


        });

});