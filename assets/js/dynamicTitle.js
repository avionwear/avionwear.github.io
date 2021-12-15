/*************************************************
    @author R.Gopalakrishnan
    Developed on 07/Dec/2021

    Dynamic title for APP

 **************************************************/

const TITLE_NAME = "- AvionWear";

var expression = window.location.pathname;
expression = expression.replace(/\//g, "");

switch (expression) {

    case 'home':
        var title = 'Home' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'about':
        var title = 'About' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'productbadges':
        var title = 'Badges' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'productmagnets':
        var title = 'Magnets' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'contact':
        var title = 'Contact' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'tornado':
        var title = 'Tornado' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'f4-phantom':
        var title = 'F4-Phantom' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'f16-fighting-falgon':
        var title = 'F16 Fighting Falgon' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'sea-harrier':
        var title = 'Sea Harrier' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'dassault-mirage':
        var title = 'Dassault Mirage' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'f22-raptor':
        var title = 'F22 Raptor' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'c17-globe-master':
        var title = 'C17 Globe Master' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'f15-strike-eagle':
        var title = 'F15 Strike Eagle' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'f35-jsf':
        var title = 'F35-jsf' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'f-5e-tiger-II':
        var title = 'F-5E-Tiger II' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'mig-31':
        var title = 'MIG 31' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'tu-128':
        var title = 'Tu-128' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'shipping-and-delivery':
        var title = 'Shipping and Delivery' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'returns-and-cancellation':
        var title = 'Returns and Cancellation' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'faqs':
        var title = 'FAQs' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'privacy-policy':
        var title = 'Privacy Policy' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'terms-of-use':
        var title = 'Terms of Use' + TITLE_NAME;
        documentTitle(title);
        break;

    case 'covid-19':
        var title = 'Covid 19 Information' + TITLE_NAME;
        documentTitle(title);
        break;


    default:
        var title = 'AvionWear';
        documentTitle(title);

}


function documentTitle(title) {
    document.title = title;
}