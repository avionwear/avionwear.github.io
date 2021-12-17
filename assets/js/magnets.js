/*
    @author R.Gopalakrishnan
    Product json Developed on 26/10/2021.
    Reverse order in Json updated on 17/12/2021.
*/

$(document).ready(function() {

    $.getJSON("/assets/data/magnets.json",
        function(data) {

            var indexProductList = ''
            var descendingOrderData = Object.keys(data)


            for (var i = descendingOrderData.length - 1; i >= 0; i--) {

                indexProductList += '<div class="col-lg-4 col-md-6 text-center mt-2">'

                indexProductList += '<div class="card" style="width: 20rem;">'
                indexProductList += '<a href="' + data[descendingOrderData[i]].url + '" >'
                indexProductList += '<img class="card-img-top" src="'
                indexProductList += data[descendingOrderData[i]].imageUrl
                indexProductList += '" alt="Card image cap">'
                indexProductList += '</a>'

                indexProductList += '<div class="card-body">'
                indexProductList += '<h5>'
                indexProductList += '<a href="' + data[descendingOrderData[i]].url + '" >'
                indexProductList += data[descendingOrderData[i]].name
                indexProductList += '</a>'
                indexProductList += '</h5>'
                indexProductList += '<p class="card-text">M.R.P : ₹ <span class=text-decoration text-muted>'
                indexProductList += data[descendingOrderData[i]].mrp
                indexProductList += '</span><strong> '
                indexProductList += data[descendingOrderData[i]].price
                indexProductList += '</strong></p>'
                indexProductList += '<a href="' + data[descendingOrderData[i]].buy + '" target="_blank" rel="noopener"><button>Buy</button></a>'
                indexProductList += '</div>'

                indexProductList += '</div>'

                indexProductList += '</div>'



            }


            $('#products-list').append(indexProductList);
        });

});