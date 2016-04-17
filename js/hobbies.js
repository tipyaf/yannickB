/**
 * Created by ya on 17/04/16.
 */
$(".hobbies-projects").hide();
$(".icon-content:first-child").click(function(){
    //$(".hobbies-projects").addClass("animated fadeInLeft");
    $(".video-project").slideUp(1000);
    $(".hobbies-projects").slideToggle(1000);
});

$(".video-project").hide();
$(".icon-content:last-child").click(function(){
    //$(".video-project").addClass("animated fadeInRight");
    $(".hobbies-projects").slideUp(1000);
    $(".video-project").slideToggle(1000);
});