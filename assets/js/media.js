/* Media js developed on 12/10/2021. */
$(document).ready(function() {
    // media
    $.getJSON("/assets/data/media.json",
        function(data) {
            var media = ''

            $.each(data, function(key, value) {

                media += '<div class="col-lg-12 col-md-12 col-sm-12 mb-3">'
                // media += '<a class="portfolio-box" href="' + value.fullSize + '">'
                media += '<img class="img-fluid" src="' + value.image + '"/>'
                // media += '</a>'
                media += '</div>'

            });

            $('#media').append(media);
        });

    // featured in
    $.getJSON("/assets/data/featuredIn.json",
        function(data) {
            var featured = ''

            $.each(data, function(key, value) {

                featured += '<div class="col-lg-6 col-md-6 col-sm-6">'
                featured += '<img class="img-fluid" src="' + value.image + '"/>'
                featured += '</div>'

            });

            $('#featured-in').append(featured);
        });
});