/* Team js developed on 12/10/2021. */
$(document).ready(function() {
    // team
    $.getJSON("/assets/data/team.json",
        function(data) {

            var team = ''
            var naveenKrishnamoorthy = ''
            var vidyaRavichandran = ''
            var giriPrabhuSeshadri = ''

            $.each(data, function(key, value) {

                team += '<div class="col-lg-6 col-md-6 col-sm-6 mt-2">'
                team += '<img class="img-fluid" src="' + value.image + '"/>'
                team += '</div>'
                team += '<div class="col-lg-6 col-md-6 col-sm-6 mt-2">'
                team += '<a target="_blank" href="' + value.url + '">'
                team += '<h5>' + value.name + '</h5>'
                team += '</a>'
                team += '<h6>' + value.designation + '</h6>'
                team += '<div class="mt-5">' + value.intro + '</div>'
                team += '<a class="btn btn-social" target="_blank" href="'+value.linkedInUrl+'">'
                team += '<i class="fab fa-linkedin-in"></i>'
                team += '</a>'
                team += '</div>'



            });

            $('#team-detail').append(team);

            $('#vidya-ravichandran').append(vidyaRavichandran);
            $('#naveen-krishnamoorthy').append(naveenKrishnamoorthy);
            $('#giri-prabhu-seshadri').append(giriPrabhuSeshadri);


        });
});