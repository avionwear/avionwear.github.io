/* Gallery js developed on 12/10/2021. */
$(document).ready(function() {
    // gallery
    $.getJSON("/assets/data/gallery.json",
        function(data) {
            var gallery = ''

            $.each(data, function(key, value) {

 			    gallery += '<div class="col-lg-4 col-md-6 col-sm-6 mb-3">'
                // gallery += '<a class="portfolio-box" href="' + value.fullSize + '">'
                gallery += '<img class="img-fluid" src="' + value.thumbnails + '"/>'
                // gallery += '</a>'
                gallery += '</div>'

            });

            $('#gallery').append(gallery);
        });
});