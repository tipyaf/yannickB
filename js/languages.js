
/**
 * Created by ya on 15/04/16.
 */
$(document).ready(function(){

    $("#webBtn").click(function(){
        $(".html img,.js img,.php img").addClass("turn");
        $(".languages-explain") .text("texte txte texte azeazaezae azae");
        setTimeout(function(){
            $(".html img,.js img,.php img").toggleClass("turn");
        }, '1000').html("");
    });
    $("#imageBtn").click(function(){

        $(".image img").addClass("turn");
        setTimeout(function(){
            $(".image img").toggleClass("turn");
        }, '1000');
    });
    $("#audioBtn").click(function(){

        $(".audio img").addClass("turn");
        setTimeout(function(){
            $(".audio img").toggleClass("turn");
        }, '1000');
    })
});
