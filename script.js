/*$('#recipeCarousel').carousel({
    interval: 10000
});

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
          }
        
        next.children(':first-child').clone().appendTo($(this));
    }
});

*/



function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
  
var body = document.getElementsByTagName('body')[0];
var dark_theme_class = 'dark-theme';
var theme = getCookie('theme');

if(theme != '') {
    body.classList.add(theme);
}

document.addEventListener('DOMContentLoaded', function () {
    if (getCookie('theme')==dark_theme_class){
        document.getElementById('flexSwitchCheckDefault').checked=true;
    }
    else{
        document.getElementById('flexSwitchCheckDefault').checked=false;
    }


    $('#theme-toggle').on('click', function () {

        if (body.classList.contains(dark_theme_class)) {

            body.classList.remove(dark_theme_class);
            setCookie('theme', 'light');
        }
        else {

            body.classList.add(dark_theme_class);

            setCookie('theme', 'dark-theme');
            
        }
    });

});

// enregistrement du theme dans le cookie

function setCookie(name, value) {

    var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires=" + d.toUTCString();
    console.log(expires)
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    console.log(document.cookie)

}




// methode de recuperation du theme dans le cookie

function getCookie(cname) {

    var theme = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');

    for(var i = 0; i < ca.length; i++) {

        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(theme) == 0) {
            return c.substring(theme.length, c.length);
        }
    }
    return "";
}



