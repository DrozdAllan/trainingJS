
$(document).ready(function () {





    $(window).scroll(function () {
       // console.log($(window).scrollTop())
        if ($(window).scrollTop() > 99) {
            $('.navbar').addClass('sticky-top');
            $('.navbar-brand img').attr('src', 'oeuflogo2.png');
            $('.navmid').css("width", "50px");
            $('.navbar-brand img').addClass('ttl');
            $('.triangle').css('display', 'none');
           
        }
        if ($(window).scrollTop() < 99) {
            $('.navbar').removeClass('sticky-top');
            $('.navbar-brand img').attr('src', 'Dofus_Logo.png');
            $('.navmid').css("width", "160px");
            $('.navbar-brand img').removeClass('ttl');
            $('.triangle').css('display', 'initial');
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

    $(".nav-item").mouseover(function () {
        var a = ($(this).index());
    $(".nav-item .roulant").eq(a).text("accessible_forward");
    });

    $(".nav-item").mouseleave(function() {
        var a = ($(this).index());
    $(".nav-item .roulant").eq(a).text("accessible");
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