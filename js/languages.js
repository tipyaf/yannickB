/**
 * Created by ya on 15/04/16.
 */
$(document).ready(function(){
    $("#webBtn").click(function(){

        $(".html img,.js img,.php img").css({backgroundColor: 'blue'});
        setTimeout(function(){
            $(".html img,.js img,.php img").css({backgroundColor: 'white'})
        }, '1000');
    });
    $("#imageBtn").click(function(){

        $(".image").css({backgroundColor: 'white'});
        setTimeout(function(){
            $(".image").css({backgroundColor: '#F05F40'})
        }, '1000');
    });
    $("#audioBtn").click(function(){

        $(".audio").css({backgroundColor: 'white'});
        setTimeout(function(){
            $(".audio").css({backgroundColor: '#F05F40'})
        }, '1000');
    })
});
