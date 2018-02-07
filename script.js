/* Hamburger Menu */
var burger = document.getElementById("burger-button");
function close_menu() {
    document.body.classList.toggle("open");
    burger.classList.toggle("open");
}

burger.addEventListener("click", function (e) { 
    e.preventDefault();  
    close_menu();   
});

/* Smooth Scroll */
// http://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2/
$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') ); 
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({   
            scrollTop: target.offset().top
        }, 1000);
    }
});