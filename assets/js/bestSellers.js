/*
    Best Seller js Developed on 16/12/2021.
*/

$(document).ready(function() {

    $.getJSON("/assets/data/products.json",
        function(data) {
            var bestSeller = ''
            var viewMore = '<a href="/product/badges/" target="_blank" rel="noopener">View more<span class="mx-2"><i class="fas fa-arrow-right"></i></span></a>'

            $.each(data, function(key, value) {

                if (value.id < 5) {

                    bestSeller += '<div class="col-lg-3 col-md-6 text-center mt-2">'

                    bestSeller += '<div class="card" style="width: 16rem;">'
                    bestSeller += '<a href="' + value.url + '" >'
                    bestSeller += '<img class="card-img-top" src="'
                    bestSeller += value.imageUrl
                    bestSeller += '" alt="Card image cap">'
                    bestSeller += '</a>'

                    bestSeller += '<div class="card-body">'
                    bestSeller += '<h5>'
                    bestSeller += '<a href="' + value.url + '" >'
                    bestSeller += key
                    bestSeller += '</a>'
                    bestSeller += '</h5>'
                    bestSeller += '<p class="card-text">M.R.P : ₹ <span class=text-decoration text-muted>'
                    bestSeller += value.mrp
                    bestSeller += '</span><strong> '
                    bestSeller += value.price
                    bestSeller += '</strong></p>'
                    bestSeller += '<a href="' + value.buy + '" target="_blank" rel="noopener"><button>Buy</button></a>'
                    bestSeller += '</div>'

                    bestSeller += '</div>'

                    bestSeller += '</div>'

                }
            });

            $('#best-seller').append(bestSeller);
            $('#view-more').append(viewMore);

        });

});