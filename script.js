var burger = document.getElementById("burger-button");

function close_menu() {
    document.body.classList.toggle("open");
    burger.classList.toggle("open");
}
/*
classList property returns the class name(s) of an element. It's read-only, but to modify use add() remove() and toggle() methods.
*/



burger.addEventListener("click", function (e) {  /*  event handler 'click' is attached to the "burger-button" element  */
    e.preventDefault();   /*  the default action of the event will not be triggered when buger clicked */
    close_menu();   /*  then toggle the 'open' class, which closes the menu */
});

/*  Use the element.removeEventListener() method remove the 'click' event handlers from "burger-menu" in a more sophisticated design - Good practice  */




/***************************  SMOOTH SCROLL **************************/

// http://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2/


$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );   /* assign to 'target' the attributes of the anchor clicked */

    if( target.length ) {   /*  if target length isnt zero */
        event.preventDefault();
        $('html, body').animate({   
            scrollTop: target.offset().top
        }, 1000);
        /* animate the body using scrollTop, to the href attribute of the anchor clicked, for 1 second duration */
    }

});