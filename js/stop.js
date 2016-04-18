/**
 * Created by yannickbenchimol on 18/04/2016.
 */
// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)

    //cv video
    player = new YT.Player('video', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
    //analistik video
    playerAna = new YT.Player('ana', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
    //coup de coeur video (add id + ?enablejsapi=1 to html src)
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
    var stopButtonHobbies = document.getElementById("hobbies-icons");
    stopButtonHobbies.addEventListener("click", function() {
        playerAna.stopVideo();
        playerFada.stopVideo();

    });
    var stopButtonVideo = document.getElementById("hobbies-stopVid");
    stopButtonVideo.addEventListener("click", function() {
        playerAna.stopVideo();
        playerFada.stopVideo();

    });
//volume sound
    //event.target.setVolume(0);
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


//soundcloud stop on close (add 'nyt' id to iframe html)

$(function(){

    var iframeElement   = document.querySelector('iframe');
    var iframeElementID = iframeElement.id;
    var widget1         = SC.Widget("nyt");





    $("#hobbies-icons").click(function() {
        widget1.pause()
    });

    //prepare to volume
   // widget1.setVolume(0.1);

});
