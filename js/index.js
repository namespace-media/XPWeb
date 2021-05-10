var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
let slideIndex = 1;

$(document).ready(function(){
    var slides = $(".slide");
    slides.hide();
    $(slides[slideIndex - 1]).fadeIn();
  });


function nextSlide(n) {
    showSlide(slideIndex += n);
}

function setSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    var i;
    var slides = $(".slide");
    var dots = $(".slideDot");
    if (n > slides.length || n < 1) {
        slideIndex = 1
    }

    $(slides[0]).fadeOut();
    // $(".dot").fadeOut();
    console.log(typeof slides);
    for (i = 0; i < slides.length; i++) {
        console.log(i);
        // $(".slide").hide();
        $(slides[i]).fadeOut();
        // slides[i].classList.add("invisible");
        // slides[i].classList.remove("visible");
    }

    for (i = 0; i < dots.length; i++) {
        $(dots[i]).removeClass( "active" );
    }
        $(dots[slideIndex - 1]).addClass( "active" );
        $(slides[slideIndex - 1]).fadeIn();
}