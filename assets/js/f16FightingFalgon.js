/*
    F16 Fighting Falgon js Developed on 29/11/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/f16FightingFalgon.json",
        function(data) {

            var f16 = '',
             description = '',
                details = '';

            $.each(data, function(key, value) {

                f16 += '<div class="zoom-box mt-2" id="' + value.id + '">'
                f16 += '<img class="zoom-img" src="' + value.url + '" alt="F16 Fighting Falgon" width="300" height="150" />'
                f16 += '</div>'


            });

            description += data[0].desc


            details += '<h5>About this item</h5>'
            details += '<p><br></p>'
           // details += '<p><strong>Product : </strong>F16 Fighting Falgon</p>'
            details += '<p><strong>Size : </strong>'+data[0].productDimensions+'</p>'
            details += '<p><strong>Material : </strong>' + data[0].material + '</p>'
            details += '<p><strong>Available : </strong>'+data[0].available+'</p>'
            details += '<p><strong>Manufacturer : </strong>'+data[0].manufacturer+' </p>'
            details += '<p><strong>Country Of Origin : </strong>'+data[0].countryOfOrigin+'</p>'
            details += '<p>M.R.P. : ₹ <span class="text-muted text-decoration">'
            details += data[0].mrp
            details += '</span><strong> '
            details += data[0].price
            details += '</strong></p>'
            //  details += '<p>M.R.P. : <span class="text-muted text-decoration"> ₹.'+data[0].mrp+'</span></p>'
            // details += '<p>Price : ₹.<strong>'+data[0].price+'</strong></p>'
            // details += '<p>You save :<strong> ₹.'+(data[0].mrp-data[0].price)+'('+(data[0].mrp-data[0].price)/100+'%)</strong> </p>'
            details += '<a href="'+data[0].buy+'" target="_blank" rel="noopener"><button>Buy</button></a>'

            $('#f16-catogary').append(f16);
            $('#f16-details').append(details);
             $('#description').append(description);



        });

});