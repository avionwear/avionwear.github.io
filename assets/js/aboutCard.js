/*
    About Card js Developed on 30/10/2021.
*/
$(document).ready(function() {

    $.getJSON("/assets/data/aboutCard.json",
        function(data) {
            var about = ''

            $.each(data, function(key, value) {

                about += '<div class="col-lg-6 col-md-6">'
                about += '<div class="mt-5 shadow p-3 mb-5 bg-body rounded zoom">'
                about += '<div class="text-center">'

                about += '<div class="hover-fx">'
                if (value.id === 1) {
                    about += '<i class="fas fa-plane text-primary"></i>'
                } else {
                    about += '<i class="fas fa-magnet text-primary"></i>'
                }
                about += '</div>'
                about += '</div>'
                about += '<a href="'+value.url+'">'
                about += '<h6 class="mb-2 text-center">'
                about += value.name
                about += '</h6>'
                about += '</a>'
                about += '<hr>'
                // about += '<ul style="list-style-type:circle">'
                about += '<p class="text-muted mb-0">'
                about += value.desc
                about += '</p>'
                about += '<br>'
                if (value.id === 1) {
                    about += '<p class="text-center"><a href="/product/badges/" target="_blank" rel="noopener"><button>Shop Now</button></a></p>'
                }
                else{
                    about += '<p class="text-center"><a href="/product/magnets/" target="_blank" rel="noopener"><button>Shop Now</button></a></p>'
                }
                // about += '</ul>'
                about += '</div>'
                about += '</div>'

            });

            $('#card-about').append(about);
        });

});