
$(document).ready(function () {





    $(window).scroll(function () {
        //console.log($(window).scrollTop())
        if ($(window).scrollTop() > 121) {
            $('.navbar').addClass('sticky-top');
            $('.ttl img').attr('src', 'file:///C:/Users/Allan/Desktop/WEB/trainingJS/FullExoThomas/oeuflogo2.png');
        }
        if ($(window).scrollTop() < 122) {
            $('.navbar').removeClass('sticky-top');
            $('.ttl img').attr('src', 'Dofus_Logo.png');

        }
    });

    $(".fb").click(function () {
        window.open('https://facebook.com');
    });

    $("#Brouille").mouseover(function () {
        $("#Brouille").removeClass("AnkamaGris");
    });

    $("#Brouille").mouseout(function () {
        $("#Brouille").addClass("AnkamaGris");
    });



    $('#valide').click(function () {


        if (Compte.value == false) {
            alert('Vous devez entrer un nom de compte');
        }
        if (Mdp.value == false) {
            alert('Vous devez entrer un mot de passe');
        }
        if (ConfirmMdp.value != Mdp.value) {
            alert('Il y a une erreur dans la confirmation  du mot de passe');
        }
        if (Mail.value == false) {
            alert('Vous devez entrer un mail valide');
        }
        if (Jour.value == false || Mois.value == false || Année.value == false) {
            alert('Vous devez entrer une date de naissance complète');
        }

        else {
            console.log("Nom de Compte "+Compte.value);
            console.log("Mdp "+Mdp.value);
           
            console.log("Mail "+Mail.value);
            console.log("Date de naissance "+Jour.value+"/"+Mois.value+"/"+Année.value);

            if ($("#Newsletter").is(':checked')) {
                console.log('Newsletter On');
            }
            else {
                console.log('Newsletter Off');
            }
        }

    });








});