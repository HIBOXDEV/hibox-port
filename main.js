var typed = new Typed(".autotype",{
    strings: ["Web Developer" , "I am 16 years old" ] ,
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    
});

document.addEventListener("DOMContentLoaded", function() {
    var redButton = document.querySelector(".red-button");
    var audio = document.getElementById("audio");
    var clicked = false;

    redButton.addEventListener("click", function() {
        if (!clicked) {
            audio.play();
            clicked = true;
        }
    });
});
