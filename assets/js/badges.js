/*
    @author R.Gopalakrishnan
    Product json Developed on 26/10/2021.
*/

$(document).ready(function() {

    $.getJSON("/assets/data/badges.json",
        function(data) {

            var indexProductList = ''
            let tornnado = ''

            $.each(data, function(key, value) {

                indexProductList += '<div class="col-lg-4 col-md-6 text-center mt-2">'

                indexProductList += '<div class="card" style="width: 20rem;">'
                indexProductList += '<a href="' + value.url + '">'
                indexProductList += '<img class="card-img-top" src="'
                indexProductList += value.imageUrl
                indexProductList += '" alt="Card image cap">'
                indexProductList += '</a>'

                indexProductList += '<div class="card-body">'
                indexProductList += '<h5>'
                indexProductList += '<a href="' + value.url + '" >'
                indexProductList += key
                indexProductList += '</a>'
                indexProductList += '</h5>'
                indexProductList += '<p class="card-text">M.R.P : ₹ <span class=text-decoration text-muted>'
                indexProductList += value.mrp
                indexProductList += '</span><strong> '
                indexProductList += value.price
                indexProductList += '</strong></p>'
                indexProductList += '<a href="' + value.buy + '" target="_blank" rel="noopener"><button>Buy</button></a>'
                indexProductList += '</div>'

                indexProductList += '</div>'

                indexProductList += '</div>'

            });


            $('#products-list').append(indexProductList);
        });

});