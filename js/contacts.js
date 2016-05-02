/**
 * Created by ya on 17/04/16.
 */
var timesMail = 0;
function incrementerMail() {
  timesMail++;
};
var timesPhone = 0;
function incrementerPhone() {
    timesPhone++;
};
    $("#phone").text("07 60 64 93 53");


    var mail = "ya.net@hotmail.fr"
    $("#mail").text(mail);

    $(".copymail").click(function(){
        incrementerMail();
        if (timesMail != 1)
            $('.copyTxtMail').text('Copié'+ ' une ' + timesMail + ' ème fois');
        else
            $('.copyTxtMail').text('Copié'+ ' une ' + timesMail + ' ère fois');
    });

    $(".copyphone").click(function(){
        incrementerPhone();
        if (timesPhone != 1)
        $('.copyTxtPhone').text('Copié'+ ' une ' + timesPhone + ' ème fois');
        else
        $('.copyTxtPhone').text('Copié'+ ' une ' + timesPhone + ' ère fois');

    });

var clipboardPhone = new Clipboard('.copyTxtPhone');
var clipboardMail = new Clipboard('.copyTxtMail');
