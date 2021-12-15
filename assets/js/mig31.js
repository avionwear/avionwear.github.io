/*
    Mig31 js Developed on 29/11/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/mig31.json",
        function(data) {

            var mig31 = '',
                description = '',
                details = '';

            $.each(data, function(key, value) {

                mig31 += '<div class="zoom-box mt-2" id="' + value.id + '">'
                mig31 += '<img class="zoom-img" src="' + value.url + '" alt="MIG-31" width="300" height="150" />'
                mig31 += '</div>'


            });
            description += data[0].desc

            details += '<h5>About this item</h5>'
            details += '<p><br></p>'

            // details += '<p><strong>Product : </strong>Mig 31 </p>'
            details += '<p><strong>Size : </strong>' + data[0].productDimensions + '</p>'
            details += '<p><strong>Material : </strong>' + data[0].material + '</p>'
            details += '<p><strong>Available : </strong>' + data[0].available + '</p>'
            details += '<p><strong>Manufacturer : </strong>' + data[0].manufacturer + ' </p>'
            details += '<p><strong>Country Of Origin : </strong>' + data[0].countryOfOrigin + '</p>'
            details += '<p>M.R.P. : ₹ <span class="text-muted text-decoration">'
            details += data[0].mrp
            details += '</span><strong> '
            details += data[0].price
            details += '</strong></p>'

            // details += '<p>M.R.P. : <span class="text-muted text-decoration"> ₹.'+data[0].mrp+'</span></p>'
            // details += '<p>Price : ₹.<strong>'+data[0].price+'</strong></p>'
            // details += '<p>You save :<strong> ₹.'+(data[0].mrp-data[0].price)+'('+(data[0].mrp-data[0].price)/100+'%)</strong> </p>'
            details += '<a href="' + data[0].buy + '" target="_blank" rel="noopener"><button>Buy</button></a>'


            $('#mig31-catogary').append(mig31);
            $('#mig31-details').append(details);
            $('#description').append(description);




        });

});