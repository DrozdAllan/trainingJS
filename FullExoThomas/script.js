
$(document).ready(function () {




    $(window).scroll(function() {
        if ($(".navbar").offset().top > 40) {
            $('.ttl img').attr('src','file:///C:/Users/Allan/Desktop/WEB/trainingJS/FullExoThomas/oeuflogo2.png');
        } else {
            $('.ttl img').attr('src','Dofus_Logo.png');
        }   
    });







    function Patrick() {
        window.open('https://facebook.com');
    }

    $("#Brouille").mouseover(function () {
        $("#Brouille").removeClass("AnkamaGris");
    })

    $("#Brouille").mouseout(function () {
        $("#Brouille").addClass("AnkamaGris");
    })



















});