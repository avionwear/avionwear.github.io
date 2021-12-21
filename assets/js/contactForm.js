/*
    Form js Developed on 30/10/2021.
*/
$(document).ready(function() {


    const FORM_NAME = 'CONTACT';

    var form = '',
        desc = 'For any customizations, write to us via the below form';

    form += '<div class="row">'
    form += '<div class="col-lg-12">'
    form += '<h4 class="text-center">'
    form += FORM_NAME
    form += '</h4>'
    form += '<hr class="divider">'
    form += '<p class="text-muted text-center">'
    form += desc
    form += '</p>'
    form += '</div>'
    form += '</div>'

    form += '<div class="row mt-3 justify-content-center">'
    form += '<div class="col-lg-8" id="form">'

    form += '<form onsubmit="return sendEmail(this);">'
    form += '<div class="form-group">'
    form += '<label for="emailInput">Email</label>'
    form += '<input type="email" name="emailInput" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter your email" required>'
    form += '</div>'
    form += '<div class="form-group">'
    form += '<label for="phoneInput">'
    form += 'Mobile Number'
    form += '</label>'
    form += '<input type="text" name="cell" class="form-control" id="phoneInput" placeholder="Enter your contact number" required>'
    form += '</div>'
    form += '<div class="form-group">'
    form += '<label for="subjectInput">'
    form += 'Subject'
    form += '</label>'
    form += '<input type="text" name="subject" class="form-control" id="subjectInput" placeholder="Subject" required>'
    form += '</div>'
    form += '<div class="form-group">'
    form += '<label for="messageTextArea">'
    form += 'Message'
    form += '</label>'
    form += '<textarea class="form-control" name="message" id="messageTextArea" rows="3">'
    form += '</textarea>'
    form += '</div>'
    form += '<button type="submit" name="submit" value="Submit">Submit</button>'
    form += '</form>'

    form += '</div>'
    form += '</div>'


    $('#form').append(form);
});

function sendEmail(form) {
    window.open("mailto:info@ladderminds.com?subject=AvionWear%20" + form.subject.value + "&body=Contact Number: " + form.cell.value + "%0D%0AMessage: %0D%0A" + form.message.value + "%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A");
    return false; /* cancel submit or else page reloads */
}