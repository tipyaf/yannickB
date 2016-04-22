
$(document).ready(function(){

    $("#toggle").click(function() {
        $(this).toggleClass("on");
        $("#menu").slideToggle();
        $("#menu").toggleClass("animated fadeInRight");
    });

});

$(document).ready(function() {
    $('.toAcceuil,.toProjects, .toCv, .toHobbies, .toContacts').on('click', function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 2100; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });
});