/**
 * Created by ya on 17/04/16.
 */
//init hide on load
$(".hobbies-projects").hide() // music hidden
$(".sport-project").hide(); // sport hidden
$(".nature-project").hide(); // nature hidden
$(".video-project").hide(); //video hidden;



$(".icon-content:first-child").click(function(){
    $(".video-project").slideUp(1000); //video hidden;
    $(".sport-project").slideUp(1000); // sport hidden
    $(".nature-project").slideUp(1000); // nature hidden
    $(".hobbies-projects").slideToggle(1000);
});
$(".icon-content:nth-child(2)").click(function(){
    $(".video-project").slideUp(1000);
    $(".nature-project").slideUp(1000); // nature hidden
    $(".hobbies-projects").slideUp(1000); // nature hidden
    $(".sport-project").slideToggle(1000);
    $(".sport-project").addClass("animated bounceInRight");
});
$(".icon-content:nth-child(3)").click(function(){
    $(".video-project").slideUp(1000);
    $(".sport-project").slideUp(1000); // nature hidden
    $(".hobbies-projects").slideUp(1000); // nature hidden
    $(".nature-project").slideToggle(1000);
    $(".nature-project").addClass("animated slideInUp");
});
$(".icon-content:last-child").click(function() {
    $(".nature-project").slideUp(1000);
    $(".sport-project").slideUp(1000); // nature hidden
    $(".hobbies-projects").slideUp(1000); // nature hidden
    $(".video-project").slideToggle(1000);
});