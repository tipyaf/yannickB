/**
 * Created by ya on 17/04/16.
 */

    $("#phone").text("07 60 64 93 53");


    var mail = "ya.net@hotmail.fr"
    $("#mail").text(mail);

    $(".copymail").click(function(){
        $('.copyTxtMail').text('Copiée');
    });

    $(".copyphone").click(function(){
    $('.copyTxtPhone').text('Copié');
    });

var clipboardPhone = new Clipboard('.copyTxtPhone');
var clipboardMail = new Clipboard('.copyTxtMail');
