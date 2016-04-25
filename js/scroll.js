
wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       false,       // default
        live:         true        // default
    }
)
new WOW().init();


//no scroll boby when modal opened
$(".md-trigger").on("click", function () {
        $("body").addClass("modal-open");
})
    $('.md-close').on("click", function () {
        $("body").removeClass("modal-open")
});