/**
 * Created by ya on 15/04/16.
 */
$(function () {

    $('.md-trigger').on('click', function() {
        $('.md-modal').addClass('md-show');

    });

    $('.md-close').on('click', function() {
        $('.md-modal').removeClass('md-show');
    });

});
// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('video', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
    playerAna = new YT.Player('ana', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
    playerFada = new YT.Player('fada', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });

}

function onPlayerReady(event) {

    // bind events
    var playButton = document.getElementById("cvVid");
    playButton.addEventListener("click", function() {
        player.playVideo();
    });

    var stopButtonCv = document.getElementById("md-close");
    stopButtonCv.addEventListener("click", function() {
        player.stopVideo();
    });
    var stopButtonMusic = document.getElementById("hobbies-stop");
    stopButtonMusic.addEventListener("click", function() {
        playerAna.stopVideo();
        playerFada.stopVideo();

    });
    var stopButtonMusic = document.getElementById("hobbies-stopVid");
    stopButtonMusic.addEventListener("click", function() {
        playerAna.stopVideo();
        playerFada.stopVideo();

    });


}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
