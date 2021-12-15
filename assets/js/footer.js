/*
    footer js developed on 12/10/2021.

    */
$(document).ready(function() {

    // footer
    $.getJSON("/assets/data/footer.json",
        function(data) {
            var footer = ''

            footer += '<div class="col-lg-3 col-md-12 col-sm-12 mt-3" >'
            footer += '<img class="img-fluid" src="' + data[0].logoUrl + '" alt="AvionWear logo">'
            footer += '<div class="mt-3 text-center">'
            footer += '<a class="btn btn-social" rel="noopener" target="_blank" href="' + data[0].fbUrl + '">'
            footer += '<i class="fab fa-facebook-f"></i>'
            footer += '</a>'
            footer += '<a class="btn btn-social" rel="noopener" target="_blank" href="' + data[0].instaUrl + '">'
            footer += '<i class="fab fa-instagram"></i>'
            footer += '</a>'
            footer += '<a class="btn btn-social" rel="noopener" target="_blank" href="' + data[0].linkedInUrl + '">'
            footer += '<i class="fab fa-linkedin-in"></i>'
            footer += '</a>'
            footer += '<a class="btn btn-social" rel="noopener" target="_blank" href="' + data[0].twitterUrl + '">'
            footer += '<i class="fab fa-twitter"></i>'
            footer += '</a>'
            footer += '</div>'
            footer += '<div class="mt-3 text-center text-muted">'
            footer += 'Copyright ©2018 -' + data[0].currentYear + ''
            footer += '</div>'
            footer += '</div>'

            footer += '<div class="col-lg-2 col-md-12 col-sm-12 mt-3" >'
            footer += '<h6>'
            footer += data[0].aboutUs
            footer += '</h6>'
            footer += '<br>'
            footer += '<div class="text-muted">'
            footer += '<a href=' + data[0].aboutUsUrl + '>'
            footer += data[0].aboutUs
            footer += '</a>'
            footer += '</div>'
            footer += '<div class="text-muted">'
            footer += '<a href=' + data[0].ourMaterialUrl + '>'
            footer += data[0].ourMaterial
            footer += '</a>'
            footer += '</div>'
            footer += '<div class="text-muted">'
            footer += '<a href=' + data[0].stockistsUrl + '>'
            footer += data[0].stockists
            footer += '</a>'
            footer += '</div>'
            // footer += '<div class="text-muted">'
            // footer += '<a href=' + data[0].partnershipWithResQUrl + '>'
            // footer += data[0].partnershipWithResQ
            // footer += '</a>'
            // footer += '</div>'
            // footer += '<div class="text-muted">'
            // footer += '<a href=' + data[0].pressUrl + '>'
            // footer += data[0].press
            // footer += '</a>'
            // footer += '</div>'
            // footer += '<div class="text-muted">'
            // footer += '<a href=' + data[0].notesUrl + '>'
            // footer += data[0].notes
            // footer += '</a>'
            // footer += '</div>'
            footer += '<div class="text-muted">'
            footer += '<a href=' + data[0].customiseUrl + '>'
            footer += data[0].customise
            footer += '</a>'
            footer += '</div>'
            footer += '<div class="text-muted">'
            footer += '<a href=' + data[0].corporateGiftingUrl + '>'
            footer += data[0].corporateGifting
            footer += '</a>'
            footer += '</div>'
            footer += '</div>'

            footer += '<div class="col-lg-2 col-md-12 col-sm-12 mt-3">'
            footer += '<h6>'
            footer += data[0].customerCare
            footer += '</h6>'
            footer += '<br>'
            footer += '<div class="text-muted">'
            footer += '<a href=' + data[0].shippingAndDeliveryUrl + '>'
            footer += data[0].shippingAndDelivery
            footer += '</a>'
            footer += '</div>'
            footer += '<div class="text-muted">'
            footer += '<a href=' + data[0].returnsAndCancellationUrl + '>'
            footer += data[0].returnsAndCancellation
            footer += '</a>'
            footer += '</div>'
            // footer += '<div class="text-muted">'
            // footer += '<a href=' + data[0].warrantyUrl + '>'
            // footer += data[0].warranty
            // footer += '</a>'
            // footer += '</div>'
            footer += '<div class="text-muted">'
            footer += '<a href=' + data[0].privacyPolicy + '>'
            footer += 'Privacy Policy'
            footer += '</a>'
            footer += '</div>'
            footer += '<div class="text-muted">'
            footer += '<a href=' + data[0].termsOfUse + '>'
            footer += 'Terms of Service'
            footer += '</a>'
            footer += '</div>'
            footer += '<div class="text-muted">'
            footer += '<a href=' + data[0].covid19 + '>'
            footer += 'Covid-19 Information'
            footer += '</a>'
            footer += '</div>'
            footer += '<div class="text-muted">'
            footer += '<a href=' + data[0].contactUrl + '>'
            footer += data[0].contact
            footer += '</a>'
            footer += '</div>'
            footer += '<div class="text-muted">'
            footer += '<a href=' + data[0].faqsUrl + '>'
            footer += data[0].faqs
            footer += '</a>'
            footer += '</div>'
            // footer += '<div class="text-muted">'
            // footer += '<a href=' + data[0].becomeAnAffiliateUrl + '>'
            // footer += data[0].becomeAnAffiliate
            // footer += '</a>'
            // footer += '</div>'
            footer += '</div>'

            footer += '<div class="col-lg-5 col-md-12 col-sm-12 mt-3">'
            footer += '<h6>'
            footer += data[0].corporateGifting
            footer += '</h6>'
            footer += '<br>'
            footer += '<p class="text-muted">'
            footer += data[0].desc
            footer += '</p>'
            footer += '</div>'

            $('#footer-content').append(footer);
        });

});
// role="list" aria-expanded="true"